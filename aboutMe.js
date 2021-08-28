const btnName = document.getElementById("btnHunedoara");

btnName.addEventListener("click", ()=> {
    if (btnName.innerText === "More...") {
        btnName.innerText = "Hunedoara county is weel known to be full of touristic attractions. Some of them are: Manastirea Prislop, Castelul Corvinilor, Cetatea Devei, Sarmisegetuza Regia";
    } else {
        btnName.innerText = "More...";
    }
});

const btnMe = document.getElementById("btnMe");

btnMe.addEventListener("click", () => {
    if (btnMe.innerText === "More...") {
        btnMe.innerText ="I also like offroading (with ATV), swimming. Ball sports are also a passion of mine, expecially fotball and basketball. ";
    } else {
        btnMe.innerText = "More...";
    }
});



var buttonScroll = document.getElementById("btnScrollUp");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonScroll.style.display = "block";
  } else {
    buttonScroll.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}