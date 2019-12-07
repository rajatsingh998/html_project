function clr(){
    document.getElementById("solution").value=""
}
function  fun(num){
    document.getElementById("solution").value+=num
}
function solve(){
    let exp=document.getElementById("solution").value
    let num=eval(exp);

  
    document.getElementById("solution").value=num;
    
}
function del(){
    let num1=document.getElementById("solution").value
    let num2= num1.substring(0,num1.length-1);
    document.getElementById("solution").value=num2
}