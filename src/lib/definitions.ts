export interface ISchedule<OperationType> {
  name: string;
  operations: OperationType[];
}

export interface IOperation {
  name: string;
  description: string;
  duration: number;
}
