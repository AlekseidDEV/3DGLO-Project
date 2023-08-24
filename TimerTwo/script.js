'use strict'

const helloBlock = document.querySelector('.hello_block')
const dayBlock = document.querySelector('.day_block')
const time_block = document.querySelector('.time_block')
const leftTimeBlock = document.querySelector('.left_time_block')

const ArrTime = {
    morning: 'Доброе утро',
    day: 'Добрый день',
    evening: 'Добрый вечере',
    night: 'Доброй ночи'
}

const dayOftheWeek = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
]

const getDate = (dedlain) => {
    const date = new Date()
    const dayOfWeek = date.getDay()
    const dayNow = date.getTime()
    const dayStop = new Date(dedlain).getTime()
    const timeRemain = (dayStop - dayNow) / 1000
    const leftDay = Math.floor(timeRemain / 60 / 60 / 24)
    const currentTime = date.toLocaleTimeString('en')
    const hourseClock = date.getHours()
    return ({ dayOfWeek,date, leftDay,currentTime,hourseClock})
}

const getTextContent = (day, periodOftime) => {
    const {dayOfWeek, leftDay, currentTime,hourseClock} = getDate('31 December 2023')

    dayOftheWeek.forEach((elem, index) => {
        if (dayOfWeek === index) {
            day = elem
        }
    })

    if (hourseClock >= 22 && hourseClock <= 4) {
        periodOftime = ArrTime.night
    } else if (hourseClock >= 5 && hourseClock <= 10) {
        periodOftime = ArrTime.morning
    } else if (hourseClock >= 11 && hourseClock <= 16) {
        periodOftime = ArrTime.day
    } else if (hourseClock >= 17 && hourseClock <= 21) {
        periodOftime = ArrTime.evening
    }

    return ({
        day,
        currentTime,
        leftDay,
        periodOftime,
        currentTime,
        hourseClock
    })
}

const render = () => {
    const {day,currentTime,leftDay,periodOftime} = getTextContent()
    helloBlock.textContent = periodOftime
    dayBlock.textContent = `Сегодня: ${day}`
    time_block.textContent = `Текущее время: ${currentTime}`
    leftTimeBlock.textContent = `Дней до нового года осталось: ${leftDay}`
}
setInterval(render, 1000)