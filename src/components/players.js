export const players = [
  {
    id: 1,
    name: "Environmental Officer",
    roles: ["Provide"],
    emphasized: false,
    relationships: [3, 5],
  },
  {
    id: 2,
    name: "HSA",
    roles: ["Enforce"],
    emphasized: false,
    relationships: [1, 4, 5],
  },
  {
    id: 3,
    name: "IDSR Coordinator",
    roles: ["Screen Patients"],
    emphasized: false,
    relationships: [6, 5, 1],
  },
  {
    id: 4,
    name: "Lab Technician",
    roles: ["Fill"],
    emphasized: false,
    relationships: [2, 5],
  },
  {
    id: 5,
    name: "Clinical Officer",
    roles: ["Collect"],
    emphasized: false,
    relationships: [1, 3, 4, 6],
  },
  {
    id: 6,
    name: "PHIM",
    roles: ["Record"],
    emphasized: false,
    relationships: [5, 3],
  },
];
