// https://restcountries.eu/rest/v2/all
let tabCountries = null;
let tabFavorites = null;

let allCountries = [];
let allFavorites = [];

let countCountries = null;
let countFavorites = null;

let totalPopulation = null;
let totalFavorites = null;

let numberFormat = null;

window.addEventListener("load", () => {
  tabCountries = document.querySelector("#tabCountries");
  tabFavorites = document.querySelector("#tabFavorites");

  countCountries = document.querySelector("#countCountries");
  countFavorites = document.querySelector("#countFavorites");

  totalPopulation = document.querySelector("#totalPopulation");
  totalFavorites = document.querySelector("#totalFavorites");

  numberFormat = Intl.NumberFormat("pt-BR");

  fetchCountries();
});

async function fetchCountries() {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const json = await res.json();
  allCountries = json.map((country) => {
    const { numericCode, translations, population, flag } = country;
    return {
      id: numericCode,
      name: translations.pt,
      population,
      flag,
    };
  });
  render();
}

function render() {
  renderCountries();
  renderFavorites();
  renderSummary();
  handleButton();
}

function renderCountries() {
  let countriesHTML = "<div>";
  allCountries.forEach((country) => {
    const { name, flag, id, population } = country;
    const countryHTML = `<div class="country">
      <div> 
        <a id="${id}" class="btn btn-primary">+</a>
      </div>
      <div>
        <img class="img" src="${flag}" alt="${name}">
      </div>
      <div>
        <ul>
          <li>${name}</li>
          <li>${formatNumber(population)}</li>
        </ul>
      </div>
     </div>
     `;

    countriesHTML += countryHTML;
  });
  tabCountries.innerHTML = countriesHTML;
}

function renderFavorites() {
  let favoritesHTML = "<div>";
  allFavorites.forEach((country) => {
    const { name, flag, id, population } = country;
    const favoriteCountryHTML = `
    <div class="country">
      <div> 
        <a id="${id}" class="btn btn-danger">-</a>
      </div>
      <div>
        <img class="img" src="${flag}" alt="${name}">
      </div>
      <div>
        <ul>
          <li>${name}</li>
          <li>${formatNumber(population)}</li>
        </ul>
      </div>
    </div>
    `;

    favoritesHTML += favoriteCountryHTML;
  });
  tabFavorites.innerHTML = favoritesHTML;
}

function renderSummary() {
  countCountries.textContent = allCountries.length;

  totalPopulation.textContent = formatNumber(
    allCountries.reduce((acc, cur) => {
      return acc + cur.population;
    }, 0),
  );

  countFavorites.textContent = allFavorites.length;

  totalFavorites.textContent = formatNumber(
    allFavorites.reduce((acc, cur) => {
      return acc + cur.population;
    }, 0),
  );
}
function handleButton() {
  const countryButtons = Array.from(tabCountries.querySelectorAll(".btn"));
  const favoriteButtons = Array.from(tabFavorites.querySelectorAll(".btn"));
  countryButtons.forEach((button) => {
    button.addEventListener("click", () => addToFavorites(button.id));
  });
  favoriteButtons.forEach((button) => {
    button.addEventListener("click", () => removeFavorites(button.id));
  });

  function addToFavorites(id) {
    const countryToAdd = allCountries.find((country) => country.id === id);
    allFavorites = [...allFavorites, countryToAdd];
    allFavorites.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    allCountries = allCountries.filter((country) => country.id !== id);
    render();
  }
  function removeFavorites(id) {
    const favoriteToRemove = allFavorites.find((country) => country.id === id);
    allCountries = [...allCountries, favoriteToRemove];
    allCountries.sort((a, b) => a.name.localeCompare(b.name));
    allFavorites = allFavorites.filter((country) => country.id !== id);

    render();
  }
}

function formatNumber(number) {
  return numberFormat.format(number);
}
// id, name, population, flag
