package io.openjob.worker.samples.processor;

import com.google.common.collect.Lists;
import io.openjob.worker.context.JobContext;
import io.openjob.worker.processor.MapReduceProcessor;
import io.openjob.worker.processor.ProcessResult;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

/**
 * @author stelin <swoft@qq.com>
 * @since 1.0.0
 */
public class MapReduceProcessorSample implements MapReduceProcessor {
    @Override
    public ProcessResult process(JobContext context) {
        if (context.isRoot()) {
            List<MrTaskTest> tasks = new ArrayList<>();
            for (int i = 1; i < 3; i++) {
                System.out.println("root" + i);
                tasks.add(new MrTaskTest(i, Lists.newArrayList(String.valueOf(1))));
            }

            return this.map(tasks, "TASK_TWO");
        }

        if (context.isTask("TASK_TWO")) {
            MrTaskTest task = (MrTaskTest) context.getTask();

            System.out.println("two paramsId=" + task.getId());
            List<MrTaskTest> tasks = new ArrayList<>();
            for (int i = 1; i < 3; i++) {
                tasks.add(new MrTaskTest(i, Lists.newArrayList(String.valueOf(task.getId() * i))));
            }

            return this.map(tasks, "TASK_THREE");
        }

        if (context.isTask("TASK_THREE")) {
            MrTaskTest task = (MrTaskTest) context.getTask();
            System.out.println("three=" + task.getId() + " name=" + task.getNames().get(0));
            return new ProcessResult(true, String.valueOf(task.getId() * 2));
        }

        return new ProcessResult(false);
    }

    @Override
    public ProcessResult reduce(JobContext jobContext) {
        return new ProcessResult(true);
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class MrTaskTest {
        private Integer id;
        private List<String> names;
    }

    @Data
    @AllArgsConstructor
    public static class MyTestTask {
        private String name;
    }
}
