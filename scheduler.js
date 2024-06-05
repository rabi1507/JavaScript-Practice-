const schedule = require('node-schedule');

const time = new schedule.RecurrenceRule();
// time.minute = 1;  // commited because by default it will run every minute
// time.minute = [0, 30]; // Run every 30 minutes
// time.minute = [0, 15, 30, 45]; // Run every 15 minutes

// 0: Represents the 0th minute of every hour.
// 15: Represents the 15th minute of every hour.
// 30: Represents the 30th minute of every hour.
// 45: Represents the 45th minute of every hour.

const job = schedule.scheduleJob(time, function(){
    console.log('The answer to life, the universe, and everything!');
});

