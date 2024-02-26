    myitem = document.getElementById("firsttest");

    myitem.addEventListener("click", onClick);

//I love you test 
    function onClick() {  
        myitem.style.color = "white";  
	myitem.style.background= "red";
    }
    myitem.addEventListener("mouseout", onMouseOut);
function onMouseOut() {
    myitem.style.color = ""; // Reverting color to its original value
    myitem.style.background = ""; // Reverting background to its original value
}

//1. 
thebutton = document.getElementById("thebutton");
otheritem = document.getElementById("buttontest");


// Add an event listener to the button
thebutton.addEventListener("click", onButtonClick);

// Event listener function to change properties of otheritem
function onButtonClick() {
    otheritem.style.color = "lightgreen";
}

// Get the second button element
secondbutton = document.getElementById("secondbutton");
seconditem = document.getElementById("secondtest");
secondbutton.addEventListener("click", onSecondButtonClick);
// Event listener function to change properties of seconditem
function onSecondButtonClick() {
    seconditem.style.backgroundColor = "red";
}

thirdbutton = document.getElementById("thirdbutton");
thirditem = document.getElementById("buttontestthree");
thirdbutton.addEventListener("click", onThirdButtonClick);
// Event listener function to change properties of seconditem
function onThirdButtonClick() {
    thirditem.style.backgroundColor = "orange";
}

textentry = document.getElementById("myinput");  
textentry.addEventListener("change", onChange);

function onChange() {  
    newtext = myinput.value;  
    otheritem.innerHTML = newtext;  
}