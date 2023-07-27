var view=document.getElementById("btn");
var gd=document.getElementById("body");
var con=document.getElementsByClassName("container");
var ul=document.getElementById("ul");

view.addEventListener("click",myfunction);

function myfunction()
{
    gd.style.background="yellow";
    alert("LETS GO AND LETS GET IT");
    view.innerHTML="clicked";
}