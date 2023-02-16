// Your code here

const { copySync } = require("file-system");

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
    let employRecords=[];
    arrayOfArrays.forEach(array=>
        {
            employRecords.push(createEmployeeRecord(array));
        })
    return employRecords;
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

function hoursWorkedOnDate(empRecord,date)
{
    let index=0;
    let hoursWorked=0;
    empRecord.timeInEvents.forEach(record=>
        {
            for (const value in record)
            {
            if(record[value]===date)
            {
               hoursWorked=empRecord.timeOutEvents[index].hour-empRecord.timeInEvents[index].hour;
            }
            }
            index++;
        })
        return hoursWorked/100;
}

function wagesEarnedOnDate(empRecord,date)
{
 hoursWorkedOnDate(empRecord,date)*empRecord.payPerHour;
}




let newRecord=createEmployeeRecord(exampleArray)
createTimeInEvent(newRecord,"2023-02-15 0800")
createTimeOutEvent(newRecord,"2023-02-15 1600")
createTimeInEvent(newRecord,"2023-02-16 0700")
createTimeOutEvent(newRecord,"2023-02-16 1200")
let hours=hoursWorkedOnDate(newRecord,"2023-02-15")
console.log(hours)
