// tslint:disable: typedef
var sounds = ["A.mp3", "C.mp3", "F.mp3", "G.mp3", "hihat.mp3", "kick.mp3", "laugh-1.mp3", "laugh-2.mp3", "snare.mp3"];
function playSamplee(btn) {
    var sound = new Audio(sounds[btn]);
    sound.play();
}
document.querySelector("#btn1").addEventListener("click", function () {
    playSamplee(4);
});
document.querySelector("#btn2").addEventListener("click", function () {
    playSamplee(5);
});
document.querySelector("#btn3").addEventListener("click", function () {
    playSamplee(8);
});
document.querySelector("#btn4").addEventListener("click", function () {
    playSamplee(0);
});
document.querySelector("#btn5").addEventListener("click", function () {
    playSamplee(1);
});
document.querySelector("#btn6").addEventListener("click", function () {
    playSamplee(2);
});
document.querySelector("#btn7").addEventListener("click", function () {
    playSamplee(3);
});
document.querySelector("#btn8").addEventListener("click", function () {
    playSamplee(6);
});
document.querySelector("#btn9").addEventListener("click", function () {
    playSamplee(7);
});
//Drum Machine
var beat = ["kick.mp3", "snare.mp3", "hihat.mp3"];
var index = 0;
index = index + 1;
/* TEST
console.log(index);
console.log(index + 1);
console.log(index - 1);*/
function playBeatt(play) {
    var sound = new Audio(beat[play]);
    sound.play();
}
document.querySelector("img").addEventListener("click", function () {
    setInterval(function () {
        playBeatt(index - 1);
        index = index;
        index = index + 1;
    }, 1000);
});
//# sourceMappingURL=drumpad.js.map