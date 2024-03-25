export interface ISchedule<OperationType> {
  id: string;
  name: string;
  operations: OperationType[];
}

export interface IOperation {
  id: string;
  name: string;
  description: string;
  duration: number;
}
