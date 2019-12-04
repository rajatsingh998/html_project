function clr(){
    document.getElementById("solution").value=""
}
function  fun(num){
    document.getElementById("solution").value+=num
}
function solve(){
    let exp=document.getElementById("solution").value
    if(exp==''){
        document.getElementById("solution").value='0'
    }
    else{
        var stack=new stack();

        for(let i=0;i<exp.length;i++){
            let temp=exp.charAt(i);
            if(temp>='0' && temp<='9'){
                num=num*10+parseInt(temp);
            }
            else{
                stack.push(num);
                stack.push(temp);
                num=1;
            }
            
 }
                let num1=stack.pop();
            let i=0;    
       while(i<exp.length){
                let sign= stack.pop();
                let num2=stack.pop();
                if(sign=='+'){
                    let num3=num1+num2;
                }
                esle
                 if(sign=='-'){
                     let num3=num2-num1;
                 }
                 else 
                  if(sign=='*'){
                      let num3=num1*num2;
                    }
                else 
                if(sibn=='/'){
                    let num3=num2/num1;
                }
                num1=num3;
        }

  
    document.getElementById("solution").value=num3
    }
}
function del(){
    let num1=document.getElementById("solution").value
    let num2= num1.substring(0,num1.length-1);
    document.getElementById("solution").value=num2
}