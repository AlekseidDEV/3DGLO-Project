const menu = () => {
    const iconMenu = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const closeBtn = menu.querySelector('.close-btn')
    const menuItems = menu.querySelectorAll('ul>li>a')

    const openMenu = () => {
        menu.classList.toggle('active-menu')
    }

    menuItems.forEach((item) => {item.addEventListener('click', openMenu)})

    iconMenu.addEventListener('click', openMenu)
    closeBtn.addEventListener('click', openMenu)
}

export default menu