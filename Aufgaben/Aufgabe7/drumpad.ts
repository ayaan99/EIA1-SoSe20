// tslint:disable: typedef
var sounds: string [] = ["A.mp3", "C.mp3", "F.mp3", "G.mp3", "hihat.mp3", "kick.mp3", "laugh-1.mp3", "laugh-2.mp3", "snare.mp3"];

function playSample(btn): void { 
    var sound: HTMLAudioElement = new Audio(sounds[btn]);
    sound.play();
  }

document.querySelector("#btn1").addEventListener("click", function(): void {
    playSample(4); } );
document.querySelector("#btn2").addEventListener("click", function(): void {
    playSample(5); } );
document.querySelector("#btn3").addEventListener("click", function(): void {
    playSample(8); } );
document.querySelector("#btn4").addEventListener("click", function(): void {
    playSample(0); } );
document.querySelector("#btn5").addEventListener("click", function(): void {
    playSample(1); } );
document.querySelector("#btn6").addEventListener("click", function(): void {
    playSample(2); } );
document.querySelector("#btn7").addEventListener("click", function(): void {
    playSample(3); } );
document.querySelector("#btn8").addEventListener("click", function(): void {
    playSample(6); } );
document.querySelector("#btn9").addEventListener("click", function(): void {
    playSample(7); } );


//Drum Machine

var beat: string [] = ["kick.mp3", "snare.mp3", "hihat.mp3"];

var index: number = 0;
index = index + 1;


/* TEST
console.log(index);
console.log(index + 1);
console.log(index - 1);*/

function playBeat(play): void {
    var sound: HTMLAudioElement = new Audio (beat[play]);
    sound.play();
}

document.querySelector("img").addEventListener("click", function(): void {
        setInterval(function(): void {
            playBeat(index - 1);
            index = index;
            index = index + 1;
        },          1000);
    });
    