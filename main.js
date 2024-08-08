let mainStringEL = document.getElementById("screenNum")
let mainString = ""

function appendNum(number){
    mainString += number
    mainStringEL.textContent = mainString
}

function clearAll(){
    mainString = ""
    mainStringEL.textContent = ""
}

function calculateAll() {
    if (mainString.includes(' + ')) {
        let numbers = mainString.split(' + ');
        let num1 = parseFloat(numbers[0]);
        let num2 = parseFloat(numbers[1]);
        mainString = (num1 + num2).toString();
    } else if (mainString.includes(' - ')) {
        let numbers = mainString.split(' - ');
        let num1 = parseFloat(numbers[0]);
        let num2 = parseFloat(numbers[1]);
        mainString = (num1 - num2).toString();
    } else if (mainString.includes(' * ')) {
        let numbers = mainString.split(' * ');
        let num1 = parseFloat(numbers[0]);
        let num2 = parseFloat(numbers[1]);
        mainString = (num1 * num2).toString();
    } else if (mainString.includes(' / ')) {
        let numbers = mainString.split(' / ');
        let num1 = parseFloat(numbers[0]);
        let num2 = parseFloat(numbers[1]);
        if (num2 === 0) {
            mainString = "Dummy you can't do that";
        } else {
            mainString = (num1 / num2).toString();
        }
    } else {
        mainString = 'Invalid operation';
    }

    mainStringEL.textContent = mainString;
}