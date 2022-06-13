const axios = require("axios");

class Planet {
  constructor(name, terrain, gravity, diameter, population) {
    this.name = name;
    this.terrain = terrain;
    this.gravity = gravity;
    this.diameter = diameter;
    this.population = population;
  }
}

class Character {
  constructor(name, gender, hair_color) {
    this.name = name;
    this.gender = gender;
    this.hair_color = hair_color;
  }
}

class Film {
  constructor(name) {
    this.name = name;
    this.planets = [];
    this.characters = [];
  }

  async getPlanets(planetsURLs) {
    console.log(planetsURLs);
    for await (const a of planetsURLs) {
      const planet = (await axios.get(a)).data;
      this.planets.push(
        new Planet(planet.name, planet.terrain, planet.gravity, planet.diameter, planet.population),
      );
    }
  }

  async getCharacters(charactersURLs) {
    console.log(charactersURLs);
    for await (const a of charactersURLs) {
      const character = (await axios.get(a)).data;
      this.characters.push(new Character(character.name, character.gender, character.hair_color));
    }
  }
}

async function getMovies() {
  const movies = (await axios.get("https://swapi.dev/api/films")).data.results;
  const films = [];
  for await (const movie of movies) {
    console.log(movie);
    const film = new Film(movie.title);
    await film.getPlanets(movie.planets);
    await film.getCharacters(movie.characters);
    films.push(film);
  }
  console.log(films);
}

getMovies();
