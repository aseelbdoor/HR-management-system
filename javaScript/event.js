"use strict";
function hover1(){
    button[0].style.backgroundColor="#98bcff";
}
function hover2(){
    button[0].style.backgroundColor="#c8dbff";
}
let button=document.getElementsByName("submit");
button[0].style.backgroundColor="#c8dbff";
button[0].style.fontWeight="bold";
button[0].style.color="white";
button[0].addEventListener("mouseover",hover1);
button[0].addEventListener("mouseout",hover2);