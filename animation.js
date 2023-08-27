
let tl= gsap.timeline();
tl.from('.left_container,.right_container',{
    opacity:0,
   scale:0

})
tl.from('.left_innerContainer .personal_info, .right_inner_container .inside_main',{
y:-50,
duration:.3,
opacity:0,
stagger:.2
})






tl.from(".inside_container button , .left_innerContainer button",{
    y:-50,
    opacity:0,
    duration:.2,
    stagger:.2,
    
})
tl.from('.arrow_icon',{
    y:-20,
    // stagger:.2,
    repeat:-1,
    yoyo:true
    })

tl.from(".socials a",{
    x:-50,
    opacity:0,
    duration:.2,
    stagger:.2,

})



