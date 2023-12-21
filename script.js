gsap.to("#page",{
    scrollTrigger:{
        trigger:`.center-image`,
        start:`top 20%`,
        end:`bottom top`,
        // markers:true,
        pin:true,
        scrub:.5
    }
})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:`#page1`,
        start:`top 70%`,
        end:`5% top`,
        // markers:true,
        scrub:.5
    }
})
tl.from("#page1>h1",{
    top:`40%`,
    opacity:0
})
.from("#page1>h5",{
    top:`10%`,
    opacity:0
})

var main = document.querySelector(".rom-rom");
var circle = document.querySelector(".real")

main.addEventListener("mousemove" , function(dets){
    requestAnimationFrame(()=>{
        circle.style.left = dets.clientX - main.getBoundingClientRect().left + "px"
        circle.style.top = dets.clientY - main.getBoundingClientRect().top + "px"
    })
})

main.addEventListener("mouseleave" , function(){
    circle.style.left = `0%`
    circle.style.top = `10%`
})