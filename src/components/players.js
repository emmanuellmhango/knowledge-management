export const players = [
  {
    id: "ENVIRONMENT",
    name: "Environmental Officer",
    roles: ["provide", "ask", "frequency", "covid"],
    emphasized: false,
    relationships: ["IDSR", "CLINICAL"],
    description:
      "The Environmental Officer is responsible for providing the necessary equipment and supplies to the HSA.",
  },
  {
    id: "HSA",
    name: "HSA",
    roles: ["enforce", "patients"],
    emphasized: false,
    relationships: ["ENVIRONMENT", "LABTECH", "CLINICAL"],
    description:
      "The HSA is responsible for enforcing the use of the equipment and supplies provided by the Environmental Officer.",
  },
  {
    id: "IDSR",
    name: "IDSR Coordinator",
    roles: ["screen", "patients"],
    emphasized: false,
    relationships: ["PHIM", "CLINICAL", "ENVIRONMENT"],
    description:
      "The IDSR Coordinator is responsible for screening patients for symptoms of disease.",
  },
  {
    id: "LABTECH",
    name: "Lab Technician",
    roles: ["fill"],
    emphasized: false,
    relationships: ["HSA", "CLINICAL"],
    description:
      "The Lab Technician is responsible for filling out the lab forms.",
  },
  {
    id: "CLINICAL",
    name: "Clinical Officer",
    roles: ["collect", "patients"],
    emphasized: false,
    relationships: ["ENVIRONMENT", "IDSR", "LABTECH", "PHIM"],
    description:
      "The Clinical Officer is responsible for collecting the lab forms from the Lab Technician.",
  },
  {
    id: "PHIM",
    name: "PHIM",
    roles: ["record", "enforce", "covid"],
    emphasized: false,
    relationships: ["CLINICAL", "IDSR"],
    description:
      "The PHIM is responsible for recording the lab forms from the Clinical Officer.",
  },
];
