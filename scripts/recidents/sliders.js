import {slick} from 'slick-carousel'

export default function() {
    //   TEAM
    $(`.slider-of-res`).slick({
        prevArrow:"<span class='before-button'><img class='a-left control-c prev slick-prev' src='./wp-content/themes/twentyseventeen/assets/img/bleft.png'></span>",
        nextArrow:"<span class='after-button'><img class='a-right control-c next slick-next' src='./wp-content/themes/twentyseventeen/assets/img/bright.png'></span>",
        // centerMode: true,
        // centerPadding: '200px',
        draggable: false,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
      });
}