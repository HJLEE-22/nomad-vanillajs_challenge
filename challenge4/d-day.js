const dDay = document.querySelector("h2#d-day");


//getTime은 밀리초로 변화됨.

function christmasEveCount(){

    const christmasEve = new Date("December 25, 2022");
    const nowDay = new Date()
    const enlapsed = christmasEve.getTime() - nowDay.getTime()

    const dDayDays = Math.floor((enlapsed / (1000 * 60 * 60 * 24)));
    const dDayHours = String(Math.floor((enlapsed / (1000 * 60 * 60)) % 24)).padStart(2, "0");
    const dDayMinutes = String(Math.floor((enlapsed / ((1000 * 60)) % 60))).padStart(2, "0");
    const dDaySeconds = String(Math.floor(((enlapsed / 1000) % 60))).padStart(2, "0");

    if(dDayDays>0){
        dDay.innerText = `${dDayDays}d ${dDayHours}h ${dDayMinutes}m ${dDaySeconds}s`
    } else{
        alert("Merry Christmas!")
    }

}
christmasEveCount()
setInterval(christmasEveCount, 1000)
