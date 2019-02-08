export default function() {


	let inMaine = 0,
		inChild = 0,
		timer = 0,
		timerVal = 0,
		delay = 7000


	function updateInterval() {
		if(inMaine && !inChild) {
			if(!timer) {
				timer = setInterval(runClick, delay)
			}
		} else {
			if(timer) {
				clearInterval(timer)
				timer = 0
			}
		}
	}

	function runClick() {
		{ timerVal<5 ? ++timerVal : timerVal=0 }
		$(`.but-graf:eq(${timerVal})`).click()
	} 


	$(`.the_content-presentation`).hover(function() {
		++inMaine
		updateInterval()
	},() => {
		--inMaine
		updateInterval()
	})

	$(`.wrapper-lizer`).hover(function() {
		++inChild
		updateInterval()
	},()=> {
		--inChild
		updateInterval()
	})




  	$(`.but-graf`).click(function() {
        timerVal = $(this).attr(`data-ind`)
    })

}