console.log("Alou");

async function showDevs() {
  const res = await fetch("http://localhost:3001/devs");
  const json = await res.json();
  const allDevs = json.map((dev) => {
    const {
      picture,
      name,
      email,
      programmingLanguages: [{ id, experience, language }],
    } = dev;

    return {
      picture,
      name,
      id,
      experience,
      language,
    };
  });
  console.log(allDevs);
}

showDevs();
