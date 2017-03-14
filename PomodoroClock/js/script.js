/**
 * Created by bob on 3/14/17.
 */

/*** bug *
 * 停止计时器后无法继续计时器
 * 颜色跟随时间变化已经完成
 * 按钮修改工作时间功能正常
 * 运行就会自动开始计时器
 * 如果将计时器封装到一个函数里面,不知道如何停止.
 * **/
var breakTime = 5;
var sessionTime = 25;
var timeStatus = false;
var timesec = sessionTime * 60;
var colorsec = sessionTime * 60;
var breaksec = breakTime * 60;
var timeWork = setInterval(function () {
        timesec -= 1;
        var min = parseInt(timesec / 60);
        var sec = parseInt(timesec % 60);
        $("#realTime").html(min + ' : ' + sec);
        $(".fill").css("height", (colorsec - timesec) / colorsec * 100 + "%");
    }, 1000);

var timeBreak = setInterval(function () {
        breaksec -= 1;
    },1000);


$(document).ready(function () {

    $("button").click(function () {
        var text = $(this).attr("value");
        var id = $(this).attr("id");
        if (text == "-") {
            if (id == "breakReduce") {
                breakTime -= 1;
                $("#break").html(breakTime);
            } else {
                clearInterval(timeWork);
                sessionTime -= 1;
                $("#session").html(sessionTime);
                $("#realTime").html(sessionTime);
            }
        } else {
            if (id == "breakPlus") {
                breakTime += 1;
                $("#break").html(breakTime);
            } else {
                clearInterval(timeWork);
                sessionTime += 1;
                $("#session").html(sessionTime);
                $("#realTime").html(sessionTime);

            }
        }
    });
    $(".main").click(function () {
        // 开始计时
        if (timesec > 0) {
            clearInterval(timeBreak);
            $("#worlTitle").html("工作中");
            timeWork();
        } else {
            clearInterval(timeWork);
            $("#realTime").html("休息中");
            timeBreak();
        }
        if (breaksec == 0) {
            timesec = sessionTime * 60;
            breaksec = breakTime * 60;
        }
    })
});