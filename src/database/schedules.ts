import { ISchedule, IOperation } from "../lib/definitions";
import createId from "../lib/createId.js";

const bloodTestSchedule: ISchedule<IOperation> = {
  id: createId(),
  name: "Blood Test Schedule",
  operations: [
    {
      id: createId(),
      name: "Transfer",
      description: "plate to position 1",
      duration: 2000
    },
    {
      id: createId(),
      name: "Dispense",
      description: "blood to test tube 1",
      duration: 2000
    },
    {
      id: createId(),
      name: "Transfer",
      description: "plate to position 2",
      duration: 2000
    },
    {
      id: createId(),
      name: "Dispense",
      description: "blood to test tube 2",
      duration: 2000
    },
    {
      id: createId(),
      name: "Transfer",
      description: "plate to position 3",
      duration: 2000
    },
    {
      id: createId(),
      name: "Dispense",
      description: "blood to test tube 3",
      duration: 2000
    },
    {
      id: createId(),
      name: "Transfer",
      description: "plate to position 4",
      duration: 2000
    },
    {
      id: createId(),
      name: "Dispense",
      description: "blood to test tube 4",
      duration: 2000
    },
    {
      id: createId(),
      name: "Transfer",
      description: "plate to position 0",
      duration: 4000
    }
  ]
};

const elephantToothpaste: ISchedule<IOperation> = {
  id: createId(),
  name: "Elephant Toothpaste",
  operations: [
    {
      id: createId(),
      name: "Transfer",
      description: "plate to position 1",
      duration: 2000
    },
    {
      id: createId(),
      name: "Dispense",
      description: "50mL hydrogen peroxide solution",
      duration: 2000
    },
    {
      id: createId(),
      name: "Dispense",
      description: "20mL dishwashing detergent",
      duration: 3000
    },
    {
      id: createId(),
      name: "Dispense",
      description: "7 drops of food coloring",
      duration: 3000
    },
    {
      id: createId(),
      name: "Dispense",
      description: "10mL potassium iodide solution",
      duration: 2000
    },
    {
      id: createId(),
      name: "Transfer",
      description: "plate to position 0",
      duration: 2000
    }
  ]
};

const schedules = [bloodTestSchedule, elephantToothpaste];
export default schedules;
