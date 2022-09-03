package io.openjob.worker.util;

/**
 * @author stelin <swoft@qq.com>
 * @since 1.0.0
 */
public class TaskUtil {
    private TaskUtil() {

    }

    public static String getUniqueId(Long jobId, Long instanceId, Long circleId, Long taskId) {
        return String.format("%d_%d_%d_%d", jobId, instanceId, circleId, taskId);
    }
}
