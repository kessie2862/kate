const bodyEl = document.querySelector("body");
const imgTheme = document.querySelector(".themeImg");
const textTheme = document.querySelector("h1");
let msg = new SpeechSynthesisUtterance();
let voices = window.speechSynthesis.getVoices();
const btnTheme = document.querySelector(".btn");

document.querySelector("#btn").addEventListener("click", run);

function behavior() {
  imgTheme.classList.add("hidden");
  textTheme.classList.add("hidden");
  bodyEl.style.backgroundSize = "100% 100vh";
  msg.voice = voices[1];
  msg.volume = 1;
  msg.rate = 1;
  msg.pitch = 2;
  msg.lang = "en-US";
  speechSynthesis.speak(msg);
}

function run(months) {
  const monthOfBirth = document
    .querySelector("#birthMonth")
    .value.toLowerCase();
  if (monthOfBirth === "january") {
    msg.text = "Your next vacation city is maldives";
    bodyEl.style.background = "url(./images/maldives2.webp) no-repeat";
    behavior();
  } else if (monthOfBirth === "february") {
    bodyEl.style.background = "url(./images/marrakech.jpg) no-repeat";
    msg.text = "Your next vacation city is marrakech";
    behavior();
  } else if (monthOfBirth === "march") {
    bodyEl.style.background = "url(./images/parisstock.jpg) no-repeat";
    msg.text = "Your next vacation city is paris";
    behavior();
  } else if (monthOfBirth === "april") {
    bodyEl.style.background = "url(./images/dubaistock.webp) no-repeat";
    msg.text = "Your next vacation city is dubai";
    behavior();
  } else if (monthOfBirth === "may") {
    bodyEl.style.background = "url(./images/montreal2.jpg) no-repeat";
    msg.text = "Your next vacation city is montreal!";
    behavior();
  } else if (monthOfBirth === "june") {
    bodyEl.style.background = "url(./images/bali2.jpg) no-repeat";
    msg.text = "Your next vacation city is Bali!";
    behavior();
  } else if (monthOfBirth === "july") {
    bodyEl.style.background = "url(./images/hawaii3.jpg) no-repeat";
    msg.text = "Your next vacation city is Hawaii";
    behavior();
  } else if (monthOfBirth === "august") {
    bodyEl.style.background = "url(./images/singapore4.jpg) no-repeat";
    msg.text = "Your next vacation city is singapore";
    behavior();
  } else if (monthOfBirth === "september") {
    bodyEl.style.background = "url(./images/rome.jpg) no-repeat";
    msg.text = "Your next vacation city is rome";
    behavior();
  } else if (monthOfBirth === "october") {
    bodyEl.style.background = "url(./images/mykonos3.jpg) no-repeat";
    msg.text = "Your next vacation city is Mykonos";
    behavior();
  } else if (monthOfBirth === "november") {
    bodyEl.style.background = "url(./images/peru.jpg) no-repeat";
    msg.text = "Your next vacation city is peru";
    behavior();
  } else if (monthOfBirth === "december") {
    bodyEl.style.background = "url(./images/turksandcaicos.jpg) no-repeat";
    msg.text = "Your next vacation city is turks and caicos";
    behavior();
  }
}
