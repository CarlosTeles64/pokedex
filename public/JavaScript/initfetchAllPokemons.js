const pokemonCards = document.querySelector(".pokemon-cards");

function displayPopUp(id) {
  console.log(id)
}

function createPokemonCardTemplate(pokemons) {

    const typeColors = {
      fire: "#F98D80",
      grass: "#4FC1A6",
      electric: "#FFCE4B",
      ghost: "#7C538C",
      rock: "#82736C",
      ground: "#B1736C",
      water: "#58AAF6",
      fighting: "#7E7E7D",
      psychic: "#E1D07B",
      dragon: "#4F73CF",
      poison: "#9B6DFD",
      normal: "#C4C4C4",
      flying: "#87CEEB",
      fairy: "#FD6D98",
      bug: "#538C63"
    }

    pokemons.forEach(pokemon => {
      
    const pokemonCard = document.createElement("li")
    pokemonCard.classList.add('pokemon-card')

    pokemonCard.addEventListener('click', () => {
      displayPopUp(pokemon.id)
    })

    const mainType = pokemon.types[0]
    
    pokemonCard.style.backgroundColor = `${typeColors[mainType]}`

    const typesTemplate = pokemon.types.map(type => `<small class="type">${type}</small>`).join('')

    const pokemonTemplate = 
    `
    <span class="pokemon-id">#${pokemon.id.toString().padStart(3, "0")}</span>
    <div class="pokemon-card-content">
      <h4>${pokemon.name}</h4>
      ${typesTemplate}
    </div>
    <div class="pokemon-card-img">
      <img src="${pokemon.imgURL}"" alt="${pokemon.name}">
    </div>
    `
    pokemonCard.innerHTML = pokemonTemplate
    pokemonCards.appendChild(pokemonCard)
    });
  }

function fetchData() {
  const promise = [];
  for (i = 1; i <= 150; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    const res = fetch(url).then((res) => res.json());
    promise.push(res);
  }
  Promise.all(promise).then((results) => {
    const pokemons = results.map((pokemonData) => ({
      name: pokemonData.name,
      id: pokemonData.id,
      types: pokemonData.types.map((type) => type.type.name),
      imgURL: `https://pokeres.bastionbot.org/images/pokemon/${pokemonData.id}.png" alt="${pokemonData.name}`,
    }));
    createPokemonCardTemplate(pokemons)
  });
}
fetchData();
