const cards = document.querySelectorAll('.cards-section .card')

const cardColors = {
  pokedex: "#48d0b0",
  abilities: "#58aaf6",
  locations: "#7c538c",
  moves: "#fd6d6d",
  items: "#ffdc5e",
  typeCharts: "#b1736c"
}

const colorClass = Object.keys(cardColors)

function addStylesToCard() {
  cards.forEach(card => {
    const cardColorClass = card.classList.item(1)
    card.style.backgroundColor = `${cardColors[cardColorClass]}`
    card.style.boxShadow = `0px 10px 12px -5px${cardColors[cardColorClass] + "90"}`
  })
}

function addCardColorsClass() {
  cards.forEach((card, index) => {
    card.classList.add(`${colorClass[index]}`)
  })
  addStylesToCard()
}

window.addEventListener('load', addCardColorsClass)