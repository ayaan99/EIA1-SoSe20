// tslint:disable: typedef

function playSample(btn: string): void { 
    if(recording == true) {
        beat.push(btn);
    }

    var sound: HTMLAudioElement = new Audio(btn);
    sound.play();
  }

document.querySelector("#btn1").addEventListener("click", function(): void {
    playSample("hihat.mp3"); } );
document.querySelector("#btn2").addEventListener("click", function(): void {
    playSample("kick.mp3"); } );
document.querySelector("#btn3").addEventListener("click", function(): void {
    playSample("snare"); } );
document.querySelector("#btn4").addEventListener("click", function(): void {
    playSample("A.mp3"); } );
document.querySelector("#btn5").addEventListener("click", function(): void {
    playSample("C.mp3"); } );
document.querySelector("#btn6").addEventListener("click", function(): void {
    playSample("F.mp3"); } );
document.querySelector("#btn7").addEventListener("click", function(): void {
    playSample("G.mp3"); } );
document.querySelector("#btn8").addEventListener("click", function(): void {
    playSample("laugh-1.mp3"); } );
document.querySelector("#btn9").addEventListener("click", function(): void {
    playSample("laugh-2.mp3"); } );


//Drum Machine

var beat: string [] = ["kick.mp3", "snare.mp3", "hihat.mp3"];

//PLAY BUTTON:
function playBeat(): void {

    var loop: number;
    var index: number = 0;

    function startBeat(): void {
        var sound: HTMLAudioElement = new Audio (beat[index]);
        sound.play();
        index += 1;

        if(index > beat.length) {
            index = 0;
        }
    }

    if (playBtn.getAttribute("class") == "fas fa-play-circle") {
        playBtn.setAttribute("class", "fas fa-pause-circle");
        loop = setInterval(startBeat, 500);

    } else {
        playBtn.setAttribute("class", "fas fa-play-circle");
        clearInterval(loop);
    }
}

var playBtn: HTMLElement = document.querySelector("#playBtn");

playBtn.addEventListener("click", function(){
    playBeat();
});

//RECORD BUTTON:
var recording: boolean = false;
var recordBtn: HTMLElement = document.querySelector("#recordBtn");

function recordBeat(): void {
    if(recording == false){
        recording = true;
        recordBtn.setAttribute("class", "fas fa-stop-circle");
    } else {
        recording = false;
        recordBtn.setAttribute("class", "fas fa-record-vinyl");
    }
}

recordBtn.addEventListener("click", function() {
    recordBeat();
});

//DELETE BUTTON:
document.querySelector("#deleteBtn").addEventListener("click", function (){
    beat = [];
})