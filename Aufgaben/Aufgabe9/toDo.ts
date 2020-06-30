// tslint:disable: typedef

//@Hannah: Danke für die Hilfestellung :)

console.log("test");

let toDoList: string[] = ["einkaufen", "EIA Aufgabe", "weinen"];

function makeList(): void {
    document.querySelector(".listElement").innerHTML = "";
    for (let index: number = 0; index < toDoList.length; index++) {
        console.log(index);
        document.querySelector(".listElement").innerHTML += "<div>" + "<input type='checkbox'>" + toDoList[index] + "<i class='fa fa-trash' aria-hidden='true' id='trash'></i>" + "</div>";
    }

    var count: HTMLElement = document.querySelector(".counter");
    count.innerHTML = toDoList.length + " in total";
    
    document.querySelector("#trash").addEventListener("click", function(): void {
        console.log("click");
        var index: number = 0;
        toDoList.splice( index, 1);
        makeList();
    }); //tasks können nur nach einander gelöscht werden
}

makeList();

var textField: HTMLElement = document.querySelector(".textField");

var addBtn: HTMLElement = document.querySelector(".addBtn");

addBtn.addEventListener("click", function(): void {
    toDoList.push(textField.value);
    makeList();
    textField.value = "";
});