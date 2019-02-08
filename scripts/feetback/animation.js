//import {$} from 'jquery'
import {TimelineLite, TweenMax} from 'gsap'
import '../../node_modules/gsap2/plugins/DrawSVGPlugin.min';


export function feedScroll() {  // first time on scroll animation fadeIn
    var controller = new ScrollMagic.Controller();
    let tm9 = new TimelineLite() // feedback
    tm9.fromTo(`.the-ava`,.3,{scale:0.7,opacity:0},{scale:1,opacity:1})
    tm9.staggerFromTo(`.graf .q`, .5, {opacity:0},{opacity:1}, .1)
    tm9.staggerFromTo(`.num-of-year`, .3, {x:-10,opacity:0},{x:0,opacity:1}, .1)
  
    tm9.staggerFromTo(`.who-is p`, 1, {x:-10,opacity:0},{x:0,opacity:1},.3)
    tm9.fromTo(`.place-for-text`,1, {opacity:0, y:-20}, { opacity:1, y:0}) 
   
    new ScrollMagic.Scene({
            triggerElement: '.the_wrap_feed',
            triggerHook: 0.7,
            reverse: true
        }).setTween(tm9)
        .addTo(controller)
}



export function changeFeed() {
    let tm = TweenMax
    tm.to(`.who-is`,.3, {opacity:0, x:-20})
    tm.to(`.who-is`,.3, {opacity:1, x:0}).delay(.6)
    tm.to(`.place-for-text`,.3, {opacity:0,y:-20})
    tm.to(`.place-for-text`,.3, {opacity:1,y:0}).delay(.6)
    tm.to(`.the-ava`, .3 , {scale:.9,opacity:0})
    tm.to(`.the-ava`, .3 , {scale:1,opacity:1}).delay(.6)
}

export function fadeOut() {
    let tm = TweenMax
    tm.to(`.active_graf .feeSV line`,.3, { opacity:0 })
} 

export function fadeIn() {
    let tm = TweenMax
    tm.staggerFromTo(`.active_graf .feeSV line`,.2, { drawSVG:'0%', opacity:0 },{ drawSVG:'100%',  opacity:1 },.2)
} 