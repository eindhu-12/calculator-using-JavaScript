let total=document.querySelector("p")
function validate(val){
    if(total.textContent=="/" ||total.textContent=="+" || total.textContent=="-" ||total.textContent=="%" ||total.textContent=="*" ||total.textContent=="."){
        alert(`Don't Enter  / . +  -  *  % First \n It's Not Validate`);
        total.textContent=0
    }
    else{
    total.textContent=total.textContent==="0"? val : total.textContent+val
    }
}
function evaluation(){ 
    total.textContent=eval(total.textContent)
}
function clearing(){
    total.textContent=0
}
function removeEle(){
    total.textContent=total.textContent.slice(0,-1);
}