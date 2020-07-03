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
//# sourceMappingURL=toDo.js.map