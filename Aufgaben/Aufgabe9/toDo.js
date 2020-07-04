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
//# sourceMappingURL=toDo.js.map