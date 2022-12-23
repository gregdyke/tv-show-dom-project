//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  episodeList.map(makeCardForEpisode).forEach((card) => rootElem.appendChild(card));
}

function makeCardForEpisode(episode) {
  const div = document.createElement("div");
  div.appendChild(makeHeadingForCard(episode));
  return div;
}

function makeHeadingForCard(episode) {
  const cardHeading = document.createElement("div");
  const episodeCode = `S0${episode.season}E0${episode.number}`;
  cardHeading.innerHTML = `<span>episode.name</span> - ${episodeCode}`;
  return cardHeading;
}

window.onload = setup;
