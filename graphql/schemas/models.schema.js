const MODELS_SCHEMA = [
  {
    name: "Male Figure",
    description:
      "Low poly smoothed male figure, designed with blender and smoothed with zbrush. Perfect for 3d printing, no?",
    file: "Male.gltf",
  },
  {
    name: "Horse Rider",
    description:
      "The horse and the rider the perfect cowboy's scene. Of course you would have to create him his hat and boots.",
    file: "Male_horse.gltf",
  },
  {
    name: "Low Davinci",
    description:
      "Low poly male inspired by Leo, perfect for rigging and proportion practices. Yes, he doesn't fit in the circle.",
    file: "Human.gltf",
  },
  {
    name: "Spider",
    description:
      "Low poly poisonous spider, be careful that yellow in its back is not only a bad render but also bad sign!",
    file: "Spider.gltf",
  },
  {
    name: "Flamingo",
    description:
      "Low poly flamingo. Spectacular species, they can spend hours in this position, can you believe it?",
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
      "Low poly sword, an incredible asset you can use in your games, movies or any 3d enviroment you like.",
    file: "Espada.gltf",
  },
];

const MODELS_TYPES = `
  type Model { name: String, description: String, file:String }
`;

module.exports = { MODELS_TYPES, MODELS_SCHEMA };
