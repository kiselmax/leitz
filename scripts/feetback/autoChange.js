

export default function() {

let timer = 0,
    timerValue = 0,
    inMain = 0,
    inChild = 0,
    delay = 7000

    function updateTimer() {
      if (inMain && !inChild) {
        if (!timer) {
          timer = setInterval(tick, delay);
        }
      } else {
        if (timer) {
          clearInterval(timer);
          timer = 0;
        }
      }
    }

    function tick() {
      { timerValue<=4 ? ++timerValue : timerValue=0 }
      console.log(timerValue)
      $(`.year-wrap:eq(${timerValue}) .q`).click()
     
    }


    $(".wrapper-feetback").hover(function() {
          ++inMain;
          updateTimer();
        },function() {
            --inMain;
            updateTimer();
    })


    $(".the_wrap_feed .q,.place-for-ava,.place-for-text").hover(function() {
          ++inChild;
          updateTimer();
        },function() {
          --inChild;
          updateTimer();
    })

}


