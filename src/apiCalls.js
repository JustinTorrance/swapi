  export const fetchFilmScrollingText = async () => {
    const randomizer = Math.ceil(Math.random() * 7);
    const url = `https://swapi.co/api/films/${randomizer}/`;
    const response = await fetch(url);
    const film = await response.json();
    const body = film.opening_crawl;
    const episode = film.episode_id;
    const title = film.title;
    return {
      episode: episode,
      title: title,
      body: body  
    }
  }

  export const fetchPeople = async () => {
    const url = 'https://swapi.co/api/people/';
    const response = await fetch(url);
    const people = await response.json();
    const personData = await fetchNestedPeopleData(people.results)
    return Promise.all(personData)
  }

  export const fetchNestedPeopleData = async (people) => {
    const unresolvedPromises = await people.map(async person => {
      const homeworld = await fetchHomeWorld(person)
      const species = await fetchSpecies(person)
      return {
        Name: person.name,
        Species: species,
        Homeworld: homeworld.homeWorldName,
        'Homeworld Population': homeworld.homeWorldPopulation
      }
    })
    return Promise.all(unresolvedPromises)
  }

  export const fetchVehicles = async () => {
    const url = 'https://swapi.co/api/vehicles/';
    const response = await fetch(url);
    const vehicleData = await response.json();
    const vehicles = vehicleData.results.map(vehicle => {
      return {
        Name: vehicle.name,
        Model: vehicle.model,
        Capacity: vehicle.passengers,
        Class: vehicle.vehicle_class
      }
    })
    return vehicles
  }

  export const fetchSpecies = async (person) => {
    if (person.species[0]) {
      const response = await fetch(person.species)
      const species = await response.json()
      return species.name       
    } else {
      return 'Unavailable'
    }
  }

  export const fetchPlanets = async () => {
    const url = 'https://swapi.co/api/planets/';
    const response = await fetch(url);
    const planets = await response.json();
    const unresolvedPlanetsData = await fetchNestedPlanetData(planets.results);
    return Promise.all(unresolvedPlanetsData)
  }

  export const fetchNestedPlanetData = async (planets) => {
    const unresolvedPromises = await planets.map(async planet => {
      let planetResidents
      if (planet.residents[0]) {
        planetResidents = await fetchPlanetResidents(planet.residents)        
      } else {
        planetResidents = 'unavailable'
      }

      return {
        Name: planet.name,
        Terrain: planet.terrain,
        Population: planet.population,
        Climate: planet.climate,
        Residents: planetResidents
      }
    })
    return Promise.all(unresolvedPromises)
  }

  export const fetchPlanetResidents = async (residentsURL) => {
    const residents = await residentsURL.map(async (residentURL, index) => {
      const response = await fetch(residentURL);
      const unresolvedResident = await response.json();
      if (unresolvedResident.name === '') {
        return 'unavailable'      
      } else if (index === residentsURL.length - 1) {
              return `${unresolvedResident.name}`        
            } else {
              return `${unresolvedResident.name}, `        
      }
    })
    return Promise.all(residents)      
  }

  export const fetchHomeWorld = async (person) => { 
    const response = await fetch(person.homeworld)
    const world = await response.json()
    return {
      homeWorldName: world.name,
      homeWorldPopulation: world.population
    }
  }

