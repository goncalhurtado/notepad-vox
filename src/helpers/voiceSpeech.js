// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// const recognition = new SpeechRecognition();

// const synth = window.speechSynthesis;

// let recognizedText = "";

// // Configurar el reconocimiento de voz
// recognition.lang = "es-ES";
// recognition.interimResults = false;

// // Manejar resultados del reconocimiento
// recognition.onresult = function(event) {
//     recognizedText = event.results[0][0].transcript;
//     console.log("Texto reconocido:", recognizedText);
// };

// // Iniciar el reconocimiento de voz
// function startVoiceRecognition() {
//     recognition.start();
// }

// // Detener el reconocimiento de voz
// function stopVoiceRecognition() {
//     recognition.stop();
// }

// // Reproducir texto como voz
// function speakText(text) {
//     const utterance = new SpeechSynthesisUtterance(text);
//     synth.speak(utterance);
// }