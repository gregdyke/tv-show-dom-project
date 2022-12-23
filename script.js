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
  return div;
}

window.onload = setup;
