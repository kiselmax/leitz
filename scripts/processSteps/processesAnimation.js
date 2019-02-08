import { TweenMax } from 'gsap';


// появление всех процессов
export function fadeIn () {
    const tm = TweenMax
        tm.to(`.agranka`,.3,{width:'248px', height:'100%', opacity:1})
        tm.to(`.name-of-instrument`,.3,{opacity:1})
        tm.staggerTo(`.wrapper-stepses .step-item`,.3,{opacity:1,y:0},0.2)
        tm.staggerTo(`.steps-labels .label`,.3, {opacity:1,x:0},.1)
}

// Исчезновение всех процессов
export function fadeOut () {
    const tm = TweenMax
        tm.to(`.agranka`,.3,{width:'1px', height:'1px', opacity:0})
        tm.to(`.name-of-instrument`,.3,{opacity:0})
        tm.staggerTo(`.wrapper-stepses .step-item`,.3,{opacity:0,y:-10},0.2)
        tm.staggerTo(`.steps-labels .label`,.3, {opacity:0,x:-10},.1)
}


export function changeLabel() {
    const tm = TweenMax
   
    tm.to(`.porocess-title`, .3, {x:-30,opacity:0})
    tm.to(`.porocess-title`, .7, {x:0,opacity:1}).delay(.5)

    tm.to(`.process-description`, 0.1 ,{ y:'-20', opacity:'0' })
    tm.to(`.process-description`, .7,{ y:'0', opacity:'1' }).delay(0.5)
}

export function firstAppear() {
    const tm = TweenMax
    tm.from(`.instrument-name`, .5, {opacity: 0, y: -20})
    tm.fromTo(`.thumb-instrument-wrap`, .5, {scale:.4, opacity:0},{scale:1,opacity:1} )
    tm.fromTo(`.instrument`, .3, {x:-30, opacity:0},{x:0,opacity:1} )
    tm.fromTo(`.porocess-title`, .3, {x:-30, opacity:0},{x:0,opacity:1} ).delay(.6)
    tm.fromTo(`.process-description`, .3 ,{ y:'-20', opacity:'0' },{y:0,opacity:1}).delay(.6)
    tm.from(`.close-item`, .3, {opacity:0})
    tm.staggerFromTo(`.quotr-cont> div`, .3, { opacity:0, y: -10 },{opacity:1,y:0},.1)
    tm.fromTo(`.fas`, 1, {opacity:0, scale:.8},{opacity:1, scale:1})
}

export function lastAppear() {
    const tm = TweenMax
    tm.to(`.instrument-name`, .5, {opacity: 0, y: -20})
    tm.to(`.thumb-instrument-wrap`, .5, {scale:.4, opacity:0} )
    tm.to(`.instrument`, .3, {x:-30, opacity:0} )
    tm.to(`.porocess-title`, .3, {x:-30, opacity:0} ).delay(.5)
    tm.to(`.process-description`, .3 ,{ y:'-20', opacity:'0' }).delay(.5)

    tm.staggerTo(`.quotr-cont> div`, .3, { opacity:0, y: -10 },.1)
    tm.to(`.fas`, 1, {opacity: 0, scale:.8})
}


// изменение процесса
export function changeItem() {
    const tm = TweenMax
    // анимация исчезания контента
        tm.fromTo(`.thumb-instrument-wrap`, .3, {scale:1,opacity:1}, {scale:.4, opacity:0} )
        tm.fromTo(`.instrument`, .3, {x:0,opacity:1}, {x:-30, opacity:0} )
        tm.fromTo(`.porocess-title`, .3, {x:0,opacity:1}, {x:-30, opacity:0} )
        tm.fromTo(`.process-description`, .3 , {y:0,opacity:1}, { y:'-20', opacity:'0' })
        tm.from(`.fas`, .5, {opacity:0, scale:.8})
        tm.to(`.quotr-cont`, .2, { opacity: 0 })

    // анимация появления изменённого контента
        tm.to(`.thumb-instrument-wrap`, .3, {scale:1,opacity:1}).delay(.8)
        tm.to(`.instrument`, .3, {x:0,opacity:1}).delay(.8)
        tm.to(`.porocess-title`, .3, {x:0,opacity:1}).delay(.8)
        tm.to(`.process-description`, .3 , {y:0,opacity:1}).delay(.8)
        tm.fromTo(`.quotr-cont`, .5,{opacity: 0}, { opacity: 1 }).delay(.8)
        tm.to(`.fas`, 1, {opacity:1, scale:1}).delay(1)
}