//Bearbeitet unter Zuhilfenahme von https://youtu.be/n_ec3eowFLQ und in Zusammenarbeit mit Jasmin Basler

//Deklaration von Variable, die häufig im Code verwendet werden:
var tonfolge: number[] = [];        //-> leeres Array um die vom Computer zufällig generierte Tonfolge zu speichern
var spielerTonfolge: number[] = []; //-> leeres Array um die geklickten Töne durch den Spieler zu speichern
var aufleuchten: number;            //-> zum Bestimmen welcher Button aufleuchten soll
var runde: number;                  //-> zum Bestimmen in welcher Spielrund/Wiederholung man sich befindet
var richtig: boolean;               //-> zum Bestimmen ob ein Button richtig geklickt wurde oder nicht
var computerRunde: boolean;         //-> zum Bestimmen, wann der Computer einen Ton/die Tonfolge spielen soll
var intervalId: number;             //-> damit das Interval (mit dem die Buttons aufleuchten) wieder gelöscht werden kann
var töne: boolean = true;           //-> zum Bestimmen, wann ein Button einen Ton spielen soll oder nicht
var gewonnen: boolean;              //-> zum Bestimmen ob der Spieler gewonnen hat oder nicht
var start: boolean = false;         //-> damit die Buttons nicht vor Spielstart geklickt werden können
var level: number;                  //-> um den richtigen Schwierigkeitsgrad bei der Gewinnen-Bedingung zuweisen zu können

//Auswählen und Deklarieren aller Buttons aus der HTML-Datei für einfacheren Aufruf im Code:
var btn1: HTMLElement = document.querySelector("#btn1"); //Spiel-Buttons 1 bis 5
var btn2: HTMLElement = document.querySelector("#btn2");
var btn3: HTMLElement = document.querySelector("#btn3");
var btn4: HTMLElement = document.querySelector("#btn4");
var btn5: HTMLElement = document.querySelector("#btn5");
var leicht: HTMLElement = document.querySelector("#level1"); //Schwierigkeitsgrade 1(leicht) bis 4(extem)
var normal: HTMLElement = document.querySelector("#level2");
var schwer: HTMLElement = document.querySelector("#level3");
var extrem: HTMLElement = document.querySelector("#level4");

//Auf die Schwierigkeitsgrade werden EventListener gesetzt, damit diese bei Klick den Spielstart initialisieren:
leicht.addEventListener("click", function(): void { 
    gameStartLeicht(); }); //Aufruf der Funktion zum Spielstart mit der Schwierigkeitsstufe "Leicht"
    
normal.addEventListener("click", function(): void {
    gameStartNormal(); }); //Aufruf der Funktion zum Spielstart mit der Schwierigkeitsstufe "Normal"

schwer.addEventListener("click", function(): void {
    gameStartSchwer(); }); //Aufruf der Funktion zum Spielstart mit der Schwierigkeitsstufe "Schwer"
 
extrem.addEventListener("click", function(): void {
    gameStartExtrem(); }); //Aufruf der Funktion zum Spielstart mit der Schwierigkeitsstufe "Extrem"

//Funktionen zum Spielstart:
function gameStartLeicht(): void { //Funktion zum Spielstart mit der Schwierigkeitsstufe "Leicht"
//bei jedem Spielstart neue Wertzuweisung für Variablen:
    gewonnen = false; //-> damit man bei Spielstart noch nicht gewonnen hat
    tonfolge = [];    //-> leeres Array, weil noch keine Tonfolge generiert wurde
    spielerTonfolge = []; //-> leeres Array bei Spielstart, weil noch keine Nutzerinteraktion passiert ist
    aufleuchten = 0;  //-> Index damit beim ersten Wert aus der Tonfolge der entsprechende Button aufleuchten soll
    intervalId = 0;   //-> Index um das Interval später wieder zu löschen
    runde = 1;        //-> erste Runde bei Spielstart
    richtig = true;   //-> weil noch kein Button falsch geklickt wurde 
    level = 0;        //-> damit die Schwierigkeitsgrade auseinandergehalten werden (relevant für Gewinnen-Bedingung)

    //Schleife damit die zufälligen Werte in das Tonfolge-Array gepusht werden:
    for (var i: number = 0; i <= 5; i++) { //5 Werte werden in das leere Array gepusht, weil bei 1. Level max. 5 Töne gespielt werden müssen, um zu gewinnen
        tonfolge.push(Math.floor(Math.random() * 5) + 1); //mit Math.random Werte werden Werte von 1 bis 5 zusammengemischt, weil im Spiel 5 Grundtöne benutz werden. Mit Math.floor werden nur ganzzahlige Werte gespeichert.
    }

    computerRunde = true;  //->Computer soll zum Spielstart einen Ton spielen
    intervalId = setInterval(spielrunde, 800); //alle 800ms soll Funktion 'spielrunde' ausgeführt werden 
                                               //dadurch leuchten die Buttons auf bis das Interval wieder gelöscht wird
}

function gameStartNormal(): void { //Funktion zum Spielstart mit der Schwierigkeitsstufe "Normal"
//gleiche Wertzuweisung wie bei 'gameStartLeicht'
    gewonnen = false; 
    tonfolge = [];
    spielerTonfolge = [];
    aufleuchten = 0;
    intervalId = 0;
    runde = 1;
    richtig = true;
    level = 1; //anderen Wert für Gewinnen-Bedingung

    for (var i: number = 0; i <= 15; i++) { //15 Werte werden in das leere Array gepusht, weil bei 2. Level max. 15 Töne gespielt werden müssen
        tonfolge.push(Math.floor(Math.random() * 5) + 1); //aber immer noch Werte von 1 bis 5, weil 5 Grundtöne
    }

    computerRunde = true;
    intervalId = setInterval(spielrunde, 800);
}

function gameStartSchwer(): void { //Funktion zum Spielstart mit der Schwierigkeitsstufe "Schwer"
//gleiche Wertzuweisung wie bei 'gameStartLeicht'
    gewonnen = false; 
    tonfolge = [];
    spielerTonfolge = [];
    aufleuchten = 0;
    intervalId = 0;
    runde = 1;
    richtig = true;
    level = 2; //anderen Wert für Gewinnen-Bedingung

    for (var i: number = 0; i <= 25; i++) { //25 Werte werden in das leere Array gepusht, weil bei 3. Level max. 25 Töne gespielt werden müssen
        tonfolge.push(Math.floor(Math.random() * 5) + 1);
    }

    computerRunde = true;
    intervalId = setInterval(spielrunde, 800);
}

function gameStartExtrem(): void { //Funktion zum Spielstart mit der Schwierigkeitsstufe "Extrem"
//gleiche Wertzuweisung wie bei 'gameStartLeicht'
    gewonnen = false; 
    tonfolge = [];
    spielerTonfolge = [];
    aufleuchten = 0;
    intervalId = 0;
    runde = 1;
    richtig = true;
    level = 3; //anderen Wert für Gewinnen-Bedingung

    for (var i: number = 0; i <= 35; i++) { //35 Werte werden in das leere Array gepusht, weil bei 4. Level max. 35 Töne gespielt werden müssen
        tonfolge.push(Math.floor(Math.random() * 5) + 1);
    }

    computerRunde = true;
    intervalId = setInterval(spielrunde, 800);
}

//Funktion um das Aufleuchten der Buttons zu steuern:
function spielrunde(): void {
    start = false; //-> damit man während dem Aufleuchten nicht auf die Buttons klicken kann

    //Wenn Anzahl des Aufleuchtens der Spielrundenlänge entspricht..
    if (aufleuchten == runde) { //(also die Spielrunde beendet ist)
            clearInterval (intervalId); //..dann soll das Interval gelöscht werden (das Aufleuchten wird gestoppt)
            computerRunde = false; //-> der Computer spielt keine weiteren Töne mehr
            stopAufleuchten(); // Funktionsaufruf damit alle Buttons in ihrer ursprünglichen Farbe erscheinen
            start = true; //-> die Buttons können nun vom Spieler geklickt werden
        }

    if (computerRunde) { //Wenn der Computer aber noch die Tonfolge abspielt..
        stopAufleuchten(); //..dann sollen alle Buttons zuerst ihre normale Farbe bekommen
        //es wird ein Timeout gesetzt damit die Buttons nur kurz aufleuchten und den Ton abspielen
        setTimeout(function(): void { 
        //Wenn der erste Wert im Tonfolgen-Array gleich 1 ist..
        if (tonfolge[aufleuchten] == 1) { //("aufleuchten" ist der Index für die 0. Stelle im Tonfolge-Array)
                    //Funktionsaufruf für Buttton1
                    button1(); } //..dann soll der 1. Button einen Ton abspielen & aufleuchten
        if (tonfolge[aufleuchten] == 2) { //Wenn der erste Wert im Tonfolgen-Array gleich 2 ist..
                    button2(); }          //..dann soll der 2. Button einen Ton abspielen & aufleuchten
        if (tonfolge[aufleuchten] == 3) { //Wenn der erste Wert im Tonfolgen-Array gleich 3 ist..
                    button3(); }          //..dann soll der 3. Button einen Ton abspielen & aufleuchten
        if (tonfolge[aufleuchten] == 4) { //Wenn der erste Wert im Tonfolgen-Array gleich 4 ist..
                    button4(); }          //..dann soll der 4. Button einen Ton abspielen & aufleuchten
        if (tonfolge[aufleuchten] == 5) { //Wenn der erste Wert im Tonfolgen-Array gleich 5 ist..
                    button5(); }          //..dann soll der 5. Button einen Ton abspielen & aufleuchten
        //Der Index "aufleuchten" wird inkrementiert:
        aufleuchten++;  //damit die nächstem Stellen im Array den Buttons zugewiesen werden können
            },     200); //nach 200ms soll ein Button einen Ton abspielen und aufleuchten
        }
    }

//Funktionen damit die Buttons einen Ton abspielen können:
function button1(): void {
        if (töne) { //Wenn ein Ton abgespielt werden soll..
            let audio: HTMLAudioElement = new Audio("boing.mp3"); //..dann spielt der Button diese Audio-Datei ab
            audio.play();
        }
        töne = true; //-> ein Ton soll abgespielt werden
        btn1.style.backgroundColor = "rgb(255, 167, 117)"; //und der Button bekommt eine andere Farbe
    }
function button2(): void { //siehe Funktion "button1"
        if (töne) { 
            let audio: HTMLAudioElement = new Audio("boing2.mp3");
            audio.play();
        }
        töne = true;
        btn2.style.backgroundColor = "rgb(255, 167, 117)";
    }

function button3(): void { //siehe Funktion "button1"
        if (töne) {
            let audio: HTMLAudioElement = new Audio("squeaking.mp3");
            audio.play();
        }
        töne = true;
        btn3.style.backgroundColor = "rgb(255, 167, 117)";
    }

function button4(): void { //siehe Funktion "button1"
        if (töne) {
            let audio: HTMLAudioElement = new Audio("whistle.mp3");
            audio.play();
        }
        töne = true;
        btn4.style.backgroundColor = "rgb(255, 167, 117)";
    }

function button5(): void { //siehe Funktion "button1"
        if (töne) {
            let audio: HTMLAudioElement = new Audio("whistle2.mp3");
            audio.play();
        }
        töne = true;
        btn5.style.backgroundColor = "rgb(255, 167, 117)";
    }

//Funktion damit alle Buttons ihre ursprüngliche Farbe haben, wenn das Spiel beginnt oder verloren wurde:
function stopAufleuchten(): void {
        btn1.style.backgroundColor = "rgb(91, 207, 211)";
        btn2.style.backgroundColor = "rgb(91, 207, 211)";
        btn3.style.backgroundColor = "rgb(91, 207, 211)";
        btn4.style.backgroundColor = "rgb(91, 207, 211)";
        btn5.style.backgroundColor = "rgb(135, 227, 243)";
    }

//Funktion damit alle Buttons aufleuchten, wenn das Spiel gewonnen wurde:
function hervorheben(): void {
        btn1.style.backgroundColor = "rgb(255, 167, 117)";
        btn2.style.backgroundColor = "rgb(255, 167, 117)";
        btn3.style.backgroundColor = "rgb(255, 167, 117)";
        btn4.style.backgroundColor = "rgb(255, 167, 117)";
        btn5.style.backgroundColor = "rgb(255, 167, 117)";
    }

//Auf die Spiel-Buttons werden EventListener gesetzt, damit diese bei Klick einen Ton abspielen und der dazugehörige Wert in das Spieler-Tonfolge-Array gepusht wird:
btn1.addEventListener("click", function(): void {
        if (start) { //Wenn die Buttons geklickt werden können..
            spielerTonfolge.push(1); //..dann soll bei Klick eine 1 ins Spieler-Tonfolge-Array gepusht werden
            vergleichen(); //Funktionsaufruf damit der geklickte Ton mit der Tonfolge verglichen wird
            button1(); //Funktionsaufruf damit der Button einen Ton spielt, wenn er geklickt wurde
            if (!gewonnen) { //Wenn man noch nicht gewonnen hat..
                setTimeout(function(): void { //..dann soll ein Timeout gesetzt werden..
                    stopAufleuchten(); //..damit die Buttons nach 300ms wieder normal aussehen
                },         300);
            }
        }
    });

btn2.addEventListener("click", function(): void { //siehe "btn1.addEventListener"
        if (start) {
            spielerTonfolge.push(2); //eine 2 wird gepusht
            vergleichen();
            button2(); //der Ton für Button 2 wird abgespielt
            if (!gewonnen) {
                setTimeout(function(): void {
                    stopAufleuchten();
                },         300);
            }
        }
    });

btn3.addEventListener("click", function(): void { //siehe "btn1.addEventListener"
        if (start) {
            spielerTonfolge.push(3); //eine 3 wird gepusht
            vergleichen();
            button3(); //der Ton für Button 3 wird abgespielt
            if (!gewonnen) {
                setTimeout(function(): void {
                    stopAufleuchten();
                },         300);
            }
        }
    });

btn4.addEventListener("click", function(): void { //siehe "btn1.addEventListener"
        if (start) {
            spielerTonfolge.push(4); //eine 4 wird gepusht
            vergleichen();
            button4(); //der Ton für Button 4 wird abgespielt
            if (!gewonnen) {
                setTimeout(function(): void {
                    stopAufleuchten();
                },         300);
            }
        }
    });

btn5.addEventListener("click", function(): void { //siehe "btn1.addEventListener"
        if (start) {
            spielerTonfolge.push(5); //eine 5 wird gepusht
            vergleichen();
            button5(); //der Ton für Button 5 wird abgespielt
            if (!gewonnen) {
                setTimeout(function(): void {
                    stopAufleuchten();
                },         300);
            }
        }
    });

//Funktion damit die Werte im Tonfolge-Array und Spieler-Array vergliechen werden:
function vergleichen(): void {
        //wenn die Spieler-Tonfolge nicht der generierten Tonfolge entspricht:
        if (spielerTonfolge[spielerTonfolge.length - 1] !== tonfolge[spielerTonfolge.length - 1]) {
            //("[spielerTonfolge.lengt - 1]" ist der letzte Wert der geklickt wurde)
            richtig = false; //..dann wurde nicht richtig geklickt
            spielVerloren(); //und Funktion für verlorenes Spiel wird aufgerufen
        }

        //Wenn das leichte Level zum Spielen ausgewählt wurde..
        if (level == 0) {
            if (spielerTonfolge.length == 5 && richtig) { //..und wenn die Spieler-Tonfolge 5 Töne lang ist und in der richtigen Reihenfolge abgespielt wurde
                spielGewonnen(); //..dann wird Funktion für gewonnenes Spiel aufgerufen
            }
        }
        //Wenn das normale Level zum Spielen ausgewählt wurde..
        if (level == 1) {
            if (spielerTonfolge.length == 15 && richtig) { //dann gewinnt der Spieler, wenn die Spieler-Tonfolge 15 Töne lang ist und in der richtigen Reihenfolge abgespielt wurde
                spielGewonnen();
            }
        }
        //Wenn das schwere Level zum Spielen ausgewählt wurde..
        if (level == 2) {
            if (spielerTonfolge.length == 25 && richtig) { //dann gewinnt der Spieler, wenn die Spieler-Tonfolge 25 Töne lang ist und in der richtigen Reihenfolge abgespielt wurde
                spielGewonnen();
            }
        }
        //Wenn das extreme Level zum Spielen ausgewählt wurde..
        if (level == 3) {
            if (spielerTonfolge.length == 35 && richtig) { //dann gewinnt der Spieler, wenn die Spieler-Tonfolge 35 Töne lang ist und in der richtigen Reihenfolge abgespielt wurde
                spielGewonnen();
            }
        }

    
        if (richtig == false) { //Wenn ein falscher Button geklickt wurde..
            hervorheben(); // ..dann sollen alle Buttons kurz aufleuchten
            setTimeout(function(): void { 
                stopAufleuchten(); //das Aufleuchten wird nach 300ms beendet
            },         300);
            
            töne = false; //..und die Buttons spielen keinen Ton mehr ab
        }

        //Wenn die Spielrundenlänge und die gespielte Tonfolge gleich sind, alles richtig geklickt wurde und man noch nicht gewonnen hat..
        if (runde == spielerTonfolge.length && richtig && !gewonnen) { 
            runde++; //..dann soll die nächste runde beginnen
            spielerTonfolge = []; //..die Spieler-Tonfolge soll gelöscht werden, damit die neuen Werte in der nächsten Runde wieder gespeichert werden
            computerRunde = true; //..der Computer soll die Tonfolge abspielen
            aufleuchten = 0; //..beim ersten Wert aus der Tonfolge soll der entsprechende Button aufleuchten
            intervalId = setInterval(spielrunde, 800); //alle 800ms soll Funktion 'spielrunde' ausgeführt werden 
            //dadurch leuchten die Buttons auf bis das Interval wieder gelöscht wird
        }
}

//Funktion für verlorenes Spiel:
function spielVerloren(): void {
    function loseSound(): void { //Funktion für den Fehler-Ton
        let audio: HTMLAudioElement = new Audio ("booo.mp3");
        audio.play();
    }
    loseSound(); //Funktionsaufruf für Fehler-Ton
    
    //window alter mit der Meldung, dass man verloren hat und wie man von vorne anfangen kann:
    window.alert("Schade! Du hast leider verloren :( Klicke auf 'Ok', wähle einen Schwierigkeitsgrad aus und versuche es erneut."); 
}

//Funktion für gewonnenes Spiel:
function spielGewonnen(): void {
    function winSound(): void { //Funktion für den Gewinner-Ton
        let audio: HTMLAudioElement = new Audio ("yeah.mp3");
        audio.play();
    }
    winSound(); //Funktionsaufruf für Gewinner-Ton
    hervorheben(); //alle Buttons leuchten auf
    start = false; //man kann nicht weiter spielen
    gewonnen = true; //es wurde gewonnen
         
    //window alert mit Meldung, dass man gewonnen hat und eine neue Runde beginnen kann:
    window.alert("Herzlichen Glückwunsch! Du hast gewonnen :) Wenn du noch eine Runde spielen möchtest, klicke auf 'Ok' und wähle wieder einen Schwierigkeitsgrad aus.");
    }