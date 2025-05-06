// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let voices = [];
  function populateVoiceList() {
    if (typeof speechSynthesis === "undefined") {
      return;
    }
    

    voices = speechSynthesis.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      option.value = voices[i].name;
      document.getElementById("voice-select").appendChild(option);
    }
  }
  
  populateVoiceList();
  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }


  const dropdown = document.querySelector("#voice-select");
  let voiceoption = "";
  dropdown.addEventListener("change", (event)=>{
    voiceoption = dropdown.value;
    console.log(voiceoption);
  })

  const txtbox = document.querySelector("#text-to-speak");
  let text = "";
  const synth = window.speechSynthesis;


  txtbox.addEventListener("input", (event)=>{
    text = txtbox.value;
  });

  
  const btn = document.querySelector("#explore button");
  btn.addEventListener("click", (event)=>{
    let utterance = new SpeechSynthesisUtterance(text);
    const selectedVoice = speechSynthesis.getVoices().find(voice => voice.name === voiceoption);
    utterance.voice = selectedVoice;
    console.log(selectedVoice);
    synth.speak(utterance);
  })

  function isTalking() {
    let speaking = document.querySelector("#explore img");
    if (speechSynthesis.speaking) {
      speaking.src = "assets/images/smiling-open.png";
    } else{
      speaking.src = "assets/images/smiling.png";
    }
    requestAnimationFrame(isTalking); 
  }

  isTalking();
}