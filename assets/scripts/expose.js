window.addEventListener('DOMContentLoaded', init);

function init() {
  const select = document.querySelector("#horn-select");
  const volumeSlider = document.querySelector("#volume");
  const btn = document.querySelector("#expose button");
  const jsConfetti = new JSConfetti();
  const hornImg = document.querySelector("#expose img");
  const volImg = document.querySelector("#volume-controls img");
  const audio = document.querySelector("audio.hidden");

  let horn = "";

  select.addEventListener("change", (event) => {
    horn = event.target.value;

    if (horn === "car-horn") {
      hornImg.src = "assets/images/car-horn.svg";
      hornImg.alt = "car horn";
      audio.src = "assets/audio/car-horn.mp3";
    }
    if (horn === "air-horn") {
      hornImg.src = "assets/images/air-horn.svg";
      hornImg.alt = "air horn";
      audio.src = "assets/audio/air-horn.mp3";
    }
    if (horn === "party-horn") {
      hornImg.src = "assets/images/party-horn.svg";
      hornImg.alt = "party horn";
      audio.src = "assets/audio/party-horn.mp3";
    }
  });

  volumeSlider.addEventListener("input", (event) => {
    let vol = event.target.value;
    audio.volume = vol / 100;

    if (vol == 0) {
      volImg.src = "assets/icons/volume-level-0.svg";
    }
    if (vol > 0 && vol < 33) {
      volImg.src = "assets/icons/volume-level-1.svg";
    }
    if (vol >= 33 && vol < 66) {
      volImg.src = "assets/icons/volume-level-2.svg";
    }
    if (vol >= 66) {
      volImg.src = "assets/icons/volume-level-3.svg";
    }
  });

  btn.addEventListener("click", () => {
    audio.currentTime = 0;
    audio.play();

    if (horn === "party-horn") {
      jsConfetti.addConfetti({
        emojis: ['🎉', '🥳', '✨'],
        confettiNumber: 100,
        emojiSize: 50
      });
    }
  });
}
