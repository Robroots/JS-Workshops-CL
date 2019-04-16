document.addEventListener('DOMContentLoaded', function() {
console.log('DOM');

var prevBut = document.querySelector("#prevPicture");
var nextBut = document.querySelector("#nextPicture");
var liElements = document.querySelectorAll("li");
var currentImg = 0;
console.log(prevBut,nextBut,liElements);

liElements[0].classList.add("visible");

prevBut.addEventListener("click", function() {
    console.log(liElements.length -1);
    liElements[currentImg].classList.remove("visible");
    currentImg --;
    if(currentImg < 0) {
        currentImg = liElements.length -1;
    }
    liElements[currentImg].classList.add("visible");
});

nextBut.addEventListener("click", function() {
    liElements[currentImg].classList.remove("visible");
    currentImg ++;
    if (currentImg >= liElements.length){
        currentImg = 0;
    }
    liElements[currentImg].classList.add("visible")  
});
});