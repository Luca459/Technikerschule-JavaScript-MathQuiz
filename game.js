let spielstand = 1;
let fehler = 0;
game();

function game() {
  if (localStorage.getItem("spielstand") != null) {
    spielstand = localStorage.getItem("spielstand");
  }

  document.getElementById(`feld${spielstand}`).classList.add("active");
}

function weiter() {
    if (fragen(spielstand)) {
	      alert("Die Antwort ist richtig!");
        spielstand++;
	      localStorage.setItem("spielstand", spielstand);
        if (spielstand == 10) {
            alert("Herzlichen Glueckwunsch, du hast gewonnen!");
            neu();
        } else {
            draw();
        }
    } else {
	      alert("Die Antwort ist falsch!");
        fehler++;
        fehlerzaehler();
    }
}

function draw() {
  if (spielstand > 1) {
    document.getElementById(`feld${spielstand - 1}`).classList.remove("active");
    document.getElementById(`feld${spielstand}`).classList.add("active");
  }
}

function fehlerzaehler() {
  if (fehler == 3) {
    alert("Spiel verloren!");
    document.getElementById(`feld${spielstand}`).classList.remove("active");
    neu();
  }
}

function neu() {
  spielstand = 1;
  fehler = 0;

  $(".field").removeClass("active");
  document.getElementById(`feld${spielstand}`).classList.add("active");
  localStorage.setItem("spielstand", spielstand);

}

neuesSpiel.onclick = neu;
naechsterZug.onclick = weiter;
