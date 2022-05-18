const clockTitle = document.querySelector(".js-clock");

function getDday() {
  const christmasEve = new Date("2022-12-24");
  const today = new Date();

  const dday = christmasEve - today;

  const day = String(Math.floor(dday / (1000 * 60 * 60 * 24)));
  const hour = String(Math.floor((dday / (1000 * 60 * 60)) % 24)).padStart(
    2,
    "0"
  );
  const min = String(Math.floor((dday / (1000 * 60)) % 60)).padStart(2, "0");
  const sec = String(Math.floor((dday / 1000) % 60)).padStart(2, "0");

  clockTitle.innerText = `${day}d ${hour}h ${min}m ${sec}s`;
}

getDday();
setInterval(getDday, 1000);
