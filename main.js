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
    document.getElementById("inputId").pop();
}