const timer = (dedlain) => {
  const spanDay = document.getElementById("timer-day");
  const spanHourse = document.getElementById("timer-hours");
  const spanMinute = document.getElementById("timer-minutes");
  const spanSecond = document.getElementById("timer-seconds");

  let idInterval;

  const numWords = (value, words) => {
    value = Math.abs(value) % 100
    const lastValeu = value % 10

    if((value > 10) && (value < 20)) return words[2]
    if((lastValeu > 1) && (lastValeu < 5)) return words[1]
    if(lastValeu === 1) return words[0]
    return words[2]
  }

  const getTimeRemain = () => {
    let dateNow = new Date().getTime();
    let dateStop = new Date(dedlain).getTime();
    let timeRemain = (dateStop - dateNow) / 1000;

    let second = Math.floor(timeRemain % 60);
    let minute = Math.floor((timeRemain / 60) % 60);
    let hourse = Math.floor((timeRemain / 60 / 60) % 24);
    let day = Math.floor(timeRemain / 60 / 60 / 24);

    return { second, minute, hourse, day, timeRemain };
  };

  const updateClock = () => {
    const { second, minute, hourse, day, timeRemain } = getTimeRemain();

    spanSecond.textContent = String(second).padStart(2, "0")
    spanMinute.textContent = String(minute).padStart(2, "0")
    spanHourse.textContent = String(hourse).padStart(2, "0")
    spanDay.textContent = String(day).padStart(2, "0")

    if (timeRemain <= 0) {
      spanDay.textContent = "00";
      spanHourse.textContent = "00";
      spanMinute.textContent = "00";
      spanSecond.textContent = "00";
      clearInterval(idInterval);
    }

    spanSecond.nextElementSibling.textContent = numWords(second, [
      'секунда',
      'секунды',
      'секунд'
    ])

    spanMinute.nextElementSibling.textContent = numWords(minute, [
      'минута',
      'минуты',
      'минут'
    ])

    spanHourse.nextElementSibling.textContent = numWords(hourse, [
      'час',
      'часа',
      'часов'
    ])

    spanDay.nextElementSibling.textContent = numWords(day, [
      'день',
      'дня',
      'дней'
    ])
  };

  idInterval = setInterval(updateClock, 1000);
};


export default timer;
