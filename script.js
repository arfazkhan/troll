// You can add more features or modify the behavior based on your requirements
document.addEventListener('DOMContentLoaded', function () {
    const music = document.getElementById('background-music');
    const djText = document.querySelector('.dj-text');
  
    // Function to toggle music on/off
    function toggleMusic() {
      if (music.paused) {
        music.play();
      } else {
        music.pause();
      }
    }
  
    // Event listener for clicking on DJ text to toggle music
    djText.addEventListener('click', toggleMusic);
  });
  