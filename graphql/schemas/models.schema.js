const MODELS_SCHEMA = [
  {
    name: "Male Figure",
    description:
      "Low poly smoothed male figure, a spectacular species, they can spend hours in this position, can you believe it?",
    file: "Male.gltf",
  },
  {
    name: "Horse rider",
    description:
      "The horse rider, a spectacular species, they can spend hours in this position, can you believe it?",
    file: "Male_horse.gltf",
  },
  {
    name: "Low Davinci",
    description:
      "Low poly male, perfecto to practice proportions and riggin a spectacular species, they can spend hours in this position, can you believe it?",
    file: "Human.gltf",
  },
  {
    name: "Spider",
    description:
      "Low poly spider, a spectacular species, they can spend hours in this position, can you believe it?",
    file: "Spider.gltf",
  },
  {
    name: "Flamingo",
    description:
      "Low poly flamingo, a spectacular species, they can spend hours in this position, can you believe it?",
    file: "Flamingo.gltf",
  },
  {
    name: "Barrel",
    description:
      "Low poly barrel, an incredible asset you can use in your games, movies or any 3d enviroment you like.",
    file: "Barril.gltf",
  },
  {
    name: "Axe",
    description:
      "Low poly axe, an incredible asset you can use in your games, movies or any 3d enviroment you like.",
    file: "Hacha.gltf",
  },

  {
    name: "Sword",
    description:
      "Low poly sword, a spectacular species, they can spend hours in this position, can you believe it?",
    file: "Espada.gltf",
  },
];

const MODELS_TYPES = `
  type Model { name: String, description: String, file:String }
`;

module.exports = { MODELS_TYPES, MODELS_SCHEMA };
