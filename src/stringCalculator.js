/*
* String calculator kata
* http://osherove.com/tdd-kata-1/
*
 * */
function StringCalculator() {

    this.add = function (stringArgument) {

        var numbers = stringArgument.split(",");

        var result = 0;
        for(var i = 0 ; i< numbers.length; i++){
          result += parseNumber(numbers[i]);
        }

        return result;

    };
}

function parseNumber(argument) {
    if (argument != "") return parseInt(argument);
    return 0;
}