<<<<<<< HEAD
/*
1. add task: Aufgabe eintragen, addBtn clicken und Aufgabe wird hinzugefügt --> "... in total" verändert sich
2. deleteBtn: wenn geklickt wird Aufgabe gelöscht
3. checked: durch css wird Aufgabe als erledigt markiert, aber als extra könnte Text noch grau werden
*/
// tslint:disable: typedef
var toDoList = ["einkaufen", "EIA Aufgabe", "weinen"];
console.log(toDoList);
function makeList() {
    document.querySelector(".listElement").innerHTML = "";
    for (var index_1 = 0; index_1 < toDoList.length; index_1++) {
        document.querySelector(".listElement").innerHTML += "<input>" + toDoList[index_1] + "</input>";
    }
}
function addNewElement() {
    toDoList.push(); //value von textfeld muss da rein
    makeList();
}
makeList();
=======
// tslint:disable: typedef
//@Hannah: Danke für die Hilfestellung :)
console.log("test");
var toDoList = ["einkaufen", "EIA Aufgabe", "weinen"];
function makeList() {
    document.querySelector(".listElement").innerHTML = "";
    var _loop_1 = function (index_1) {
        console.log(index_1);
        document.querySelector(".listElement").innerHTML += "<div>" + "<input type='checkbox'>" + toDoList[index_1] + "<i class='fa fa-trash' aria-hidden='true' id='trash'></i>" + "</div>";
        document.querySelector("#trash").addEventListener("click", function () {
            deleteTask(index_1);
        });
    };
    for (var index_1 = 0; index_1 < toDoList.length; index_1++) {
        _loop_1(index_1);
    }
    var count = document.querySelector(".counter");
    count.innerHTML = toDoList.length + " in total";
}
makeList();
var textField = document.querySelector(".textField");
var addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click", function () {
    toDoList.push(textField.value);
    makeList();
    textField.value = "";
});
function deleteTask(index) {
    toDoList.splice(index, 1);
    makeList();
}
>>>>>>> 59dce6c23349111e367e4e4136891ae56f362e11
//# sourceMappingURL=toDo.js.map