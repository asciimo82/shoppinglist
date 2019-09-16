var button = document.getElementById("enter");
var input = document.getElementById("newItem");
var ul = document.querySelector("ul");


function inputLength(){
	return input.value.length;
	
}

function addItem(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);	
	input.value = "";	
	addDeleteButton(li);
}

function addItemAfterPressEnter(){
	if (inputLength() > 0 && event.keyCode === 13){
		addItem();
	}
}

function addItemAfterClick(){
	if (inputLength() > 0)
		addItem();
}

function done(){
	var target=event.target;
	target.classList.toggle("done");
}

function addDeleteButton(li){
	var deleteB = document.createElement("button");
	deleteB.innerHTML = "Delete";
	deleteB.onclick = function(){
		alert("HIIII");
	}
	li.appendChild(deleteB);
}

ul.addEventListener("click", done);

button.addEventListener("click", addItemAfterClick);

input.addEventListener("keypress", addItemAfterPressEnter);


