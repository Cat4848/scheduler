import { ISchedule, IOperation } from "../lib/definitions";

const bloodTestSchedule: ISchedule<IOperation> = {
  name: "Blood Test Schedule",
  operations: [
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
  ]
};

const elephantToothpaste: ISchedule<IOperation> = {
  name: "Elephant Toothpaste",
  operations: [
    {
      name: "Transfer",
      description: "plate to position 1",
      duration: 2000
    },
    {
      name: "Dispense",
      description: "50mL hydrogen peroxide solution",
      duration: 2000
    },
    {
      name: "Dispense",
      description: "20mL dishwashing detergent",
      duration: 3000
    },
    {
      name: "Dispense",
      description: "7 drops of food coloring",
      duration: 3000
    },
    {
      name: "Dispense",
      description: "10mL potassium iodide solution",
      duration: 2000
    },
    {
      name: "Transfer",
      description: "plate to position 0",
      duration: 2000
    }
  ]
};

const schedules = [bloodTestSchedule, elephantToothpaste];
export default schedules;
