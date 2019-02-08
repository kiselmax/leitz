//import $ from 'jquery'

export default function(num) {

    // console.log(arguments[0][0])
    let qutr = `<div class="q"></div>`
    
    for(let i = 0; i < arguments[0][0]; i++) {
        $(`.graf-one`).append(qutr) }

    for(let i = 0; i < arguments[0][1]; i++) {
        $(`.graf-two `).append(qutr) }

    for(let i = 0; i < arguments[0][2]; i++) {
        $(`.graf-three`).append(qutr) }

    for(let i = 0; i < arguments[0][3]; i++) {
        $(`.graf-four`).append(qutr) }

    for(let i = 0; i < arguments[0][4]; i++) {
        $(`.graf-five`).append(qutr) }

    for(let i = 0; i < arguments[0][5]; i++) {
        $(`.graf-six`).append(qutr) 
    }

}