document.getElementById("gameList");
const searchInput = document.getElementById("searchInputt");

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  const gameCards = gameList.getElementsByClassName("box");

  for (const card of gameCards) {
    const title = card.querySelector(".title").textContent.toLowerCase();
    if (title.includes(searchTerm)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }
});