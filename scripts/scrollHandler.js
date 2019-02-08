
export default function() {
    var controller = new ScrollMagic.Controller();


    // ПРОЦЕС ОБСЛУГОВУВАННЯ
    let tm8 = new TimelineLite();
     tm8.fromTo(`.agranka`,1,{width:'1px', height:'1px', opacity:0},{width:'248px', height:'100%', opacity:1})
     tm8.fromTo(`.name-of-instrument`,.5,{opacity:0},{opacity:1})
     tm8.staggerFromTo(`.wrapper-stepses .step-item`,.5,{opacity:0,y:-10},{opacity:1,y:0},0.2)
     //tm8.staggerFromTo(`.steps-labels div`, 1, {opacity:0,x:-10}, {opacity:1,x:0},.2)
      new ScrollMagic.Scene({
          triggerElement: '.steps-tabler',
          triggerHook: 0.7,
          reverse: false
      }).setTween(tm8)
      .addTo(controller)

    let tm9 = new TimelineLite();
    tm9.staggerFromTo(`.steps-labels .label`, .5, {opacity:0,x:-10}, {opacity:1,x:0},.2)
    new ScrollMagic.Scene({
           triggerElement: '.steps-tabler',
           triggerHook: 0.7,
           reverse: false
    }).setTween(tm9)
    .addTo(controller)

}