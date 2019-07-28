const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
var synth = window.speechSynthesis;

const greetings = [
  'Im good what do you want from me now?',
  'As always i am great so you can FUCK off ',
  'i am fine just leave me alone'
];

const joey = [
  "OH No No this joey thing doesn't work on me",
  "You are not joey so don't try to be one",
  'OH this joey thingy again'
];

const weather = [
  'weather is fine so you do your work you lazy ass',
  'why do you care you never get out of your house',
  'yeah i knew that you must be thinking of ditching your work giving a bad weather excuse'
];

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function() {
  console.log('voice is activated');
};

recognition.onresult = function(event) {
  const current = event.resultIndex;

  const transcript = event.results[current][0].transcript;

  content.textContent = transcript;
  readOutLoad(transcript);
};

// Add the listener to the button

btn.addEventListener('click', () => {
  recognition.start();
});

function readOutLoad(message) {
  const speech = new SpeechSynthesisUtterance();
  var voices = synth.getVoices();
  console.log(voices);

  speech.text = 'toh main kya kru';

  if (message.includes('how are you')) {
    const finalText = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText;
  } else if (message.includes('how you doing')) {
    const finalText = joey[Math.floor(Math.random() * joey.length)];
    speech.text = finalText;
  } else if (message.includes('weather today' || 'weather')) {
    const finalText = weather[Math.floor(Math.random() * weather.length)];
    speech.text = finalText;
  }

  speech.voice = voices[9];
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}
