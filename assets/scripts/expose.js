// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO


  const select = document.querySelector("#horn-select");
  const volumeLevel = document.createElement("audio");
  let horn = "";


  select.addEventListener("change", (event)=>{
    // console.log(event.target.value);
    if(event.target.value=="car-horn"){
      horn = event.target.value;
      let carhornimg = document.querySelector("#expose img");
      carhornimg.src = "assets/images/car-horn.svg";
      carhornimg.alt = "car horns";
    }
    if(event.target.value=="air-horn"){
      horn = event.target.value;
      let airhornimg = document.querySelector("#expose img");
      airhornimg.src = "assets/images/air-horn.svg";
      airhornimg.alt = "air horn";
    }
    if(event.target.value=="party-horn"){
      horn = event.target.value;
      let partyhornimg = document.querySelector("#expose img");
      partyhornimg.src = "assets/images/party-horn.svg";
      partyhornimg.alt = "car horns";
    }
  });

  const volumeSlider = document.querySelector("#volume");

  volumeSlider.addEventListener("input", (event)=>{
    const vol = event.target.value;
    console.log(vol);
    if(vol==0){
      let volimg = document.querySelector("#volume-controls img");
      volimg.src = "assets/icons/volume-level-0.svg";
      volumeLevel.volume = volumeSlider.value / 100;
    }
    if(vol > 0 && vol < 33){
      let volimg = document.querySelector("#volume-controls img");
      volimg.src = "assets/icons/volume-level-1.svg";
      volumeLevel.volume = volumeSlider.value / 100;
    }
    if(vol > 33 && vol < 66){
      let volimg = document.querySelector("#volume-controls img");
      volimg.src = "assets/icons/volume-level-2.svg";
      volumeLevel.volume = volumeSlider.value / 100;
    }
    if(vol > 66){
      let volimg = document.querySelector("#volume-controls img");
      volimg.src = "assets/icons/volume-level-3.svg";
      volumeLevel.volume = volumeSlider.value / 100;
    }
  });


  const btn = document.querySelector("#expose button");

  const jsConfetti = new JSConfetti();
  const canvas = document.querySelector("canvas");

  btn.addEventListener("click", (event)=>{
    if(horn=="car-horn"){
      let audio = new Audio("assets/audio/car-horn.mp3");
      audio.volume = volumeLevel.volume;
      audio.play();
    }
    if(horn=="air-horn"){
      let audio = new Audio("assets/audio/air-horn.mp3");
      audio.volume = volumeLevel.volume;
      audio.play();
    }
    if(horn=="party-horn"){
      let audio = new Audio("assets/audio/party-horn.mp3");
      audio.volume = volumeLevel.volume;
      audio.play();
      jsConfetti.addConfetti({
        emojis: ['🎉', '🥳', '✨'],
        confettiNumber: 100,
        emojiSize: 50
      });
    }
  });



}