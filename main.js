function display(value){
    document.getElementById("inputId").value += value;
}


function equalBtn(){
    var a = document.getElementById("inputId").value;
    var b = "Ans: " + eval(a);
    document.getElementById("inputId").value = b;
}

function clearAC(){
    document.getElementById("inputId").value = "";
}


function delBtn(){
    var a = document.getElementById("inputId").value;  
    document.getElementById("inputId").value = a.substring(0, a.length - 1); /* remove the element from total length ? 1 */  

}

