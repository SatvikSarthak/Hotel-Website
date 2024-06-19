
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

document.addEventListener("DOMContentLoaded",()=>{
    function counter(id,start,end,duration){
        let obj= document.getElementById(id),
        current=start,
        range= end-start,
        increment = end > start ? 1 : -1,
        step= Math.abs(Math.floor(duration/range)),
        timer= setInterval(()=>{
            current += increment;
            obj.textContent=current;
            if(current==end) clearInterval(timer);
        },step);
    }
    counter("count1",0,956,3000);
    counter("count2",0,1256,1400);
    counter("count3",0,3456,2500);
    counter("count4",0,2006,3500);
})