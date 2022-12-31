let h1 = document.getElementById("h1");
let h2 = document.getElementById("h2");
let clock = document.getElementById("clock");

h1.style.fontSize = "32px";
h2.style.fontSize = "18px";
clock.style.fontSize = "18px";

function displayTime()
{
    let currentDate = new Date();
    let newYearDate = new Date(2023, 0, 1, 0, 0, 0, 0);

    if (currentDate <= newYearDate)
    {
        let countDown = newYearDate.getTime() - currentDate.getTime();
        let countDownDate = new Date(countDown);
        let h = countDownDate.getHours() - 8;
        let m = countDownDate.getMinutes();
        let s = countDownDate.getSeconds();

        clock.textContent = ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
    }
    else
    {
        h1.innerHTML = "";
        h2.innerHTML = "";
        clock.style.fontSize = "60px";
        clock.textContent = "Happy New Year!!";
    }
}

displayTime();

setInterval(displayTime, 1000);
