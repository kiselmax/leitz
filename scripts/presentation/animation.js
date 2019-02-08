
export function changeItem() {
    TweenMax.to('.main-presentation-shadow', 1, { backgroundColor:'#000' })
    TweenMax.to('.main-presentation-shadow', 1, { backgroundColor:'rgba(0, 0, 0, 0.8)' }).delay(1);

          //walpaper.css({'background':'red'});
          TweenMax.fromTo('.left-text h2', 1, {opacity:0, y:-20},{opacity:1,y:0}) //animate title, text
          TweenMax.fromTo('.main-description-presentation', 1, {opacity:0, y:20},{opacity:1,y:0})
}

export function switchToPresentation() {
    TweenMax.to('#area-for-header-svg', .3, { opacity: 0, display:'none' })
    TweenMax.to('.the-content-description', .3, { opacity: 0 })
    TweenMax.to('.the-content-description', .3, { display: 'none' }  ).delay(0.3)
    TweenMax.to('.contact-phones', .3, { opacity: 0 }  )

    setTimeout( () => {
        TweenMax.to('.main-presentation-shadow', .5, { backgroundColor:'#000' }  )
        TweenMax.to('.the_content-presentation', .5, { display:'block', opacity:1 }  )
        TweenMax.to('.contact-phones', .5, { opacity: 1 }  )
        TweenMax.to('.main-presentation-shadow', .5, { backgroundColor:'rgba(0, 0, 0, 0.8)' }  ).delay(2);
    }, 500 )
} 




export function switchToMain() {

    TweenMax.to('.main-presentation-shadow', .5, { backgroundColor:'#000' }  )
    TweenMax.to('.the_content-presentation', .5, { display:'none', opacity:0 }  )
    TweenMax.to('.contact-phones', .5, { opacity: 0 }  )
    TweenMax.to('.main-presentation-shadow', .5, { backgroundColor:'rgba(0, 0, 0, 0.8)' }  ).delay(1);

    setTimeout( () => {
        TweenMax.to('#area-for-header-svg', .5, { opacity: 1, display:'block' })
        TweenMax.to('.the-content-description', .5, { opacity: 1 })
        TweenMax.to('.the-content-description', .5, { display: 'block' }  )
        TweenMax.to('.contact-phones', .5, { opacity: 1 }  )
    
        const tm = TweenMax;
        
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
        tm.from(l1, 0.4, { drawSVG:'0%', opacity:0.2})
        tm.from(l4, 2, {drawSVG:'0%', opacity:0.5})
    
        // blue
        tm.from(c2, 2, { drawSVG:'0%'})
        tm.from(l2, 0.4, { drawSVG:'0%', opacity:0.2})
        tm.from(l3, 2, {opacity:0, x: 100})
        tm.from(c3, 2, { drawSVG:'0%'})
        tm.from(l5, 2, {drawSVG:'0%', opacity:0.5})
    
        // header text
        tm.from('.the-content-description h1', 0.5, {y:'-10', opacity:'0'})
        tm.from('.main-description', 2, {y:'10',opacity:0});
        tm.from('.main-buttons', 2, {y:'10',opacity:0})
    
    },1200 )

  

}