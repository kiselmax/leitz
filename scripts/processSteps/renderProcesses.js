
import  $ from 'jquery'
import data from './instrumentsList'

export default function() {
    
    let list = data.map( (i, index) => { // 1. mapping array of all process
        let quatres = i.process.map( j => { // 2. mapping arr into arr 
            return `<div class=${j['status'] ? `q` : `qw`}></div>` // 3. checking status for class
        } )

        // 4. put all data to ready structure
        let structure = `<div class="step-item">
                            <p data-id=${index} >
                                ${i.instrument} 
                                <img class="mob-proc-svgs" src="./wp-content/themes/twentyseventeen/assets/img/wright.png" alt=""> 
                            </p>
                            <div class="quotres-cont">
                                ${quatres}
                            </div>
                        </div>`
        $(`.wrapper-stepses`).append(structure) // 5. append to target place
    } )


}
