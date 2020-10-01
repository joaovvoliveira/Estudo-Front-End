window.addEventListener("load", () => {
  innerDevs();
});

function render() {}

async function innerDevs() {
  const json = await fetch("http://localhost:3001/devs");
  const devs = await json.json();
  listDevs = devs.map((dev) => {
    const {
      age,
      name,
      picture,
      programmingLanguages: [{ language, experience }],
    } = dev;
    return {
      name,
      age,
      picture,
      language,
      experience,
    };
  });
  console.log(listDevs);

  const filterDevs = listDevs.filter((dev) => {
    return dev.experience.toLowerCase() !== "junior";
  });
  console.log(filterDevs);

  const doForEach = listDevs;

  doForEach.forEach((dev) => {
    (dev.nameSize = dev.name.length), (dev.novaIdade = dev.age - 10);
  });
  console.log(doForEach);

  const doReduce = listDevs.reduce((acc, cur) => {
    return acc + cur.age;
  }, 0);
  console.log(doReduce);

  const doFind = listDevs.find((dev) => {
    return dev.age === 53;
  });
  console.log(doFind);
}
