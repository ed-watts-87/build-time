buildTime = (date) => {
  if (date === undefined) {
    date = new Date();
  }

  const fullMonthText = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const shortMonthText = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const fullDayText = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const shortDayText = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

  // days
  const day = (`0${date.getDate()}`).slice(-2);
  const fullDay = fullDayText[date.getDay()];
  const shortDay = shortDayText[date.getDay()];

  //months
  const month = (`0${date.getMonth()+1}`).slice(-2);
  const fullMonth = fullMonthText[date.getMonth()];
  const shortMonth = shortMonthText[date.getMonth()];

  //year
  const year = `${date.getFullYear()}`;

  //time
  const hour = (`0${date.getHours()}`).slice(-2);
  const min = (`0${date.getMinutes()}`).slice(-2);
  const sec = (`0${date.getSeconds()}`).slice(-2);

  //am or pm
  let ampm;
  if (hour >= 0 && hour < 12){
    ampm = 'am';
  } else {
    ampm = 'pm';
  }

  return {
    getAll: function() {
      return {
        day,
        fullDay,
        shortDay,
        month,
        fullMonth,
        shortMonth,
        year,
        hour,
        min,
        sec,
        ampm
      }
    },
    getNumberDate: function() {
      return `${day}/${month}/${year}`;
    },
    getShortDate: function() {
      return `${day} ${shortMonth} ${year}`;
    },
    getFullDate: function() {
      return `${fullDay} ${Number(day)} ${fullMonth} ${year}`;
    },
    getTime: function() {
      return `${hour}:${min}:${sec}`;
    },
    getTimeStamp: function() {
      return `${day}/${month}/${year}, ${hour}:${min}:${sec} ${ampm}`
    }
  };
}

module.exports = buildTime;
