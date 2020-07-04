/*
1. add task: Aufgabe eintragen, addBtn clicken und Aufgabe wird hinzugefügt --> "... in total" verändert sich
2. deleteBtn: wenn geklickt wird Aufgabe gelöscht
3. checked: durch css wird Aufgabe als erledigt markiert, aber als extra könnte Text noch grau werden
*/

// tslint:disable: typedef

let toDoList: string[] = ["einkaufen", "EIA Aufgabe", "weinen"];

console.log(toDoList);

function makeList(): void{
    document.querySelector(".listElement").innerHTML = "";

    for (let index = 0; index < toDoList.length; index++) {
        document.querySelector(".listElement").innerHTML += "<input>" + toDoList[index] + "</input>";
        
    }
}

function addNewElement(): void {
    toDoList.push(); //value von textfeld muss da rein
    makeList();
}

makeList();