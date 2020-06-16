'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const table = document.createElement('table');
  const head = document.createElement('thead');

  table.append(head);

  const row = document.createElement('tr');

  head.append(row);

  const weekDays = ['Mn', 'Tu', 'Wd', 'Th', 'Fr', 'St', 'Sn'];

  for (let i = 0; i < 7; i++) {
    const dayOfWeek = document.createElement('th');

    dayOfWeek.textContent = weekDays[i];
    row.append(dayOfWeek);
  }

  const daysAmount = new Date(year, month, 0).getDate();
  const weeksAmount = Math.ceil(daysAmount / 7);
  const startDay = new Date(year, month - 1).getDay();
  const tbody = document.createElement('tbody');
  let daysCounter = 0;

  for (let i = 0; i < weeksAmount; i++) {
    const week = document.createElement('tr');

    tbody.append(week);

    for (let j = 0; j < 7; j++) {
      const day = document.createElement('td');

      if (j + 1 < startDay && i === 0) {
        day.textContent = '';
      } else if (daysCounter < daysAmount) {
        daysCounter++;
        day.textContent = daysCounter;
      }

      week.append(day);
    }
  }

  table.append(tbody);

  calendar.append(table);
}

calendarTable(2019, 3, calendar);
