import $ from 'jquery'
import data from './instrumentsList'
import { changeLabel } from './processesAnimation'

class Process {
    constructor(id) {
        this.id = id
    }
    dataInserts() {
        document.querySelector('.instrument').innerHTML = data[this.id].instrument
        document.querySelector('.thumb-instrument').src = data[this.id].imageUrl
        document.querySelector('.porocess-title').innerHTML = data[this.id]['process'][0]['the_proc']
        document.querySelector('.process-description').innerHTML = data[this.id]['process'][0]['description']
    }
   
    graficInsert() {
        var graficPlace = $('.quotr-cont')
            graficPlace.children().remove() //reset grafic

        var curent_grafic = data[this.id]['process'].map( (i, ident ) => {
            return `<div class=${i['status'] ? `q` : `qw`} data-keys=${ident} ></div>`
        })
        graficPlace.append(curent_grafic)
    }

// при клике на квадрат процессов - меняем title, text активной детали
    graficTextChange(f) {
        document.querySelector('.porocess-title').innerHTML = data[this.id]['process'][f]['the_proc']
        document.querySelector('.process-description').innerHTML = data[this.id]['process'][f]['description']
    }
}


export default function (e) {
    var the_process = new Process(e)
        the_process.dataInserts()
        the_process.graficInsert()

    //var chanteStep = new ProcessQutro()
   // switching process in card
   $(`.quotr-cont .q`).click( function() {
        let id = $(this).attr('data-keys')
        
        changeLabel()
        setTimeout( () => {
            the_process.graficTextChange(id)
        },500 )
        
    } )

}