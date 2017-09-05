# build-time

Build time is an easy to use node module that given a JavaScript `Date`, it will return an object containing properties to construct various date/time strings.

### Example
```JavaScript
const buildTime = require('build-time');

const myDate = buildTime(new Date(1504277298480));
const allData = myDate.getAll();
// returns
{
    "day": "01",
    "fullDay": "Friday",
    "shortDay": "Fri",
    "month": "09",
    "fullMonth": "September",
    "shortMonth": "Sep",
    "year": "2017",
    "hour": "15",
    "min": "48",
    "sec": "48",
    "ampm": "pm"
}

console.log(`${allData.day}/${allData.month}/${allData.year}`);
//returns "01/09/2017"

console.log(`${allData.day} ${allData.fullMonth} ${allData.year}`);
//returns "01 September 2017"

const numberDate = myDate.getNumberDate();
// '01/09/2017'

const shortDate = myDate.getShortDate();
// '01 Sep 2017';

const fullDate = myDate.getFullDate();
// 'Friday 1 September 2017'

const time = myDate.getTime();
// '15:48:18'

const timestamp = myDate.getTimeStamp();
// '01/09/2017, 15:48:18 pm'
```
