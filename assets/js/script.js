var toggled = false;
// my toggled button function
function myFunction() {
    var element = document.body;
    // toggled background image
    element.classList.toggle("change_background");
    // changes my div color after toggling
    var item = document.getElementById("todo-box");
    console.log(item.style.backgrounColor);
    console.log(toggled);
    if(!toggled){
        item.style.backgroundColor = "rgba(0, 255, 149, 0.925)";
        item.style.transition="ease-in 1s"
        toggled = true;
    }
    else{
        item.style.backgroundColor = "lightblue";
        toggled=false;
        item.style.transition="ease-in 1s"
    }
    
}