/**
 * Created by bob on 3/14/17.
 */
var ans = "";
var clear = false;
var calc = "";
$(document).ready(function () {
    $("button").click(function () {
        var text = $(this).attr("value");
        if (parseInt(text, 10) == text || text === "." || text === "/" || text === "*" || text === "-" || text === "+" || text === "%") {
            if (clear === false) {
                calc += text;
                $(".form-control").val(calc);
            } else {
                calc = text;
                $(".form-control").val(calc);
                clear = false;
            }
        } else if (text === "AC") {
            calc = "";
            $(".form-control").val(calc);
        } else if (text === "CE") {
            calc = calc.slice(0, -1);
            $(".form-control").val(calc);
        }  else if  (text === "=") {
            ans = eval(calc);
            $(".form-control").val(ans);
            clear = true;
        }
    });
});