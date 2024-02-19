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