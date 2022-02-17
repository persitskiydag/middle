import modal from './modules/modal'
import modalService from './modules/modalService'
import timer from './modules/timer'
import scroll from './modules/scroll'
import slider from './modules/slider'
import calc from './modules/calc'
import sendForm from './modules/sendForm'

modal()
modalService()
timer('20 february 2022')
scroll()
slider()
calc()
sendForm({
    formId: 'form1',
    someElem: [
        {
            type: 'block',
            id: 'calc-total'
        }
    ]
})