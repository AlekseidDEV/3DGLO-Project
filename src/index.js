import inputValid from "./modules/inputValid"
import menu from "./modules/menu"
import modal from "./modules/modal"
import slider from "./modules/slider"
import smoothScroll from "./modules/smoothScroll"
import tabs from "./modules/tabs"
import timer from "./modules/timer"

timer("28 August 2023 21:55:00")
menu()
modal()
inputValid()
smoothScroll()
tabs()
slider(".portfolio-content", ".portfolio-item", "portfolio-item-active", "dot-active", "dot")
