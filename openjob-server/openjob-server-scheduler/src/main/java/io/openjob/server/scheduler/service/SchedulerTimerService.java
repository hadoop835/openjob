package io.openjob.server.scheduler.service;

import io.openjob.common.SpringContext;
import io.openjob.common.constant.CommonConstant;
import io.openjob.common.constant.InstanceStatusEnum;
import io.openjob.common.request.ServerSubmitJobInstanceRequest;
import io.openjob.common.response.WorkerResponse;
import io.openjob.common.util.DateUtil;
import io.openjob.common.util.FutureUtil;
import io.openjob.server.common.dto.WorkerDTO;
import io.openjob.server.common.util.ServerUtil;
import io.openjob.server.repository.constant.ExecuteStrategyEnum;
import io.openjob.server.repository.dao.JobInstanceDAO;
import io.openjob.server.repository.dao.JobInstanceLogDAO;
import io.openjob.server.repository.entity.JobInstance;
import io.openjob.server.repository.entity.JobInstanceLog;
import io.openjob.server.scheduler.timer.SchedulerTimerTask;
import io.openjob.server.scheduler.util.WorkerUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.Collections;
import java.util.Objects;
import java.util.Set;

/**
 * @author stelin <swoft@qq.com>
 * @since 1.0.0
 */
@Slf4j
@Service
public class SchedulerTimerService {
    private final JobInstanceLogDAO jobInstanceLogDAO;
    private final JobInstanceDAO jobInstanceDAO;

    public SchedulerTimerService(JobInstanceLogDAO jobInstanceLogDAO, JobInstanceDAO jobInstanceDAO) {
        this.jobInstanceLogDAO = jobInstanceLogDAO;
        this.jobInstanceDAO = jobInstanceDAO;
    }

    /**
     * Task run.
     *
     * @param task task
     */
    public void run(SchedulerTimerTask task) {
        // Concurrency
        if (ExecuteStrategyEnum.isConcurrency(task.getExecuteStrategy())) {
            this.doRun(task, Collections.emptySet());
            return;
        }

        // Discard after task.
        if (ExecuteStrategyEnum.isDiscard(task.getExecuteStrategy())) {
            this.doDiscard(task);
            return;
        }

        // Overlay before task.
        this.doOverlay(task);
    }


    /**
     * Do task run.
     *
     * @param task task
     */
    public void doRun(SchedulerTimerTask task, Set<String> failoverList) {
        ServerSubmitJobInstanceRequest submitReq = new ServerSubmitJobInstanceRequest();
        submitReq.setJobId(task.getJobId());
        submitReq.setJobInstanceId(task.getTaskId());
        submitReq.setJobParams(task.getJobParams());
        submitReq.setWorkflowId(task.getWorkflowId());
        submitReq.setProcessorType(task.getProcessorType());
        submitReq.setProcessorInfo(task.getProcessorInfo());
        submitReq.setExecuteType(task.getExecuteType());
        submitReq.setFailRetryTimes(task.getFailRetryTimes());
        submitReq.setFailRetryInterval(task.getFailRetryInterval());
        submitReq.setConcurrency(task.getConcurrency());
        submitReq.setTimeExpressionType(task.getTimeExpressionType());
        submitReq.setTimeExpression(task.getTimeExpression());

        WorkerDTO workerDTO = WorkerUtil.selectWorkerByAppId(task.getAppid(), failoverList);
        if (Objects.isNull(workerDTO)) {
            this.addInstanceLog(task.getJobId(), task.getTaskId(), "Do not have available worker node!");
            log.error("Do not have available worker node! taskId={} appid={}", task.getTaskId(), task.getAppid());
            return;
        }

        try {
            FutureUtil.mustAsk(ServerUtil.getWorkerTaskMasterActor(workerDTO.getAddress()), submitReq, WorkerResponse.class, 3000L);
            log.info("Dispatch task success! taskId={}", task.getTaskId());

            // Update by dispatcher.
            SpringContext.getBean(SchedulerTimerService.class).updateByDispatcher(workerDTO.getAddress(), task.getJobId(), task.getTaskId(), InstanceStatusEnum.RUNNING, "Dispatch  task success!");
        } catch (Throwable ex) {
            // Add failover list.
            failoverList.add(workerDTO.getAddress());

            // Update by dispatcher.
            this.addInstanceLog(task.getJobId(), task.getTaskId(), Arrays.toString(ex.getStackTrace()));
            log.info("Dispatch task fail! taskId={} message={}", task.getTaskId(), ex.getMessage());
        }
    }

    /**
     * Update by dispatcher.
     *
     * @param workerAddress worker addres.
     * @param jobId         job id.
     * @param instanceId    instance id.
     * @param statusEnum    status
     * @param message       message
     */
    @Transactional(rollbackFor = Exception.class)
    public void updateByDispatcher(String workerAddress, Long jobId, Long instanceId, InstanceStatusEnum statusEnum, String message) {
        // Add instance log.
        this.addInstanceLog(jobId, instanceId, message);

        // Running to update.
        if (InstanceStatusEnum.RUNNING.getStatus().equals(statusEnum.getStatus())) {
            //Fixed update last report time.otherwise repeat dispatch.
            this.jobInstanceDAO.updateByRunning(instanceId, workerAddress, statusEnum, DateUtil.timestamp());
        }
    }

    private void doDiscard(SchedulerTimerTask task) {
        JobInstance jobInstance = this.jobInstanceDAO.getOneByJobIdAndStatus(task.getJobId(), task.getTaskId(), InstanceStatusEnum.RUNNING.getStatus());

        // Exist one task.
        if (Objects.nonNull(jobInstance)) {
            this.addInstanceLog(task.getJobId(), task.getTaskId(), "Discard after task!");
            this.jobInstanceDAO.updateStatusById(task.getTaskId(), InstanceStatusEnum.FAIL.getStatus());
            return;
        }

        // Do run.
        this.doRun(task, Collections.emptySet());
    }

    private void doOverlay(SchedulerTimerTask task) {
        System.out.println(task);
    }

    private void addInstanceLog(Long jobId, Long instanceId, String message) {
        Long timestamp = DateUtil.timestamp();
        JobInstanceLog jobInstanceLog = new JobInstanceLog();
        jobInstanceLog.setJobId(jobId);
        jobInstanceLog.setJobInstanceId(instanceId);
        jobInstanceLog.setMessage(message);
        jobInstanceLog.setDeleted(CommonConstant.NO);
        jobInstanceLog.setCreateTime(timestamp);
        jobInstanceLog.setDeleteTime(0L);
        jobInstanceLog.setUpdateTime(timestamp);
        this.jobInstanceLogDAO.save(jobInstanceLog);
    }
}