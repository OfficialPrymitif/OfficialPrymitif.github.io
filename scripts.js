let TextLabel1 = document.getElementById("v1");
let AutomaticTimeUpdate = true;

function updateTimelabel(){
    if(AutomaticTimeUpdate === true){
        let CurrentDate = new Date();
        let Month = AddZero(CurrentDate.getMonth());
        let Year = AddZero(CurrentDate.getFullYear());
        let Day = AddZero(CurrentDate.getDate());

        let Hours = AddZero(CurrentDate.getHours());
        let Minutes = AddZero(CurrentDate.getMinutes());
        let Seconds = AddZero(CurrentDate.getSeconds());

        CurrentTime_Result = Hours + ":" + Minutes + ":" + Seconds;
        TextLabel1.innerText = CurrentTime_Result;
        window.setTimeout(updateTimelabel, 100)
    } else {
        TextLabel1.innerText = "Automatic Time Update has been disabled"
    }
}

function AddZero(v){
    return v < 10 ? "0" + v: v;
}
updateTimelabel();