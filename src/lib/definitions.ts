export interface ISchedule<OperationType> {
  id: string;
  name: string;
  operations: OperationType[];
}

export interface IOperation {
  name: string;
  description: string;
  duration: number;
}
