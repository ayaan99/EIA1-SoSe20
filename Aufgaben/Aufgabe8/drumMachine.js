// tslint:disable: typedef
function playSample(btn) {
    if (recording == true) {
        beat.push(btn);
    }
    var sound = new Audio(btn);
    sound.play();
}
document.querySelector("#btn1").addEventListener("click", function () {
    playSample("hihat.mp3");
});
document.querySelector("#btn2").addEventListener("click", function () {
    playSample("kick.mp3");
});
document.querySelector("#btn3").addEventListener("click", function () {
    playSample("snare");
});
document.querySelector("#btn4").addEventListener("click", function () {
    playSample("A.mp3");
});
document.querySelector("#btn5").addEventListener("click", function () {
    playSample("C.mp3");
});
document.querySelector("#btn6").addEventListener("click", function () {
    playSample("F.mp3");
});
document.querySelector("#btn7").addEventListener("click", function () {
    playSample("G.mp3");
});
document.querySelector("#btn8").addEventListener("click", function () {
    playSample("laugh-1.mp3");
});
document.querySelector("#btn9").addEventListener("click", function () {
    playSample("laugh-2.mp3");
});
//Drum Machine
var beat = ["kick.mp3", "snare.mp3", "hihat.mp3"];
//PLAY BUTTON:
function playBeat() {
    var index = 0;
    function startBeat() {
        var sound = new Audio(beat[index]);
        sound.play();
        index += 1;
        if (index > 2) {
            index = 0;
        }
    }
    if (playBtn.getAttribute("class") == "fas fa-play-circle") {
        playBtn.setAttribute("class", "fas fa-pause-circle");
        loop = setInterval(startBeat, 500);
    }
    else {
        playBtn.setAttribute("class", "fas fa-play-circle");
        clearInterval(loop);
    }
}
var playBtn = document.querySelector("#playBtn");
playBtn.addEventListener("click", function () {
    playBeat();
});
//RECORD BUTTON:
var recording = false;
var recordBtn = document.querySelector("#recordBtn");
function recordBeat() {
    if (recording == false) {
        recording = true;
        recordBtn.setAttribute("class", "fas fa-stop-circle");
    }
    else {
        recording = false;
        recordBtn.setAttribute("class", "fas fa-record-vinyl");
    }
}
recordBtn.addEventListener("click", function () {
    recordBeat();
});
//DELETE BUTTON:
document.querySelector("#deleteBtn").addEventListener("click", function () {
    beat = [];
});
//# sourceMappingURL=drumMachine.js.map