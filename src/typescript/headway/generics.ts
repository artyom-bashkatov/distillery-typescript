export enum TaskType {
  feature = "feature",
  bug = "bug"
}

type Task<T = TaskType> = {
  name: string;
  type: T
}

const whatever: Task = { name: "Single Sign On", type: TaskType.feature };

type FeatureTask = Task<TaskType.feature>;

// show error
// const feature: FeatureTask = { name: "Single Sign On", type. TaskType.bug}