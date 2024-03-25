import { IOperation } from "../lib/definitions";

export const bloodTestSchedule: IOperation[] = [
  {
    name: "Transfer",
    description: "plate to position 1",
    duration: 2000
  },
  {
    name: "Dispense",
    description: "blood to test tube 1",
    duration: 2000
  },
  {
    name: "Transfer",
    description: "plate to position 2",
    duration: 2000
  },
  {
    name: "Dispense",
    description: "blood to test tube 2",
    duration: 2000
  },
  {
    name: "Transfer",
    description: "plate to position 3",
    duration: 2000
  },
  {
    name: "Dispense",
    description: "blood to test tube 3",
    duration: 2000
  },
  {
    name: "Transfer",
    description: "plate to position 4",
    duration: 2000
  },
  {
    name: "Dispense",
    description: "blood to test tube 4",
    duration: 2000
  },
  {
    name: "Transfer",
    description: "plate to position 0",
    duration: 4000
  }
];
