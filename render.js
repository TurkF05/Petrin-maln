const image = document.getElementById('myImageButton');
    const audio = document.getElementById('myAudio');

    image.addEventListener('click', function () {
      audio.currentTime = 0; // vrni na začetek
      audio.play();          // predvajaj zvok
    });