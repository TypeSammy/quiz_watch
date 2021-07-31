const moment = require('moment')


var todays_date = moment().format(`YYYY-MM-DD HH:mm:ss`)

var reminder_15_mins = moment().add(15, 'm').format(`YYYY-MM-DD HH:mm:ss`)
var reminder_1_hour = moment().add(1, 'h').format(`YYYY-MM-DD HH:mm:ss`)
var reminder_1_day = moment().add(1, 'd').format(`YYYY-MM-DD HH:mm:ss`)
var reminder_7_days = moment().add(7, 'd').format(`YYYY-MM-DD HH:mm:ss`)

console.log(`this is todays date ${todays_date}`)
console.log(`this is todays date plus 15 mins ${reminder_15_mins}`)
console.log(`this is todays date plus 1 hour ${reminder_1_hour}`)
console.log(`this is todays date plus 1 day  ${reminder_1_day}`)
console.log(`this is todays date plus 7 days ${reminder_7_days}`)