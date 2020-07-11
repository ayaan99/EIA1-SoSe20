// tslint:disable: no-any
//Hilfestellung von Rebecca und Markus im Praktikum
var todos = [
    { text: "einkaufen", isChecked: true },
    { text: "EIA Aufgabe", isChecked: false },
    { text: "verzweifeln", isChecked: false }
];
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
var counterDoneDOMElement;
var counterOpenDOMElement;
window.addEventListener("load", function () {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    counterDoneDOMElement = document.querySelector("#counterDone");
    counterOpenDOMElement = document.querySelector("#counterOpen");
    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();
});
//create Task:
function drawListToDOM() {
    todosDOMElement.innerHTML = "";
    var _loop_1 = function (index_1) {
        var todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + todos[index_1].isChecked + "'><i class='fas fa-check'></i></span>"
            + todos[index_1].text +
            "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function () {
            toggleCheckState(index_1);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            deleteTodo(index_1);
        });
        todosDOMElement.appendChild(todo);
    };
    for (var index_1 = 0; index_1 < todos.length; index_1++) {
        _loop_1(index_1);
    }
    updateCounter();
}
//counter für tasks:
function updateCounter() {
    counterDOMElement.innerHTML = todos.length + " in total";
    var checked = 0;
    var open = 0;
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].isChecked == true) {
            checked++;
        }
        else {
            open++;
        }
    }
    counterDoneDOMElement.innerHTML = checked + " done";
    counterOpenDOMElement.innerHTML = open + " open";
}
//add task:
function addTodo() {
    if (inputDOMElement.value != "") {
        todos.unshift({ text: inputDOMElement.value, isChecked: false });
        inputDOMElement.value = "";
        drawListToDOM();
    }
}
function toggleCheckState(index) {
    todos[index].isChecked = !todos[index].isChecked;
    drawListToDOM();
}
//delete task:
function deleteTodo(index) {
    todos.splice(index, 1);
    drawListToDOM();
}
window.addEventListener("load", function () {
    var artyom = new Artyom();
    artyom.addCommands({
        indexes: ["Erstelle Aufgabe *"],
        smart: true,
        action: function (i, wildcard) {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
            todos.unshift({
                text: wildcard,
                isChecked: false
            });
            drawListToDOM();
        }
    });
    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
});
//# sourceMappingURL=toDo2.js.map