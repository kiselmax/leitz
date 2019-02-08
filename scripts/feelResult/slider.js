import { slick } from 'slick-carousel'

export default function() {
	    $('.slider-fill-result').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        //autoplay: true,
        autoplaySpeed: 3000,
      });
}