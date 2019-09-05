let mediaRecorder;
let audioChunks;
let audioBlob;
let audioUrls = [];
let audioUrl;
let audio;

let recordBtn = document.querySelector("#record");
let stopBtn = document.querySelector("#stop");
recordBtn.onclick = function(e) {
    
}

//This is the base record time out example.
// navigator.mediaDevices.getUserMedia({ audio: true })
//   .then(stream => {
//     mediaRecorder = new MediaRecorder(stream);
//     mediaRecorder.start();

//     audioChunks = [];

//     mediaRecorder.addEventListener("dataavailable", event => {
//       audioChunks.push(event.data);
//     });
//     mediaRecorder.addEventListener("stop", () => {
//         audioBlob = new Blob(audioChunks);
//         audioUrl = URL.createObjectURL(audioBlob);
//         audioUrls.push(audioUrl);
//         audio = new Audio(audioUrl);
//       audio.play();
//       });
//     setTimeout(() => {
//         mediaRecorder.stop();
//       }, 1000);
//   });