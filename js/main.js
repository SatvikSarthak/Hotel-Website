
//nav-hide
var navBar= document.querySelectorAll(".nav-link");
var navBarCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
               navBarCollapse.classList.remove("show");
    })
})

// swiper slider
var swiper = new Swiper(".mySwiper", {
    direction: 'vertical',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 3500,
    },
});
