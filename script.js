//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes, allEpisodes);
  const searchBox = document.querySelector("#search input");
  searchBox.addEventListener('keyup', (e) => {
    searchString = e.target.value;
    filteredEpisodes = allEpisodes.filter(episode => searchMatch(episode, searchString));
    makePageForEpisodes(filteredEpisodes, allEpisodes);
  })
}

function searchMatch(episode, searchString) {
  return (episode.name + episode.summary).match(new RegExp(searchString,"i")) !== null;
}

function makePageForEpisodes(episodeList, allEpisodes) {
  const rootElem = document.getElementById("root");
  rootElem.replaceChildren(...episodeList.map(makeCardForEpisode));
  const searchResultElem = document.getElementById("search-result");
  searchResultElem.innerText = `Displaying ${episodeList.length}/${allEpisodes.length} episodes.`
}

function makeCardForEpisode(episode) {
  const div = document.createElement("div");
  div.appendChild(makeHeadingForCard(episode));

  const img = document.createElement("img");
  img.src = episode.image.medium;
  div.appendChild(img);

  const description = document.createElement("div");
  description.innerHTML = episode.summary;
  div.appendChild(description);

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
