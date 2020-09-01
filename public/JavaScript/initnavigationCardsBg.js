function navigationCardsBg() {
  const navigationCards = document.querySelectorAll('.navigation-card')

  const bgColors = {
    pokedexBg : "#4FC1A6#4FC1A6",
    abilitiesBg: "#58AAF6",
    locationsBg: "#7C538C",
    movesBg: "#F98D80",
    itemsBg: "#FFCE4B",
    typeCharts: "#B1736C",
  }

  navigationCards.forEach((navigationCard, index) => {
    const mainClasses = Object.keys(bgColors)
    navigationCard.classList.add(`${mainClasses[index]}`)

    const bgColor = bgColors[navigationCard.classList.item(1)]

    navigationCard.style.backgroundColor = `${bgColor}`
    navigationCard.style.boxShadow = `0px 10px 5px -5px${bgColor + '90'}`
  })
}
navigationCardsBg()