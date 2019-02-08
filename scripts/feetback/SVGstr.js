
export default function() {

    
let lira6 = `<svg class="feeSV feedLineold "
                xmlns="http://www.w3.org/2000/svg" 
                width="686" 
                height="2"
                fill:#fff
                stroke="#fff"
                stroke-width="2px">
                <line class="cls-1" x1="686" y1="1" x2="686" y2="1"/>
                <line class="cls-1" x1="686" y1="1" x2="1" y2="1"/>
                <line class="cls-1" x1="1" y1="1" x2="1" y2="122"/>
            </svg>`

let lira5 = `<svg class="feeSV feedLineold"
                xmlns="http://www.w3.org/2000/svg" 
                width="580"
                height="2"
                fill:#fff
                stroke="#007cbf"
                stroke-width="2px">
                <line class="cls-1" x1="579" y1="28" x2="579" y2="1"/>
                <line class="cls-1" x1="579" y1="1" x2="1" y2="1"/>
                <line class="cls-1" x1="1" y1="1" x2="1" y2="122"/>
            </svg>`
    
let lira4 = `<svg class="feeSV feedLineold"
                xmlns="http://www.w3.org/2000/svg"
                width="490"
                height="2"
                fill:#fff
                stroke="#fff"
                stroke-width="2px">
                <line class="cls-1" x1="489" y1="74" x2="489" y2="1"/>
                <line class="cls-1" x1="489" y1="1" x2="1" y2="1"/>
                <line class="cls-1" x1="1" y1="1" x2="1" y2="123"/>
            </svg>`

let lira3 = `<svg class="feeSV feedLineold"
                xmlns="http://www.w3.org/2000/svg" 
                width="397"
                height="2"
                stroke="#007cbf"
                fill:#fff
                stroke-width="2px">
                <line class="cls-1" x1="396" y1="117" x2="396" y2="1"/>
                <line class="cls-1" x1="396" y1="1" x2="1" y2="1"/>
                <line class="cls-1" x1="1" y1="1" x2="1" y2="122"/>
            </svg>`

    let lira2 = `<svg class="feeSV feedLineold"
                    xmlns="http://www.w3.org/2000/svg" 
                    width="307"
                    height="2"
                    stroke="#fff"
                    fill:#fff
                    stroke-width="2px">
                    <line class="cls-1" x1="305" y1="160" x2="305" y2="1"/>
                    <line class="cls-1" x1="305" y1="1" x2="1" y2="1"/>
                    <line class="cls-1" x1="1" y1="1" x2="1" y2="122"/>
                </svg>`

    let lira1 = `<svg  class="feeSV feedLineoldlast"
                    xmlns="http://www.w3.org/2000/svg" 
                    width="217"
                    height="2"
                    fill:#fff
                    stroke="#007cbf"
                    stroke:#007cbf
                    stroke-width="2px">
                    <line class="cls-1" x1="215" y1="204" x2="215" y2="1"/>
                    <line class="cls-1" x1="215" y1="1" x2="1" y2="1"/>
                    <line class="cls-1" x1="1" y1="1" x2="1" y2="122"/>
                </svg>`


    const addCanv = () => { // ф-я добавления линии svg в последний квадрат каждого графика
        return (
            $(`.graf-six .q`).last().append(lira6),
            $(`.graf-five .q`).last().append(lira5),
            $(`.graf-four .q`).last().append(lira4),
            $(`.graf-three .q`).last().append(lira3),
            $(`.graf-two .q`).last().append(lira2),
            $(`.graf-one .q`).last().append(lira1)
        )
    }
    setTimeout(() => { // добавляем через 3 сек
        addCanv()
    },1000)

}