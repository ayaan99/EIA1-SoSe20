// tslint:disable: typedef
console.log("test");
var toDoList = ["einkaufen", "EIA Aufgabe", "weinen"];
function makeList() {
    document.querySelector(".listElement").innerHTML = "";
    for (var index_1 = 0; index_1 < toDoList.length; index_1++) {
        console.log(index_1);
        document.querySelector(".listElement").innerHTML += "<div>" + "<input type='checkbox'>" + toDoList[index_1] + "<i class='fa fa-trash' aria-hidden='true' id='trash'></i>" + "</div>";
    }
    var count = document.querySelector(".counter");
    count.innerHTML = toDoList.length + " in total";
    function deleteElement() {
        var deleteBtn = document.querySelector("#trash");
        var i;
        for (var i_1 = 0; i_1 < deleteBtn.length; i_1++) {
            deleteBtn[i_1].addEventListener("click", function () {
                var div = this.parentElement;
                div.style.display = "none";
                console.log("click");
            });
            deleteElement();
        }
    }
}
makeList();
var textField = document.querySelector(".textField");
var addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click", function () {
    toDoList.push(textField.value);
    makeList();
    textField.value = "";
});
//# sourceMappingURL=toDo.js.map