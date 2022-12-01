const skills = document.getElementById("Skills");
const proyects = document.getElementById("Proyects");
const contact = document.getElementById("Contact");

const presetationBanner = document.getElementById("presentationBanner");

const divSkills = document.getElementById("divSkills");
const divProyects = document.getElementById("divProyects");
const divContact = document.getElementById("divContact");

skills.addEventListener("click", () => {
  if (
    (divProyects.classList.contains("visible") &&
      presetationBanner.classList.contains("ocultar") &&
      !divSkills.classList.contains("visible")) ||
    (divContact.classList.contains("visible") &&
      presetationBanner.classList.contains("ocultar") &&
      !divSkills.classList.contains("visible"))
  ) {
    console.log("a");
    divContact.classList.remove("visible");
    divProyects.classList.remove("visible");
    divSkills.classList.add("visible");
    return;
  }

  if (
    presetationBanner.classList.contains("ocultar") &&
    divSkills.classList.contains("visible")
  ) {
    console.log("b");
    divSkills.classList.remove("visible");
    presetationBanner.classList.remove("ocultar");
  } else if (
    !presetationBanner.classList.contains("ocultar") &&
    !divSkills.classList.contains("visible")
  ) {
    console.log("c");
    divSkills.classList.add("visible");
    presetationBanner.classList.add("ocultar");
    return;
  }
});

proyects.addEventListener("click", () => {
  if (
    (divContact.classList.contains("visible") &&
      presetationBanner.classList.contains("ocultar") &&
      !divProyects.classList.contains("visible")) ||
    (divSkills.classList.contains("visible") &&
      presetationBanner.classList.contains("ocultar") &&
      !divProyects.classList.contains("visible"))
  ) {
    console.log("a");
    divSkills.classList.remove("visible");
    divContact.classList.remove("visible");
    divProyects.classList.add("visible");
    return;
  }

  if (
    presetationBanner.classList.contains("ocultar") &&
    divProyects.classList.contains("visible")
  ) {
    console.log("b");
    divProyects.classList.remove("visible");
    presetationBanner.classList.remove("ocultar");
  } else if (
    !presetationBanner.classList.contains("ocultar") &&
    !divProyects.classList.contains("visible")
  ) {
    console.log("c");
    divProyects.classList.add("visible");
    presetationBanner.classList.add("ocultar");
    return;
  }
});

contact.addEventListener("click", () => {
  if (
    (divProyects.classList.contains("visible") &&
      presetationBanner.classList.contains("ocultar") &&
      !divContact.classList.contains("visible")) ||
    (divSkills.classList.contains("visible") &&
      presetationBanner.classList.contains("ocultar") &&
      !divContact.classList.contains("visible"))
  ) {
    console.log("a");
    divSkills.classList.remove("visible");
    divProyects.classList.remove("visible");
    divContact.classList.add("visible");
    return;
  }

  if (
    presetationBanner.classList.contains("ocultar") &&
    divContact.classList.contains("visible")
  ) {
    console.log("b");
    divContact.classList.remove("visible");
    presetationBanner.classList.remove("ocultar");
  } else if (
    !presetationBanner.classList.contains("ocultar") &&
    !divContact.classList.contains("visible")
  ) {
    console.log("c");
    divContact.classList.add("visible");
    presetationBanner.classList.add("ocultar");
    return;
  }
});
