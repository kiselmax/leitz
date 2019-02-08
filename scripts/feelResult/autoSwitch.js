
export default function() {
	const delay = 3000
	
	let num = 0
	function timer() {
		{num >= $(`.slick-dots li`).length -1 ? num = 0 : num++ }
		$(`.slick-dots li:eq(${num})`).click()
	}	
	

	var interv = null

	$(`.quatro-normal`).hover(function(ev) {
		interv = setInterval( timer, delay )
	}, function(ev){
		clearInterval(interv)
		console.log(`kill`)
	})

	
}
	

