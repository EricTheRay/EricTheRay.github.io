let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let clock = document.getElementById("clock");

let intervalID;

let newYearDate = new Date(2023, 0, 1, 0, 0, 0, 0);

pageInitialize();

function pageInitialize()
{
    let currentDate = new Date();

    if (currentDate <= newYearDate)
    {
        let countDown = newYearDate.getTime() - currentDate.getTime();
        let countDownDate = new Date(countDown);
        let h = countDownDate.getHours() - 8;
        let m = countDownDate.getMinutes();
        let s = countDownDate.getSeconds();

        text1.style.fontSize = "32px";
        text2.style.fontSize = "20px";
        clock.style.fontSize = "18px";

        text1.textContent = "前進 2023";
        text2.textContent = "跨年倒數";
        clock.textContent = ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);

        intervalID = setInterval(displayTime, 1000);
    }
    else
    {
        text1.style.fontSize = "5px";
        text2.style.fontSize = "60px";
        clock.style.fontSize = "5px";

        text1.textContent = "";
        text2.textContent = "Happy New Year!!";
        clock.textContent = "";
    }
}

function displayTime()
{
    let currentDate = new Date();

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
        text1.style.fontSize = "5px";
        text2.style.fontSize = "60px";
        clock.style.fontSize = "5px";

        text1.textContent = "";
        text2.textContent = "Happy New Year!!";
        clock.textContent = "";

        clearInterval(intervalID);
    }
}
