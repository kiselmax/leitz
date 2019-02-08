//import { hundredPrecent } from './renderGrafic';
import { switchToPresentation, switchToMain } from './animation'

export default function() {
    // переключает на презентацию
    $('.presentation').click( function() {
        switchToPresentation()
      
        setTimeout( () => {
            $('.but-graf:eq(0)').click()
            TweenMax.fromTo('.left-blue-line', 2, {y:-20}, {opacity:1, y:0}).delay(1);
            //hundredPrecent(6);
            let tmax = new TimelineMax();
            tmax.staggerTo('.compare-item', 0.3, {opacity:1}, 0.1 );
        }, 500 )
    });


    // переключает обратно
    $(`.close-presentat`).click(function() {
    
        switchToMain()
        $('.but-graf').removeClass('actived') 
    })

    
}