<<<<<<< HEAD
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
=======
// tslint:disable: typedef

//@Hannah: Danke für die Hilfestellung :)

console.log("test");

let toDoList: string[] = ["einkaufen", "EIA Aufgabe", "weinen"];

function makeList(): void {
    document.querySelector(".listElement").innerHTML = "";

    for (let index: number = 0; index < toDoList.length; index++) {
        console.log(index);

        document.querySelector(".listElement").innerHTML += "<div>" + "<input type='checkbox'>" + toDoList[index] + "<i class='fa fa-trash' aria-hidden='true' id='trash'></i>" + "</div>";

        document.querySelector("#trash").addEventListener("click", function(): void {
            deleteTask(index);
        });
    }

    var count: HTMLElement = document.querySelector(".counter");
    count.innerHTML = toDoList.length + " in total";
    
}

makeList();

var textField: HTMLElement = document.querySelector(".textField");

var addBtn: HTMLElement = document.querySelector(".addBtn");

addBtn.addEventListener("click", function(): void {
    toDoList.push(textField.value);
    makeList();
    textField.value = "";
});

function deleteTask(index: number): void {

    toDoList.splice(index, 1);

    makeList();
}
>>>>>>> 59dce6c23349111e367e4e4136891ae56f362e11
