// Start banner

var slideIndex = 1;
showSlides(slideIndex);

function plusSlider(n) {
    showSlides(slideIndex += n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("myslider");
    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// End Banner

// End Contact 

const gettitle = document.querySelectorAll(".contactque");
const getanswer = gettitle.children;

for(let x = 0; x < gettitle.length; x++){
    gettitle[x].children[0].addEventListener("click",function(){
        console.log(gettitle[x].children[1].classList.toggle("active"));
    });
    
};

// for(let i = 0; i < gettitle.length; i++){
//     gettitle[i].addEventListener("click", function(){
//         console.log(gettitle[i].className);
//         // console.log(this.classList.contains(".queans"));
    
// })
// }




// End Contact