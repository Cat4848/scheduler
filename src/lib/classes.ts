import { ISchedule, IOperation } from "./definitions.js";

export class Schedule implements ISchedule<IOperation> {
  id: string;
  name: string;
  operations: IOperation[];

  constructor(params: ISchedule<IOperation>) {
    this.id = params.id;
    this.name = params.name;
    this.operations = params.operations;
  }
}

export class Operation implements IOperation {
  id: string;
  name: string;
  description: string;
  duration: number;

  constructor(params: IOperation) {
    this.id = params.id;
    this.name = params.name;
    this.description = params.description;
    this.duration = params.duration;
  }
}
