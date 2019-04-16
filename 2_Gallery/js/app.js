document.addEventListener('DOMContentLoaded', function() {
console.log('DOM');

var liElements = document.querySelectorAll(".gallery li");
var bodyTag = document.querySelector("body");
var bigImagePattern = document.querySelector(".fullScreen")
console.log(liElements, bodyTag, bigImagePattern)

for(var i=0;i<liElements.length;i++) {
  liElements[i].addEventListener("click", function() {
    var newBigImage = bigImagePattern.cloneNode(true)
    var src = this.firstElementChild.getAttribute("src");
    newBigImage.firstElementChild.setAttribute("src", src);
    newBigImage.style.display = "block";
    bodyTag.appendChild(newBigImage);

    var btn = newBigImage.querySelector("button");
    btn.addEventListener("click", function() {
    bodyTag.removeChild(newBigImage);
    })
  })
}

});