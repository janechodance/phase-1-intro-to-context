function createEmployeeRecord([firstName, familyName,title, payPerHour]){
    return {   firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents : [],
        timeOutEvents : [],
    }
}
function createEmployeeRecords(data){
    return data.map(createEmployeeRecord)  
}

function createTimeInEvent(employee, datestamp){
   let item = {
        type: "TimeIn",
        date: datestamp.substr(0,10),
        hour: parseInt(datestamp.substr(11,14)),
    }
    employee.timeInEvents.push(item)
    return employee
    
}
function createTimeOutEvent(employee, datestamp){
    let item = {
         type: "TimeOut",
         date: datestamp.substr(0,10),
         hour: parseInt(datestamp.substr(11,14)),
     }
     employee.timeOutEvents.push(item)
     return employee
     
 }
 function hoursWorkedOnDate(employee, date){
    return (employee.timeOutEvents[0].hour-employee.timeInEvents[0].hour)/100
     
 }
 function wagesEarnedOnDate(employee, date){
    return (hoursWorkedOnDate(employee,date)*employee.payPerHour)
 }
 function allWagesFor(employee){
     console.log(employee.timeInEvents)
     return employee.reduce(wagesEarnedOnDate)
 }
 
 function calculatePayroll(employee){

 }