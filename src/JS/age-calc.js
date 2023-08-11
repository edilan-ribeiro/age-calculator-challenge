const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');

const calculateButton = document.getElementById('button');

const yearResult = document.getElementById('year-result');
const monthResult = document.getElementById('month-result');
const dayResult = document.getElementById('day-result');




calculateButton.addEventListener('click', () => {
      const day = parseInt(dayInput.value);
      const month = parseInt(monthInput.value);
      const year = parseInt(yearInput.value);
    
      const today = new Date();
      const currentYear = today.getFullYear();
      const currentMonth = today.getMonth() + 1;
      const currentDay = today.getDate();


      // Number Animation
      function animateNumber(element, start, end, duration) {
        let currentNumber = start;

        const increment = Math.ceil((end - start) / (duration / 30));
        
        const timer = setInterval(() => {
          currentNumber += increment;
          element.textContent = currentNumber;
      
          if (currentNumber >= end) {
            clearInterval(timer);
          }
        }, 30);
      }
       
      const startNumber = 0;
      const animationDuration = 2000; 
      

    
      // Validate input dates
      let valid = true;

      // Validate day
      if ( day < 1 ||
        day > 31 ||
        (day > 30 && [4, 6, 9, 11].includes(month)) ||
        (month === 2 && (day > 29 || (day > 28 && !((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)))))
        )                 {
                              valid = false;
                              dayInput.classList.add('input-error');
                              dayInput.classList.remove('input-ok');
                              dayInput.parentElement.classList.add('label-error');
                              dayInput.parentElement.querySelector('p').textContent = 'Must be a valid day';
                              dayInput.parentElement.querySelector('p').classList.remove('hide');
                          } else {
                              dayInput.classList.remove('input-error');
                              dayInput.classList.add('input-ok');
                              dayInput.parentElement.classList.remove('label-error');
                              dayInput.parentElement.querySelector('p').classList.add('hide');
                          }

      // Validate month
      if (month < 1 || month > 12) {
            valid = false;
            monthInput.classList.add('input-error');
            monthInput.classList.remove('input-ok');
            monthInput.parentElement.classList.add('label-error');
            monthInput.parentElement.querySelector('p').textContent = 'Must be a valid month';
            monthInput.parentElement.querySelector('p').classList.remove('hide');
        } else {
            monthInput.classList.remove('input-error');
            monthInput.classList.add('input-ok');
            monthInput.parentElement.classList.remove('label-error');
            monthInput.parentElement.querySelector('p').classList.add('hide');
        }

      // Validate year
      if (year > currentYear ) {
            valid = false;
            yearInput.classList.add('input-error');
            yearInput.classList.remove('input-ok');
            yearInput.parentElement.classList.add('label-error');
            yearInput.parentElement.querySelector('p').textContent = 'Must be in the past';
            yearInput.parentElement.querySelector('p').classList.remove('hide');
        } else {
            yearInput.classList.remove('input-error');
            yearInput.classList.add('input-ok');
            yearInput.parentElement.classList.remove('label-error');
            yearInput.parentElement.querySelector('p').classList.add('hide');
        }

      // Check empty fields
      if (dayInput.value === '') {
            valid = false;
            dayInput.classList.add('input-error');
            dayInput.parentElement.classList.add('label-error');
            dayInput.parentElement.querySelector('p').textContent = 'This field is required';
            dayInput.parentElement.querySelector('p').classList.remove('hide');
        }
      if (monthInput.value === '') {
            valid = false;
            monthInput.classList.add('input-error');
            monthInput.parentElement.classList.add('label-error');
            monthInput.parentElement.querySelector('p').textContent = 'This field is required';
            monthInput.parentElement.querySelector('p').classList.remove('hide');
        }
      if (yearInput.value === '') {
          valid = false;
          yearInput.classList.add('input-error');
          yearInput.parentElement.classList.add('label-error');
          yearInput.parentElement.querySelector('p').textContent = 'This field is required';
          yearInput.parentElement.querySelector('p').classList.remove('hide');
        }

      if (valid) {
          let age = currentYear - year;

          if (month > currentMonth || (month === currentMonth && day > currentDay)) {
            age--;
          }
          
            // Age calculation
            yearResult.textContent = `${age}`;
            monthResult.textContent = `${((currentMonth - month) + 12) % 12}`;
            dayResult.textContent = `${Math.abs(currentDay - day)}`;

            const endYearNumber = `${age}`;
            const endMonthNumber = `${((currentMonth - month) + 12) % 12}`;
            const endDayNumber = `${Math.abs(currentDay - day)}`;
      
            //Number Animation
            animateNumber(yearResult, startNumber, endYearNumber, animationDuration);
            animateNumber(monthResult, startNumber, endMonthNumber, animationDuration);
            animateNumber(dayResult, startNumber, endDayNumber, animationDuration);

            
        }
});