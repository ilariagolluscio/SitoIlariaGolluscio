    document.addEventListener('DOMContentLoaded', function () {

      const circularList = document.getElementById('circular-list');
      let pos = 0;

      const scrollContainer = document.getElementById('list-container');

      // Definisci gli elementi della lista
      const itemsArray = [
          '<p id="Live" data-video-src="video/Ludovico Einaudi - _Elegy for the Arctic_ - Official Live (Greenpeace).mp4">Live Arctic</p><img id="Live" src="img/vinile.png" class="cd" data-video-src="video/Ludovico Einaudi - _Elegy for the Arctic_ - Official Live (Greenpeace).mp4">',
          '<p id="Div" data-video-src="video/Ludovico Einaudi - Divenire (Live from The Royal Albert Hall London _ 2010).mp4">Divenire</p> <img id="Div" src="img/vinile.png" class="cd" data-video-src="video/Ludovico Einaudi - Divenire (Live from The Royal Albert Hall London _ 2010).mp4">',
          '<p id="Exp" data-video-src="video/Ludovico Einaudi - Experience (Official Visualizer).mp4">Experience</p> <img id="Exp" src="img/vinile.png" class="cd" data-video-src="video/Ludovico Einaudi - Experience (Official Visualizer).mp4">',
          '<p id="Onde" data-video-src="video/Ludovico Einaudi - Le Onde (Live at the Old Vic Tunnels _ 2011).mp4">Le Onde</p> <img id="Onde" src="img/vinile.png" class="cd"  data-video-src="video/Ludovico Einaudi - Le Onde (Live at the Old Vic Tunnels _ 2011).mp4">',
          '<p id="Nuv" data-video-src="video/Ludovico Einaudi - Nuvole Bianche (Official Visualiser).mp4">Nuvole Bianche</p> <img id="Nuv" src="img/vinile.png" class="cd" data-video-src="video/Ludovico Einaudi - Nuvole Bianche (Official Visualiser).mp4">',
          '<p id="Mat" data-video-src="video/Ludovico Einaudi – Una Mattina (Live A Fip 2015).mp4">Una Mattina</p> <img id="Mat" src="img/vinile.png" class="cd" data-video-src="video/Ludovico Einaudi – Una Mattina (Live A Fip 2015).mp4">',
          '<p id="Walk" data-video-src="video/Ludovico Einaudi – Walk (Live A Fip 2015).mp4">Walk</p> <img id="Walk" src="img/vinile.png" class="cd"  data-video-src="video/Ludovico Einaudi – Walk (Live A Fip 2015).mp4">'
      ];

      // Aggiungi eventi di clic sugli elementi <li>, <img> e <p>
      circularList.addEventListener('click', function (evento) {
        let clickedIndex;
        if (evento.target.tagName === 'IMG') {
          clickedIndex = Array.from(circularList.children).indexOf(evento.target.parentElement);
        }

        if (clickedIndex !== undefined) {

          if (clickedIndex === 3) {
            // Non fare nulla
          } else if (clickedIndex < 3) {
            pos = 3 - clickedIndex;
            let videoSrc = itemsArray[clickedIndex].match(/data-video-src="(.*?)"/)[1];
            playVideo(videoSrc);
            spostaElementi(itemsArray, pos);
          } else {
            pos = itemsArray.length - (clickedIndex - 3);
            let videoSrc = itemsArray[clickedIndex].match(/data-video-src="(.*?)"/)[1];
            playVideo(videoSrc);
            spostaElementi(itemsArray, pos);
          }

          // Rimuovi la classe 'ingrandito' da tutti gli elementi
          const tuttiGliElementi = circularList.querySelectorAll('li');
          tuttiGliElementi.forEach(function (elemento) {
            elemento.classList.remove('ingrandito');
          });

          // Aggiungi la classe 'ingrandito' all'elemento cliccato
          circularList.children[3].classList.add('ingrandito');

        }
      });

      // Funzione per generare il markup HTML della lista circolare
      function generateCircularList(itemsArray) {
        let html = '';
        for (let i = 0; i < itemsArray.length; i++) {
          html += `<li>${itemsArray[i]}</li>`;
        }
        circularList.innerHTML = html;
      }

      // Inizializza la lista circolare
      generateCircularList(itemsArray);

      function spostaElementi(array, posizioni) {
        for (let i = 0; i < posizioni; i++) {
          const elementoDaSpostare = array.pop();
          array.unshift(elementoDaSpostare);
        }
        generateCircularList(itemsArray);
        centerHorizontalScrollbar();
      }
      
      // Funzione per centrare la barra di scorrimento orizzontale
      function centerHorizontalScrollbar() {
        const scrollWidth = scrollContainer.scrollWidth;
        const containerWidth = scrollContainer.clientWidth;
        const scrollLeft = (scrollWidth - containerWidth) / 2;
        scrollContainer.scrollLeft = scrollLeft;
      }

      function playVideo(videoSrc) {
        const videoContainer = document.getElementById('video-container');
        const videoElement = videoContainer.querySelector('video');

        // Imposta la nuova sorgente video
        videoElement.src = videoSrc;
        videoElement.style.display='block';
        // Avvia il video
        videoElement.play();
      }
});