import { TweenLite, TweenMax } from "gsap";



export default function() {

const tm = TweenMax

	$(`.burger-menu`).click( function() {
		console.log(`d`)
		$(`.mob-menu-wrap`).addClass(`open_menu`)
		$(`body`).css({'overflow-y': 'hidden'})
		tm.staggerFrom(`.mob-menu-wrap a`,1,{x:-10,opacity:0},.3)
		tm.fromTo(`.close-it`,1,{y:-10,opacity:0},{y:0,opacity:1}).delay(1)
		tm.fromTo(`.mob-menu-wrap`,.5,{'height':'0%',opacity:0},{'height':'100%',opacity:1})

	} )

	$(`.close-it`).click( () => {
		tm.to(`.mob-menu-wrap`,.5,{'height':'0%',opacity:0})
		tm.to(`.close-it`,.3,{y:-10,opacity:0})
		setTimeout(() => {
			$(`.mob-menu-wrap`).removeClass(`open_menu`)
		},700);
		$(`body`).css({'overflow-y': 'visible'})
	} )
}