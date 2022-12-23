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
  const episodeCode = makeEpisodeCode(episode);
  cardHeading.innerHTML = `<span>${episode.name}</span> - ${episodeCode}`;
  return cardHeading;
}

function makeEpisodeCode(episode) {
  const pad = (num) => (num < 10) ? '0' + num : num;
  return `S${pad(episode.season)}E${pad(episode.number)}`;
}

window.onload = setup;
