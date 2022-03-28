let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');


let opvalue = document.getElementById('select');
let titlev = document.querySelectorAll('a1');

opvalue.onchange = function(){
    let x= opvalue.value;
    num1.onchange = function(){
        num2.value = num1.value * x;
    }
    num2.onchange = function(){
        num1.value = num2.value / x;
    }

    if (x != 0){
        num2.value = num1.value * x;
        num1.placeholder = '0';
    }
}
