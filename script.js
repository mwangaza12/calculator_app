let display = document.getElementById('display');

function addToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = "";
}
function del(){
    display.value = display.value.slice(0, -1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }catch{
        display.value = "Error";
    }
}