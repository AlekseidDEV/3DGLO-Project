const timer = (dedlain) => {
    const spanDay = document.getElementById('timer-day')
    const spanHourse = document.getElementById('timer-hours')
    const spanMinute = document.getElementById('timer-minutes')
    const spanSecond = document.getElementById('timer-seconds')
    
    let idInterval
    
    const getTimeRemain = () => {
        let dateNow = new Date().getTime()
        let dateStop = new Date(dedlain).getTime()
        let timeRemain = (dateStop - dateNow) / 1000

        let second = Math.floor(timeRemain % 60)
        let minute = Math.floor((timeRemain / 60) % 60)
        let hourse = Math.floor((timeRemain / 60 / 60) % 24)
        let day = Math.floor(timeRemain / 60 / 60 / 24)

        return {second, minute, hourse, day, timeRemain}
    }

    const updateClock = () => {
        const {second, minute, hourse, day, timeRemain} = getTimeRemain()

        
        spanDay.textContent = day
        spanHourse.textContent = hourse
        spanMinute.textContent = minute
        spanSecond.textContent = second
        if(timeRemain === 0){
            clearInterval(idInterval)
        }
        console.log(1);
    }

idInterval = setInterval(updateClock, 1000)
}

export default timer