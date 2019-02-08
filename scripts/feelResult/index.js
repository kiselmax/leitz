
import slider from './slider'
import anim from './animat'
//import autoS from './autoSwitch.js'

export default function() {
	slider()
	//autoS() авто переключение при ховер
      // transitions
      let hh = $('.slick-slide').find('h4'),
          pp = $('.slick-slide').find('p'),
          target_chenj = $('.wrap_image_f_slider'),
          target_img_chej = $('.wrap_image_f_slider img')
    
      $('.slick-dots li').click( function() {
        let for_change_img = $(`.slick-current .slide-imager`).attr(`src`);
        setTimeout( () => {
          target_img_chej.attr(`src`,for_change_img)
        },500 )
        
        anim() // hide left and show right animation

      } ) 
      

}