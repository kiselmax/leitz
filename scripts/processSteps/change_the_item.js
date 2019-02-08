import renderCard from './render_the_item'
import { changeItem } from './processesAnimation.js'


//!!!!!!!!!!!!!! note  => add to .quotr-cont .q   opacity:0

export default function(id) {
	console.log(id) //curent id

	let cur_id = id||1

	$(`.fas`).click( function( ) {
		let th = $(this)

		if(th.hasClass(`fa-long-arrow-alt-right`)) {
			{
				cur_id >= 9 ?
			 	cur_id = 0 :
				cur_id++
			}

		} else if(th.hasClass(`fa-long-arrow-alt-left`)) {
				{
					cur_id == 0 ?
				 	cur_id = 9 :
					cur_id--
				}
			
		}
		
		changeItem()
	
		setTimeout( () => {
			renderCard(cur_id)
		},666 )
		
	} )
}