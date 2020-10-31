import './main.css';

class CountdownTimer {
    constructor({ selector, targetDate}) {
        this.daysTextEl = document.querySelector(`${selector} [data-value="days"]`),
        this.hoursTextEl = document.querySelector(`${selector} [data-value="hours"]`),
        this.minsTextEl = document.querySelector(`${selector} [data-value="mins"]`),
        this.secsTextEl = document.querySelector(`${selector} [data-value="secs"]`),
        this.targetDate = targetDate
    }

    timer() {
        const targetTime = this.targetDate.getTime();
        
        setInterval(() => {
            if (targetTime <= Date.now()) {
                this.daysTextEl.textContent = 0;
                this.hoursTextEl.textContent = '00';
                this.minsTextEl.textContent = '00';
                this.secsTextEl.textContent = '00';
                return;
            }
            
            const currentTime = Date.now();
    
            const deltaTime = targetTime - currentTime;
    
            const { days, hours, mins, secs } = this.getTimeComponents(deltaTime);

            this.daysTextEl.textContent = days;
            this.hoursTextEl.textContent = hours;
            this.minsTextEl.textContent = mins;
            this.secsTextEl.textContent = secs;

        }, 1000);
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }

    getTimeComponents(time) {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));

        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return { days, hours, mins, secs }
    }
}

const countdownTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('July 1, 2021'),
});

countdownTimer.timer();
