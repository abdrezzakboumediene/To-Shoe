var buy = document.querySelector(".buy");
var main = document.querySelector(".main");
var swipe = document.querySelector(".swipe");
var button = document.getElementById("le");
var buttonn = document.getElementsByClassName("close");

    buy.style.opacity = "0";
    buy.style.scale = "0";

button.addEventListener("click", function(){
    /*this.classList.toggle("click");
    buy.classList.toggle("open");*/
    buy.style.opacity = 1;
    buy.style.scale = 1;
});

    buy.style.opacity = "0";
    buy.style.scale = "0";