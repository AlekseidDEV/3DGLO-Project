const smoothScroll = () => {
    const btnScroll = document.querySelector('a[href = "#service-block"]')

    const hendlerScroll = (e) => {
        e.preventDefault()
       document.getElementById('service-block').scrollIntoView({
        behavior : 'smooth', 
        block : 'start'
       })
    }
    
    
    btnScroll.addEventListener('click', hendlerScroll)
}

export default smoothScroll