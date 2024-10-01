var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
/*
const video = document.getElementById('intro-video');
const skipButton = document.getElementById('skip-button');
const introContainer = document.getElementById('intro-container');
const mainContent = document.getElementById('main-content');

// Fonction pour masquer l'intro et afficher le contenu
function hideIntro() {
    introContainer.style.opacity = '0';  // Rend l'intro transparente
    setTimeout(() => {
        introContainer.style.display = 'none';  // Masque l'intro après la transition
        mainContent.style.display = 'block';    // Affiche le contenu de la page
    }, 1000); // Attend la durée de la transition (1 seconde ici)
}

// Masque l'intro après 5 secondes
setTimeout(hideIntro, 3000);

// Permet de sauter l'intro en cliquant sur le bouton
skipButton.addEventListener('click', hideIntro);*/