export const itemDesc = {
  people: "birth_year",
  films: "opening_crawl",
  planets: "diameter",
  species: "classification",
  starships: "model",
  vehicles: "model"
};

export function pretty(field) {
  if (field === "episode_id") {
    return "Episode";
  } else {
    let str = field.split("_").join(" ");
    return str[0].toUpperCase() + str.slice(1);
  }
}

export const itemDetail = {
  people: ["eye_color", "gender", "hair_color", "height", "mass", "skin_color"],
  films: ["director", "episode_id", "producer", "release_date"],
  planets: [
    "climate",
    "gravity",
    "population",
    "terrain",
    "rotation_period",
    "surface_water"
  ],
  species: [
    "name",
    "average_height",
    "average_lifespan",
    "designation",
    "eye_colors",
    "hair_colors"
  ],
  starships: [
    "name",
    "MGLT",
    "cargo_capacity",
    "consumables",
    "cost_in_credits",
    "crew",
    "length"
  ],
  vehicles: ["cargo_capacity", "consumables", "crew", "length", "manufacturer"]
};
