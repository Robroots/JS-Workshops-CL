document.addEventListener('DOMContentLoaded', function() {
console.log('DOM');

    var mainLiEls = document.querySelectorAll(".nav>ul>li");
    console.log(mainLiEls)

    for(var i=0;i<mainLiEls.length;i++) {
        mainLiEls[i].addEventListener("mouseover", function(){
            if(this.firstElementChild !== null){
                this.firstElementChild.style.display = "block";
            }
        })

        mainLiEls[i].addEventListener("mouseout", function(){
            if(this.firstElementChild !== null){
                this.firstElementChild.style.display = "none";
            }
        })
    }
});