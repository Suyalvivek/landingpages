var tl = gsap.timeline()
tl.from("#nav",{
    opacity:0,
    delay:0.2
})
tl.from("#nav h1,#nav h3,#nav h4",{
    y:-80,
    opacity:0,
    duration:0.8,
    stagger:0.3
})
tl.from("#left h1,#left img",{
    x:-300,
    opacity:0,
    stagger:0.3
})
tl.from("#right img",{
    opacity:0,
    scale:0.5,
    duration:0.5

})
gsap.from("#page2 .box",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller:"body",
        // markers:true,
        start:"top 70%"
    }
})
var col=document.querySelector("#nav h1")
col.addEventListener("click",function(){
    col.style.color="red" 
})


