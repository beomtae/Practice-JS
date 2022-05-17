const h1 = document.querySelector("h1");

function resizing() {
  const innerWidth = window.innerWidth;
  if (innerWidth < 1000) {
    document.body.style.backgroundColor = "skyblue";
  } else if (innerWidth < 1300) {
    document.body.style.backgroundColor = "purple";
  } else if (innerWidth < 1500) {
    document.body.style.backgroundColor = "yellow";
  }
}

window.addEventListener("resize", resizing);
