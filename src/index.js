import calc from "./modules/calc"
import inputValid from "./modules/inputValid"
import menu from "./modules/menu"
import modal from "./modules/modal"
import sendForm from "./modules/sendForm"
import slider from "./modules/slider"
import smoothScroll from "./modules/smoothScroll"
import tabs from "./modules/tabs"
import timer from "./modules/timer"

timer("28 September 2023 21:55:00")
menu()
modal()
inputValid()
smoothScroll()
tabs()
slider(".portfolio-content", ".portfolio-item", "portfolio-item-active", "dot-active", "dot")
calc(890)

document.addEventListener('submit', (e) => {
    e.preventDefault()
    if(e.target.nodeName === 'FORM'){
       sendForm({
            formId : e.target.id, 
            someElem: [
                {
                    type: "block",
                    id: "total"
                }
            ]
        })
    }
})
