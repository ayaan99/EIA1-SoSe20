// tslint:disable: typedef

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

    function deleteElement(): void {
        var deleteBtn: HTMLElement = document.querySelector("#trash");
        var i;
    
        for (let i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].addEventListener("click", function(): void {
            var div = this.parentElement;
            div.style.display = "none";
            console.log("click");
        });
        
        deleteElement();
    }}
    
}

makeList();

var textField: HTMLElement = document.querySelector(".textField");

var addBtn: HTMLElement = document.querySelector(".addBtn");

addBtn.addEventListener("click", function(): void {
    toDoList.push(textField.value);
    makeList();
    textField.value = "";
});