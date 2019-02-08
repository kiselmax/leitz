import $ from 'jquery';
import {materialize} from 'materialize-css'
import mainPresentation from './presentation'
import resultSlider from './feelResult'
import processSteps from './processSteps';
import residentSlider from './recidents'
import feed  from './feetback'
import map from './map'
import sv from './SVGlines'



import mob_menu from './mobMenu'

$(document).ready(function() {

	mainPresentation() // Презентация 1.2 
	resultSlider()     // ВIДЧУТНИЙ РЕЗУЛЬТАТ slider
 	processSteps()     // ПРОЦЕС ОБСЛУГОВУВАННЯ
	residentSlider()   // ЛЮДИ КОМПАНIї slider 
	feed() 			   // ВІДГУКИ НАШИХ КЛІЄНТІВ
	map() 			   // toggle form
	sv()			   // Прелоад svg 
	
	mob_menu()


	// anchor
	$('.steps').click(() => {$('body, html').animate({scrollTop:$('.double-title-for-steps').offset().top},777)})

	$('#preloader').delay(1000).fadeOut(666); //тут задержка



	var up = $(`.move-up`)
	$(window).scroll(function() { // если скролл ниже второго блока, показываем кнопку move up
		let th = $(this).scrollTop() + $(window).height()
		let footer_pos = $(`.wrap-footer`).offset().top;
		
		{ th>600 ? up.css({'opacity':'1'}) : up.css({'opacity':'0'}) }
		{ th > footer_pos ? up.css({'opacity':'0'}) : up.css({'opacity':'1'}) }

		console.log(`footer pos: ${footer_pos}`)
		console.log(`pos: ${th}`)

	})

	up.click( () => {
		$('body, html').animate({scrollTop:$('.top-line').offset().top},777)
	} )



})

