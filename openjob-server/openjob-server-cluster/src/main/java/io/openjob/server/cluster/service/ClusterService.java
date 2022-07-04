package io.openjob.server.cluster.service;

import io.openjob.server.cluster.ClusterStatus;
import io.openjob.server.cluster.context.Node;
import io.openjob.server.cluster.dto.NodeFailDTO;
import io.openjob.server.cluster.dto.NodeJoinDTO;
import io.openjob.server.cluster.dto.WorkerFailDTO;
import io.openjob.server.cluster.dto.WorkerJoinDTO;
import io.openjob.server.cluster.util.ClusterStatusUtil;
import io.openjob.server.repository.constant.ServerStatusConstant;
import io.openjob.server.repository.dao.JobSlotsDAO;
import io.openjob.server.repository.dao.ServerDAO;
import io.openjob.server.repository.entity.JobSlots;
import io.openjob.server.repository.entity.Server;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * @author stelin <swoft@qq.com>
 * @since 1.0.0
 */
@Log4j2
@Service
public class ClusterService {
    private final ServerDAO serverDAO;
    private final JobSlotsDAO jobSlotsDAO;

    @Autowired
    public ClusterService(ServerDAO serverDAO, JobSlotsDAO jobSlotsDAO) {
        this.serverDAO = serverDAO;
        this.jobSlotsDAO = jobSlotsDAO;
    }

    /**
     * Receive node join message.
     */
    public void receiveNodeJoin(NodeJoinDTO join) {
        log.info("Join node starting {}({})", join.getAkkaAddress(), join.getServerId());

        // Refresh nodes.
        this.refreshNodes();

        // Refresh slots.
        this.refreshJobSlots(true);

        // Remove timing wheel slots.

        log.info("Join node success {}({})", join.getAkkaAddress(), join.getServerId());
    }

    public void receiveNodeFail(NodeFailDTO fail) {
        log.info("Fail node starting {}({})", fail.getAkkaAddress(), fail.getServerId());

        // Refresh nodes.
        this.refreshNodes();

        // Refresh slots.
        this.refreshJobSlots(false);

        log.info("Fail node starting {}({})", fail.getAkkaAddress(), fail.getServerId());
    }

    public void receiveWorkerJoin(WorkerJoinDTO workerJoinDTO) {
        System.out.println(workerJoinDTO);
    }

    public void receiveWorkerFail(WorkerFailDTO workerFailDTO) {
        System.out.println(workerFailDTO);
    }

    /**
     * Refresh nodes.
     */
    private void refreshNodes() {
        List<Server> servers = serverDAO.listServers(ServerStatusConstant.OK.getStatus());
        ClusterStatusUtil.refreshNodes(servers);
    }

    private void refreshJobSlots(Boolean isJoin) {
        Node currentNode = ClusterStatus.getCurrentNode();
        Set<Long> currentSlots = ClusterStatus.getCurrentSlots();
        List<JobSlots> jobSlots = jobSlotsDAO.listJobSlotsByServerId(currentNode.getServerId());
        Set<Long> newSlots = jobSlots.stream().map(JobSlots::getId).collect(Collectors.toSet());

        if (isJoin) {
            ClusterStatus.refreshCurrentSlots(newSlots);
            currentSlots.removeAll(newSlots);

        } else {
            ClusterStatus.refreshCurrentSlots(newSlots);
            newSlots.removeAll(currentSlots);
        }

        ClusterStatusUtil.refreshSlotsListMap(jobSlots);
    }
}
