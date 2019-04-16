document.addEventListener('DOMContentLoaded', function() {
console.log('DOM');

    var tTips = document.querySelectorAll(".tooltip")
    console.log(tTips)

    for(var i=0;i<tTips.length;i++){
        tTips[i].addEventListener("mouseover", function() {
            tooltip = document.createElement("span");
            tooltip.classList.add("tooltipText");
            tooltip.innerText = "Text tooltipa";
            this.appendChild(tooltip);
        })

        tTips[i].addEventListener("mouseout", function() {
            this.removeChild(tooltip);
        })
    }
});

/*
 <span class="tooltipText">Text tooltipa</span>
 */