export default () => {
	    let hh = $('.slick-slide').find('h4'),
	        pp = $('.slick-slide').find('p'),
	        target_chenj = $('.wrap_image_f_slider'),
	        target_img_chej = $('.wrap_image_f_slider img')
		
		let tm = TweenMax
	        tm.to(hh, 0.1 ,{ x:'-20', opacity:'0' })
	        tm.to(hh, 1 ,{ x:'0', opacity:'1' }).delay(0.5)
	    
	        tm.to(pp, 0.1 ,{ y:'-20', opacity:'0' })
	        tm.to(pp, 1 ,{ y:'0', opacity:'1' }).delay(0.5)
	    
	        tm.to(target_chenj, 1 ,{ x: -485, y: 270, ease: Expo.easeOut })
	        tm.to(target_chenj, 1 ,{ x: 0, y: 0, ease: Expo.easeOut }).delay(1)
}