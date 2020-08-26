const pokemonContainer = document.querySelector(".pokemon-cards-section");

function popPokemonTemplate(pokemons) {
  pokemons.forEach(pokemon => {
    const pokemonCardsColors = {
      fire: "#FD6D6D",
      water : "#58AAF6",
      ground: "#B1736C",
      rock: "#82736C",
      electric: "#ffdc5e",
      ghost: "#7C538C",
      fighting: "#7E7E7D",
      psychic: "#E1D07B",
      grass: "#48D0B0",
      bug: "#548C53",
      fairy: "#EF7BCE",
      flying: "#87CEEB",
      normal: "#ABABAB",
      dragon: "#4F73CF",
      poison: "#A33ACC",
    }

    const mainTypes = Object.keys(pokemonCardsColors)

    const pokemonCard = document.createElement('li')
    pokemonCard.classList.add('pokemon-card')

    pokemonCard.style.backgroundColor = pokemonCardsColors[pokemon.types[0]]

    var types = pokemon.types.map(type => `<small class="type">${type}</small>`)
    types = types.join('')

    const pokemonInnerHtml = 
    `
      <span class="pokemon-id">#${pokemon.id.toString().padStart(3, '0')}</span>
      <div class="card-content">
        <h4>${pokemon.name}</h4>
        <div class="poke-types">
          ${types}
        </div>
      </div>
      <div class="img-container">
        <img src="${pokemon.img}" alt="">
      </div>
    `
    pokemonCard.innerHTML = pokemonInnerHtml
    
    pokemonContainer.appendChild(pokemonCard)
  });
}

function fetchAllPokemons() {
  const promises = [];
  for (i = 1; i <= 150; i++) {
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(pokemonUrl).then((res) => res.json()));
  }
  Promise.all(promises).then((results) => {
    const pokemon = results.map((data) => ({
      name: data.name,
      id: data.id,
      types: data.types.map((type) => type.type.name),
      img: `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png" alt="${data.name}"`
    }));
    popPokemonTemplate(pokemon)
  });
}
fetchAllPokemons();
