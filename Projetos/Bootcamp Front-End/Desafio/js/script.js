const globalState = {
  allDevs: [],
  filteredDevs: [],
  loadingData: true,
  checkJava: true,
  checkJavascript: true,
  checkPython: true,
  radioAnd: true,
  radioOr: false,
};

async function start() {
  globalListaDevs = document.querySelector("#listaDevs");
  globalInptBusca = document.querySelector("#inptBusca");
  globalCheckJava = document.querySelector("#ckeckboxJava");
  globalCheckJavascript = document.querySelector("#ckeckboxJavascript");
  globalCheckPython = document.querySelector("#checkboxPython");
  globalRadioAnd = document.querySelector("#radioAnd");
  globalRadioOr = document.querySelector("#radioOr");

  qtdDevs = document.querySelector("#qtdDevs");

  await innerDevs();

  globalInptBusca.addEventListener("input", inputChange);

  globalCheckJava.addEventListener("input", checkBoxClick);
  globalCheckJavascript.addEventListener("input", checkBoxClick);
  globalCheckPython.addEventListener("input", checkBoxClick);

  globalCheckRadioAnd.addEventListener("input", checkRadioClick);
  globalCheckRadioOr.addEventListener("input", checkRadioClick);

  filterDevs();
}

async function innerDevs() {
  const json = await fetch("http://localhost:3001/devs");
  const devs = await json.json();
  allDevs = devs.map((dev) => {
    const {
      age,
      name,
      picture,
      programmingLanguages: [{ language, experience }],
    } = dev;
    const lowerCaseName = name.localeLowerCase();
    return {
      ...dev,
      searchName: removeAccentMarksFrom(lowerCaseName)
        .split("")
        .filter((char) => char !== " ")
        .join(""),
      onlyLanguages: getOnlyLanguagesFrom(programmingLanguages),
    };
  });

  render();
}

function render() {
  renderDevs();
  renderBuscas();
}

function renderDevs() {
  let devsHTML = "<div>";
  allDevs.forEach((dev) => {
    const { age, name, picture, language, experience } = dev;
    const devHTML = `
    <div class="card display">
    <img src="${picture}" class="card-img-top" alt="${name}">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${language} - ${experience}</p>
    </div>
  </div>
    `;
    devsHTML += devHTML;
  });
  listaDevs.innerHTML = devsHTML;
}

function renderBuscas() {
  function buscaDevs(event) {
    const filtrados = allDevs.filter((dev) => {
      const { age, name, picture, language, experience } = dev;
      return name === event.target.value;
    });
  }

  inptBusca.addEventListener("keyup", buscaDevs);
  qtdDevs.textContent = allDevs.length;
}
