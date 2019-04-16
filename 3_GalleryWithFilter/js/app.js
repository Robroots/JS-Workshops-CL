document.addEventListener('DOMContentLoaded', function() {
console.log('DOM');

    var imgs = document.querySelectorAll("#gallery img");
    var showBtn = document.querySelector("#showButton");
    var hideBtn = document.querySelector("#hideButton");
    var imgInput = document.querySelector("#tagInput");
    console.log(imgs, showBtn, hideBtn, imgInput);

    showBtn.addEventListener("click", function() {
        var inputText = imgInput.value
        imgInput.value = ""
        for(var i=0;i<imgs.length;i++) {
            if(imgs[i].dataset.tag.indexOf(inputText) !== -1 && imgs[i].classList.contains("invisible")) {
                imgs[i].classList.remove("invisible")
            }
        }
    })

    hideBtn.addEventListener("click", function() {
        var inputText = imgInput.value
        imgInput.value = ""
        for(var i=0;i<imgs.length;i++) {
            if(imgs[i].dataset.tag.indexOf(inputText) !== -1 && !imgs[i].classList.contains("invisible")) {
                imgs[i].classList.add("invisible")
            }
        }
    })



/* Algorytm mołgby działać lepiej, ponieważ w razie wpisania w input jakiegokolwiek znaku, który znajduje się w datasecie img, "wyrzuci" ten img. Czyli wpisując w input znak "e", algorytm schowa lub pokaże nam obrazki z "people", "baseball", "bike", "motorbike", "nigthlife". Jeśli takie jest założenie wyszukiwarki - ok, jeśli nie, można tworzyć tablice datasetów i porównywać input z elementami tablic

Ponadto można stworzyć identyczny event dla dwóch przycisków i użyć if dla pożadanego rezultatu 

Poniżej proponowane alternatywne rozwiązanie
*/

// var btns = document.querySelectorAll("button");

// for(var i=0;i<btns.length;i++){
//     btns[i].addEventListener("click", function() {
//         var inputText = imgInput.value
//         imgInput.value = ""
//         for(var i=0;i<imgs.length;i++) {
//             var arr = imgs[i].dataset.tag.split(",")
//             if  (this.id === "hideButton" && arr.indexOf(inputText) !== -1 && !imgs[i].classList.contains("invisible")) {
//                 imgs[i].classList.add("invisible")
//             } else if   (this.id === "showButton" && arr.indexOf(inputText) !== -1 && imgs[i].classList.contains("invisible")) {
//                 imgs[i].classList.remove("invisible")
//             }
//         }
//     })
// }

});

