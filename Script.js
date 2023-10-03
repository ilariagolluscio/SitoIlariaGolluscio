// indirizzamento aprendo una nuova pagina 
function apriPagina(url) {
   window.open(url, '_blank');
   
}

//indirizzamento ad una pagina senza cambiare schermata
function vaiAPagina(url) {
   window.location.href = url;
}

//funzione per scorrere alla sezione di testo dedicata alla voce del menu
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToSectionOtherPage(document,sectionId) {
    const section = document.getElementById(sectionId);
    
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Funzione per scorrere verso l'ancoraggio specificato nell'URL
function scrollToAnchor() {
  const anchor = window.location.hash; // Ottieni l'ancoraggio dall'URL
  if (anchor) {
    const targetElement = document.querySelector(anchor);
     if (targetElement) {
         targetElement.scrollIntoView({ behavior: 'smooth' });
        }
   }
   // Esegui la funzione quando il documento è pronto
  window.addEventListener('DOMContentLoaded', scrollToAnchor);
}

//metti nuovamente visibile la parte di testo scelta dall'utente cliccando il bottone
function mostraTesto(testoId) {

  var testoNascosto = document.getElementById(testoId);
  var tuttiTestiNascosti = document.getElementsByClassName("testonascosto");

  // Nascondi tutti gli elementi con la classe "testo-nascosto"
  for (var i = 0; i < tuttiTestiNascosti.length; i++) {
    tuttiTestiNascosti[i].style.display = "none";
  }

  if (testoNascosto.style.display === "none") {
     testoNascosto.style.display = "block"; // Mostra il testo nascosto
  } else {
    testoNascosto.style.display = "none"; // Nascondi il testo
    document.getElementById('day').style.display = "none"; 
  }
}

function modificaStile() {
  var menuElement = document.getElementById("BloccoCentraleAlbum");
    // aggiungi la classe "stile-modificato" e rimuovi "stile-iniziale"
    menuElement.classList.remove("stile-iniziale");
    menuElement.classList.add("stile-modificato");
}







  
  
  

