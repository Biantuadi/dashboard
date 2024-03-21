export const contratTypes = [
    {
      id: 1,
      label: "Cérémonie 🎊",
    },
    {
      id: 2,
      label: "Marriage 💍",
    },
    {
      id: 3,
      label: "Anniversaire 🎂",
    },
]

export const contratStatus = [
    {
      id: 1,
      label: "Valider",
    },
    {
      id: 2,
      label: "Annuler",
    },
    {
      id: 3,
      label: "En cours",
    },
]

export const fakeContrats = [
    {
      title: "Contrat 1",
      type: 1,
      status: "Valider",
      start: "10:00",
      end: "12:00",
      description: "Cérémonie de Jean et Marie qui se marient. et c'est un contrat de 2h",
      amount: 453,
      date: "2021-10-10",
    },
    {
      title: "Contrat 1",
      type: 1,
      status: "Valider",
      start: "10:00",
      end: "12:00",
      description: "Cérémonie de Jean et Marie qui se marient. et c'est un contrat de 2h",
      amount: 453,
      date: "2021-10-10",
    },
    {
      title: "Contrat 2",
      type: "Marriage 💍",
      status: "Annuler",
      start: "10:00",
      description: "Cérémonie de Jean et Marie qui se marient. et c'est un contrat de 2h",
      end: "12:00",
      amount: 2600,
      date: "2021-10-13",
    },
    {
      title: "Contrat 3",
      type: "Anniversaire 🎂",
      description: "anniversaire de Jean qui fête ses 25 ans",
      status: "Annuler",
      start: "10:00",
      end: "12:00",
      amount: 3250,
      date: "2021-10-18",
    },
    {
      title: "Contrat 4",
      type: "Cérémonie 🎊",
      status: "En cours",
      description: "Cérémonie de Jean et Marie qui se marient. et c'est un contrat de 2h",
      start: "10:00",
      end: "12:00",
      amount: 453,
      date: "2021-10-10",
    },
    {
      title: "Contrat 5",
      type: "Cérémonie 🎊",
      status: "En cours",
      description: "Cérémonie de Jean et Marie qui se marient. et c'est un contrat de 2h",
      start: "10:00",
      end: "12:00",
      amount: 453,
      date: "2021-10-10",
    },
  ];

export interface Contrat {
  title: string;
  type: string;
  status: string;
  start: string;
  end: string;
  description: string;
  amount: number;
  date: string;
}