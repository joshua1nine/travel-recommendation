const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const clearBtn = document.getElementById("clear-btn");
const searchResults = document.getElementById("search-results");

searchBtn.addEventListener("click", async () => {
  console.log("search: ", searchInput.value);
  const searchValue = searchInput.value.toLowerCase();

  // Fetch data from json file
  const res = await fetch("travel_recommendation_api.json");
  const data = await res.json();

  switch (searchValue) {
    case "beach":
    case "beaches":
    case "beachs":
      searchResults.innerHTML = "";
      data.beaches.forEach((beach) => {
        const element = createCard(
          beach.name,
          beach.description,
          beach.imageUrl,
        );
        searchResults.appendChild(element);
      });
      break;

    case "temple":
    case "temples":
      searchResults.innerHTML = "";
      data.temples.forEach((beach) => {
        const element = createCard(
          beach.name,
          beach.description,
          beach.imageUrl,
        );
        searchResults.appendChild(element);
      });
      break;

    case "country":
    case "contry":
    case "countries":
    case "contries":
      searchResults.innerHTML = "";
      data.temples.forEach((beach) => {
        const element = createCard(
          beach.name,
          beach.description,
          beach.imageUrl,
        );
        searchResults.appendChild(element);
      });
      break;
    default:
      searchResults.innerHTML = `<p>No results found found for <strong>${searchValue}</strong></p>`;
  }
});

// Clear search input
clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  searchResults.innerHTML = "";
});

function createCard(name, description, imageUrl) {
  const element = document.createElement("div");
  element.classList.add("card");
  element.innerHTML = `
          <img src="${imageUrl}" alt="${name}">
          <div class="card-info">
            <h2>${name}</h2>
            <p>${description}</p>
            <button>Visit</button>
          </div>
        `;
  return element;
}
