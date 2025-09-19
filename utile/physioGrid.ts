export type Props = {
  id: number;
  title: string;
  image: string;
};

export const physioGrid: Props[][] = [
  [
    { id: 1, title: "Manuelle Therapie", image: "/images/physio3.jpg" },
    {
      id: 2,
      title: "Sportphysiotherapie",
      image: "/images/Sportphysiotherapie.jpg",
    },
    {
      id: 3,
      title: "Massagebehandlung",
      image: "/images/Massagebehandlung.jpg",
    },
    { id: 4, title: "Rückenschule", image: "/images/Rückenschule.jpg" },
    { id: 6, title: "Wärmetherapie", image: "/images/Wärmetherapie.jpg" },
    { id: 7, title: "Elektrotherapie", image: "/images/Elektrotherapie-1.jpg" },
  ],
];
