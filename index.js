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
    let employRecords=[];
    arrayOfArrays.forEach(array=>
        {
            let record=createEmployeeRecord(array);
            employRecords.push(record);
        })
    return employRecords;
}




const newRecords=createEmployeeRecords(exampleArray3)
console.log(newRecords)
