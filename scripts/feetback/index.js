import $ from 'jquery'
import { feedScroll,fadeIn } from './animation'
import render from './render_grafics'
import feedbackList from './feedList'
import SVGst from './SVGstr'
import handler from './handler'
import test from './autoChange'


export default function() {
    let n = feedbackList[0].grafic // 
    render(n) // рендер квадратов
    feedScroll() // анимация при скролле
    SVGst() // в каждый квадр добавляет svg
    handler() // переключение фото имени и комментария

    //fadeIn()
    test()
}