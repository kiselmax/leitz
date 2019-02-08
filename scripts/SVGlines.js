import { TweenMax } from 'gsap';
import '../node_modules/gsap2/plugins/DrawSVGPlugin.min';
import scrollAnimate from './scrollHandler'

export default function() {
    const tm = TweenMax;
    
    scrollAnimate();
    // spinner();

    let c1 =  $('.circle1 path'),
        c2 =  $('.circle2 path'),
        l1 =  $('.line1 path'),
        l2 =  $('.line2 path'),
        l3 =  $('.line2little path'),
        l4 =  $('.line-vert1 path'),
        l5 =  $('.line-vert2 path'),
        c3 =  $('.circle-little path');      

    // white
    tm.from(c1, 2, { drawSVG:'0%' });
    tm.from(l1, 0.4, { drawSVG:'0%', opacity:0.2}).delay(2);
    tm.from(l4, 2, {drawSVG:'0%', opacity:0.5}).delay(2);

    // blue
    tm.from(c2, 2, { drawSVG:'0%'}).delay(3);
    tm.from(l2, 0.4, { drawSVG:'0%', opacity:0.2}).delay(4);
    tm.from(l3, 2, {opacity:0, x: 100}).delay(6);
    tm.from(c3, 2, { drawSVG:'0%'}).delay(6);
    tm.from(l5, 2, {drawSVG:'0%', opacity:0.5}).delay(4);

    // logo
    tm.from('.logo-img',2, {opacity:'0'}).delay(1)
    // nav menu
    tm.staggerFrom('.main-nav-menu a', 0.5, {marginTop: -15,opacity:0}, 0.3);
    tm.from( '.contact-phones', 1, { y:'10', opacity:0 } )
    // header text
    tm.from('.the-content-description h1', 0.5, {y:'-10', opacity:'0'})
    tm.from('.main-description', 2, {y:'10',opacity:0});
    tm.from('.main-buttons', 2, {y:'10',opacity:0}).delay(2);
   
    //background
    tm.fromTo('.main-presentation-shadow',1, {backgroundColor:'#000'},{backgroundColor:'rgba(0, 0, 0, 0.8)'}).delay(5);
    // tm.to('.main-presentation', 6, {backgroundSize:'105%'}).delay(6);
}