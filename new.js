function displayvalue(num){
    inpt.value+=num;
}
function clearbox(){
    inpt.value="";
}
function evalu(){
    let result=eval(inpt.value);
    inpt.value=result;
}
function backspace(){
    let data= inpt.value.slice(0,-1);
    inpt.value=data;
}