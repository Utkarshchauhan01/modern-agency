function loadingAnimmation(){
    
var h5timer = document.querySelector("#line-part1 h5")
var grow = 0

var tl = gsap.timeline()
tl.from(".line h1",{
    y : 150,
    stagger : 0.5,
    duration: 0.6,
    delay : 0.4,

})
tl.from("#line-part1 , .line h2",{
    opacity: 0,
    onStart : function(){
        setInterval(function(){
            if(grow < 100){
                h5timer.innerHTML = grow++
            }else{
                h5timer.innerHTML = grow
            }
        },13)
    }
})
tl.to(".line h2", {
    animationName : "anime",
    opacity: 1
})

tl.to("#loader",{
    duration : 0.4,
    delay : 1.3,
    opacity : 0
})
tl.from("#page1",{
    y : 1200,
    opacity: 1,
    delay : 0.2,
    ease : Power4
})

tl.to("#loader",{
    display : "none", 
} )

tl.from("#nav",{
    opacity : 0

})

tl.from(".hero h1 , #hero3 h2",{
    y: 140,
    stagger:0.2

})
}
function cursorAnimation(){

    document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y
    })
})
    Shery.makeMagnet("#nav-part2 h4" /* Element to target.*/, {
  //Parameters are optional.

});
}

loadingAnimmation()
cursorAnimation()
