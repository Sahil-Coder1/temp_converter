function getA(){
    a = document.getElementById("temp").value;
   return a;
}
function change(){
    getA();
whatTodo(getPreSeletion(),getSeletion(),getA());
}
function getSeletion(){
    select = document.getElementById("to").value;
    return select;
}
function getPreSeletion(){
    select2 = document.getElementById("from").value;
    return select2;
}
function c2f(a){
    b = ((9/5)*a)+32;
    document.getElementById("result").innerHTML= a + " "+getPreSeletion()+ "is equal to "+ b + " "+getSeletion();
   }
function f2c(a){
    b = (5/9)*(a-32);
    document.getElementById("result").innerHTML= a + " "+getPreSeletion()+ "is equal to "+ b + " "+getSeletion();
 
}
function c2k(a){
    b = parseInt(a)+(27315/100);
    document.getElementById("result").innerHTML= a + " "+getPreSeletion()+ "is equal to "+ b + " "+getSeletion();
 
}
function k2c(a){
    b = (a-273.15);
    document.getElementById("result").innerHTML= a + " "+getPreSeletion()+ "is equal to "+ b + " "+getSeletion();
 
}
function f2k(a){
    b = ((a-32)*5/9)+273.15;
    document.getElementById("result").innerHTML= a + " "+getPreSeletion()+ "is equal to "+ b + " "+getSeletion();
 
}
function k2f(a){
    b = (9/5)*(a-273.15)+32;
    document.getElementById("result").innerHTML= a + " "+getPreSeletion()+ "is equal to "+ b + " "+getSeletion();
 
}
function whatTodo(choice1,choice2,a){
if(choice1=="Celcius" && choice2=="Fehrenheit"){
    c2f(a);
}else if(choice1=="Fehrenheit" && choice2=="Celcius"){
    f2c(a);
}else if(choice1=="Fehrenheit" && choice2=="Kelvin"){
    f2k(a);
}else if(choice1=="Celcius" && choice2=="Kelvin"){
    c2k(a);
}else if(choice1=="Kelvin" && choice2=="Celcius"){
    k2c(a);
}else if(choice1=="Kelvin" && choice2=="Fehrenheit"){
    k2f(a);
}else{
    alert("Choose temperature to convert");
}
}
document.addEventListener("keydown", keey);
function keey(event){
            if(event.key == "Enter"){
               whatTodo(getPreSeletion(),getSeletion(),getA());
            }else{  
            }
        return event.key;
        }
    
      /*  (f-32/180=c/100=k-273/100)
         */