
function getDOB(){
    let data = document.getElementById("inputDob").value;

    let dob = new Date(data);

    let year = dob.getFullYear();
    let month = dob.getMonth();
    let date = dob.getDate();

    //console.log(year);
    //console.log(month);
    //console.log(date);

    let now = new Date(document.getElementById("cdate").value);

    let yearDiff = now.getFullYear() - year;
    let monthDiff = now.getMonth() - month;
    let dateDiff = now.getDate() - date;

    //console.log(yearDiff);
    //console.log(monthDifference);
    //console.log(dateDifference);
    if(yearDiff < 0) console.log("Invalid Date");
    else if(monthDiff===0 && dateDiff>= 0)console.log(yearDiff);
    else if(monthDiff >= 0) console.log(yearDiff);
    else{
        yearDiff = yearDiff - 1;
        if(monthDiff <= 0){
            if(dateDiff > 0) monthDiff = 12 + monthDiff;
            else monthDiff = 11 - monthDiff;
        }
    }

    if(dateDiff < 0){
        dateDiff = dateDiff + 30;
        monthDiff = monthDiff - 1;
    }

    if(yearDiff < 0){
        document.getElementById("currentAge").innerHTML = "Invalid Date";
    }
    else{
        document.getElementById("currentAge").innerHTML = 
        `Your age is ${yearDiff} years ${monthDiff} months ${dateDiff} days`;
    }

}


function short(num){
    return num.toString().padStart(2, "0");
}

function formatted(date = new Date()){
    //console.log(date)
    return [
        date.getFullYear(),
        short(date.getMonth() + 1),
        short(date.getDate())
    ].join("-");
}

function currentDate(){
    //console.log(formatted());
    let date = document.getElementById("cdate");
    date.value = formatted();
}

currentDate();