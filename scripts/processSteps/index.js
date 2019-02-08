import $ from 'jquery'
import { fadeOut, fadeIn, lastAppear, firstAppear } from './processesAnimation'
import renderProcesses from './renderProcesses'
import renderCard from './render_the_item'
import change from './change_the_item.js'


class Process {
    constructor() {
        
    }
    render() {
        renderProcesses()
    }
   
    hideItemAnim() {
        setTimeout( () => {
            fadeIn()
            document.querySelector('.item-processing').classList.remove('showed')
        },1500 )
        lastAppear()
    }
}


class ProcessItem extends Process {
    constructor(id) {
        super()
        this.id = id
    }
    hideAllanim() {
        fadeOut()
    }
    renderItem() {
        renderCard(this.id)
    }
    renderItemAnim() {
        setTimeout( () => {
            firstAppear()
            document.querySelector('.item-processing').classList.add('showed');
        }, 2000 )
    }
    changeItem() {
        change(this.id)
    }
}

export default () => {
    var processes = new Process()
    processes.render()
    
    $(`.step-item p`).click( function() { 
        const id = $(this).attr(`data-id`)
        
        var process = new ProcessItem(id)
            process.hideAllanim()
            process.renderItem() 
            process.renderItemAnim()
            process.changeItem()
    })


    $(`.instrument, .close-item`).click(function() { // go back to table process
        processes.hideItemAnim()        
    })

}