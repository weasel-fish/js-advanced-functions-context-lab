/* Your Code Here */

function createEmployeeRecord(empArray) {
    let newEmp = {
        firstName: empArray[0],
        familyName: empArray[1],
        title: empArray[2],
        payPerHour: empArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }

    return newEmp
}

function createEmployeeRecords(empArray) {
    return empArray.map(createEmployeeRecord)
}

function createTimeInEvent(dateString) {
    let [date, hour] = dateString.split(' ')
    
    let newEvent = {
        type: 'TimeIn',
        hour: parseInt(hour),
        date
    }
    
    this.timeInEvents.push(newEvent)
    return this
}

function createTimeOutEvent(dateString) {
    let [date, hour] = dateString.split(' ')
    
    let newEvent = {
        type: 'TimeOut',
        hour: parseInt(hour),
        date
    }
    
    this.timeOutEvents.push(newEvent)
    return this
}

function hoursWorkedOnDate(dateString) {
    let inTime = this.timeInEvents.find(event => event.date === dateString).hour
    let outTime = this.timeOutEvents.find(event => event.date === dateString).hour

    return (outTime - inTime) / 100
}

function wagesEarnedOnDate(dateString) {
    return hoursWorkedOnDate.call(this, dateString) * this.payPerHour
}

function findEmployeeByFirstName(empArray, firstString) {
    return empArray.find(emp => emp.firstName === firstString)
}

function calculatePayroll(empArray) {
    return empArray.reduce((cum, add) => cum + allWagesFor.call(add), 0)
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}