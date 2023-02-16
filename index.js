// Your code here

let exampleArray=['Sarah',"Whalley","Student",20]
let exampleArray2=["John","Smith","Dev", 40]
let exampleArray3=[['Sarah',"Whalley","Student",20],["John","Smith","Dev", 40]]


function createEmployeeRecord(array)
{
    let record=
    {
        firstName:array[0],
        familyName:array[1],
        title:array[2],
        payPerHour:array[3],
        timeInEvents:[],
        timeOutEvents:[],
    }
    return record;
}

function createEmployeeRecords(arrayOfArrays)
{
    let newArray=arrayOfArrays.map(element=>createEmployeeRecord(element))
    return newArray;
}

function createTimeInEvent(empRecord,dateStamp)
{
    let newTimeIn=
    {
        type: 'TimeIn',
        hour: parseInt(dateStamp.split(' ')[1]),
        date: dateStamp.split(' ')[0]
    }
    empRecord.timeInEvents.push(newTimeIn);
    return empRecord;
}

function createTimeOutEvent(empRecord,dateStamp)
{
    let newTimeOut=
    {
        type: 'TimeOut',
        hour: parseInt(dateStamp.split(' ')[1]),
        date: dateStamp.split(' ')[0]
    }
    empRecord.timeOutEvents.push(newTimeOut);
    return empRecord;
}

function hoursWorkedOnDate(empRecord,day)
{
    const hourClockedIn=empRecord.timeInEvents.filter(instance=>instance.date===day);
    const hourClockedOut=empRecord.timeOutEvents.filter(instance=>instance.date===day);
    return (hourClockedOut[0].hour-hourClockedIn[0].hour)/100;
}

function wagesEarnedOnDate(empRecord,date)
{
 return hoursWorkedOnDate(empRecord,date)*empRecord.payPerHour;
}

function allWagesFor(empRecord)
{
    return empRecord.timeInEvents.reduce((acc, element)=> acc + wagesEarnedOnDate(empRecord, element.date),0);
}

function calculatePayroll(empArray)
{
    return empArray.reduce((acc, element)=> acc + allWagesFor(element),0);
}


///////////////////
// EXAMPLE DATA
//////////////////


let newRecord=createEmployeeRecords(exampleArray3)
createTimeInEvent(newRecord[0],"2023-02-15 0800")
createTimeOutEvent(newRecord[0],"2023-02-15 1600")
createTimeInEvent(newRecord[0],"2023-02-16 0700")
createTimeOutEvent(newRecord[0],"2023-02-16 1200")

createTimeInEvent(newRecord[1],"2023-02-15 0800")
createTimeOutEvent(newRecord[1],"2023-02-15 1600")
createTimeInEvent(newRecord[1],"2023-02-16 0700")
createTimeOutEvent(newRecord[1],"2023-02-16 1200")

calculatePayroll(newRecord)


