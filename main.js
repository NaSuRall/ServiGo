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

// Sélectionne les éléments
const video = document.getElementById('intro-video');
const skipButton = document.getElementById('skip-button');
const introContainer = document.getElementById('intro-container');
const mainContent = document.getElementById('main-content');


function hideIntro() {
    introContainer.style.opacity = '0'; 
    setTimeout(() => {
        introContainer.style.display = 'none';  
        mainContent.style.display = 'block';    
    }, 1000); 
}

setTimeout(hideIntro, 3000);
