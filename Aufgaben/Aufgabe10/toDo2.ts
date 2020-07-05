//Hilfestellung von Markus und Hannah im Praktikum

interface Todo  {
    text: string;
    isChecked: boolean;
}

var todos: Todo[] = [
    {text: "einkaufen", isChecked: true},
    {text: "EIA Aufgabe", isChecked: false},
    {text: "verzweifeln", isChecked: false}
];

var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;
var counterDoneDOMElement: HTMLElement;
var counterOpenDOMElement: HTMLElement;

window.addEventListener("load", function(): void {

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
function drawListToDOM(): void {
    todosDOMElement.innerHTML = "";

    for (let index: number = 0; index < todos.length; index++) {

        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");

        todo.innerHTML =  "<span class='check " + todos[index].isChecked + "'><i class='fas fa-check'></i></span>"
                            + todos[index].text +
                            "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function(): void {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function(): void {
            deleteTodo(index);
        });

        todosDOMElement.appendChild(todo);
    }

    updateCounter();
}

//counter für tasks:
function updateCounter(): void {
    counterDOMElement.innerHTML = todos.length + " in total";

    var checked: number = 0;
    var open: number = 0;

    for (let i: number = 0; i < todos.length; i++) {
        if (todos[i].isChecked == true) {
            checked++;
        } else {
            open++;
        }
    }
    counterDoneDOMElement.innerHTML = checked + " done";
    counterOpenDOMElement.innerHTML = open + " open";
}

//add task:
function addTodo(): void {
    
    if (inputDOMElement.value != "") {
        
        todos.unshift({text: inputDOMElement.value, isChecked: false});
        
        inputDOMElement.value = "";

        drawListToDOM();
    }
}

function toggleCheckState(index: number): void {

    todos[index].isChecked = !todos[index].isChecked;
    
    drawListToDOM();
}

//delete task:
function deleteTodo(index: number): void {
    
    todos.splice(index, 1);
    
    drawListToDOM();
}