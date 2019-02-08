import list from './feedList'
import { changeFeed, fadeIn, fadeOut } from './animation'


export default function() {

    $(`.q`).click( function() {

        fadeOut() // svg fade out
        let num = $(this).parent(`.graf`).attr(`data-graf`)

        changeFeed() //анимация для смены аватара и описания
        setTimeout( () => {
            $(`.the-ava img`).attr(`src`,list[num].img) //меняем человека feedback
            $(`.name-feed`).text(list[num].name)
            $(`.position-feed`).text(list[num].position)
            $(`.place-for-text`).text(list[num].comment)

            $(`.graf`).removeClass(`active_graf`)// добавляем active на нажатый график
            $(this).parent(`.graf`).addClass(`active_graf`)
            fadeIn() // svg fade in
        },300 )


    } )



}