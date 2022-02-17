const timer = (deadline) => {
    const timerDays = document.querySelector('.count_day')
    const timerHours = document.querySelector('.count_hours')
    const timerMinutes = document.querySelector('.count_minute')
    const timerSeconds = document.querySelector('.count_second')

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000
        let days = Math.floor(timeRemaining / 60 / 60 / 24)
        let hours = Math.floor((timeRemaining / 60 / 60) % 24)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)

        if (days > 0) {
            days--;
            if (days < 10) {
                days = '0' + days;
            }
          }
        if (hours > 0) {
            hours--;
            if (hours < 10) {
                hours = '0' + hours;
            }
          } else {
            hours = 24;
          }
          if (minutes > 0) {
            minutes--;
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
          } else {
            minutes = 60;
          }
          if (seconds > 0) {
            seconds--;
            if (seconds < 10) {
                seconds = '0' + seconds;
            }
          } else {
            seconds = 60;
          }

        return { timeRemaining, days, hours, minutes, seconds }
    }

    const updateClock = () => {
        let getTime = getTimeRemaining()

        timerDays.textContent = getTime.days
        timerHours.textContent = getTime.hours
        timerMinutes.textContent = getTime.minutes
        timerSeconds.textContent = getTime.seconds

        if (getTime.timeRemaining > 0) {
            setTimeout(updateClock, 1000)
        }

    }
    updateClock()
}

export default timer