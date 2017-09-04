# build-time

Build time is an easy to use node module that given a JavaScript `Date`, it will return an object containing properties to construct various date/time strings.

### Example
```JavaScript
const buildTime = require('build-time');

const myDate = buildTime(new Date(1504277298480));
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

console.log(`${myDate.day}/${myDate.month}/${myDate.year}`);
//returns "01/09/2017"

console.log(`${dateThen.day} ${dateThen.fullMonth} ${dateThen.year}`);
//returns "01 September 2017"
```
