console.log('OK');

// gsap.from( '#heart1', {
 
//     x: -600,
//     fill: 'orange',
//     opacity: 0,
//     scale: .5,
//     duration: 3
    
//   });

gsap.fromTo("#google", {
  opacity: 0
},
            
  {
  opacity: 1,
  duration: 1.75
})


gsap.fromTo("#shooting_star_tail, #shooting_star_head", {
  x: -700,
  y: -1050,
},
            
{
    x: 0,
    y: 0,
    duration: 1.75,
    ease: "circ",
    delay: 1
});

var star = document.getElementById("big_star")
var tl = new TimelineLite;

tl.to(star, {rotation:10, transformOrigin: "50% 50%"})
  .to(star, {rotation:-10, ease:Sine.easeInOut, repeat:-1, yoyo:true, transformOrigin:"50% 50%", repeatDelay: .2, duration: 1.4 })

// transformOrigin:"50% 50%"

gsap.fromTo("#hanging_stars, #strings", {
  y: -300,
},
            
{
    y: -2,
    duration: 2.25,
    delay: 2
});


var tlstars = new TimelineMax();

tlstars.staggerFromTo("#hanging_stars", 2, {
  skewY:".3deg"
}, {
  skewY:"-.3deg",
  repeat: -1,
  yoyo: true
});
