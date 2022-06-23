package io.openjob.server.cluster.dto;

import lombok.Data;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

/**
 * @author stelin <swoft@qq.com>
 * @since 1.0.0
 */
@Data
public class NodeJoinDTO implements Serializable {
    /**
     * Join server id.
     */
    private Long serverId;

    /**
     * Join server ip.
     */
    private String ip;

    /**
     * Join server akka address
     */
    private String akkaAddress;
    
    private List<SlotsDTO> slotsDTOS;
}
