function addDigit(value){
    document.getElementById("result").textContent+=value;
}

function allClear(){
    document.getElementById("result").textContent="";
}

function delC(){
   let deleDigit = document.getElementById("result").textContent.slice(0,-1);
   document.getElementById("result").textContent= deleDigit;
}

function equal(){
    let res = document.getElementById("result").textContent;
    document.getElementById("result").textContent=eval(res);
}