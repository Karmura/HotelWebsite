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

// Start Gallery

// var swiper = new Swiper(".swiper-container", {
//     slidesPerView: 3,
//     loop: true,
//     effect: 'coverflow',
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: 'auto',
//     coverflowEffect: {
//         rotate: 20,
//         stretch: 0,
//         depth: 200,
//         modifier: 1,
//         slideShadows: true,
//     },
//     // autoplay: {
//     //     delay: 2500,
//     //     disableOnInteraction: false,
//     // }
// });

var swiper = new Swiper(".galleryswiper", {
    loop:true,
    effect: "coverflow",
    slidesPerView: "auto",
    centeredSlides: true,
    grabCursor: true,
    coverflowEffect: {
       rotate: 0,
       stretch: 0,
       depth: 100,
       modifier: 2,
       slideShadows: true,
    },
    pagination: {
       el: ".swiper-pagination",
     },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }
 });

// End Gallery

// Start Contact

var swiper = new Swiper('.reviewsswiper', {
    slidesPerView: 2,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }
    });

// End Contact