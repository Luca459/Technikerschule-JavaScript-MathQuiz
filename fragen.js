const regexp = /^-?\d*$/;
const regexpkomma = /^-?\d*(.|,)\d\d$/;
const max = 100;
var map = {};
map[1] = 'x + y';
map[2] = 'x - y';
map[3] = 'x * y';
map[4] = 'x / y';
map[5] = 'x * y + z';
map[6] = 'x - y / z';
map[7] = 'x - y * z';
map[8] = 'sqrt';
map[9] = 'log';

function generateNumbers() {
    var result = new Array(3);

    if (spielstand == 4) {
        while (result[0] % result[1] != 0) {
            for (var i = 0; i < 3; i++) {
                result[i] = Math.floor(Math.random() * max + 1);
           }
        }
    } else if (spielstand == 6) {
        while (result[1] % result[2] != 0) {
            for (var i = 0; i < 3; i++) {
                result[i] = Math.floor(Math.random() * max + 1);
            }
        }
    } else if (spielstand == 9) {
        for (var i = 0; i < 3; i++) {
            result[i] = Math.floor(Math.random() * 10 + 2
            );
        }
    }
    else if(spielstand == 3 || spielstand == 5){
       do {
            for (var i = 0; i < 3; i++) {
            result[i] = Math.floor(Math.random() * max + 1);
            }
        } while(result[1] > 9)
        
    }
     else { 
        for (var i = 0; i < 3; i++) {
            result[i] = Math.floor(Math.random() * max + 1);
        }
    }
    return result;
}

function promptUser(question) {
    var erg = prompt(question);
    while (erg === '') {
        erg = prompt('Mach Eingabe Lan!\n' + question);
    }
    return erg;
}

function fragen(spielstand) {
    let numbers = generateNumbers();
    let calculationString = '';
    let question = '';
    let result = 0;
    if (spielstand < 8) {
        calculationString = map[spielstand].replace('x', numbers[0]).replace('y', numbers[1]).replace('z', numbers[2]);
        question = 'Berechne ' + calculationString;
        result = eval(calculationString);
    } else if (spielstand == 8) {
        result = Math.sqrt(numbers[0])
        question = 'Berechne die Quadratwurzel von {x} auf 2 Nachkommastellen'.replace('{x}', numbers[0]);
    } else if (spielstand == 9) {
        result = Math.log(numbers[0]) / Math.log(numbers[1]);
        question = 'Berechne den Logarithums von {x} zur Basis {y} auf 2 Nachkommastellen'.replace('{x}', numbers[0]).replace('{y}', numbers[1]);
    }
    let erg = promptUser(question);
    erg = erg.replace(/,/, ".");
    if (spielstand < 8) {
        if (!erg.match(regexp)) {
            alert("Keine gültige Eingabe. Bitte nur Zahlen ohne Nachkommastellen und ohne Tausendertrennzeichen.");
            return false;
        } else {
            return result == erg;
        }
    } else {
        if (!erg.match(regexpkomma)) {
            alert("Keine gültige Eingabe. Bitte nur Zahlen mit 2 Nachkommastellen und ohne Tausendertrennzeichen.");
            return false;
        } else {
            result = Math.round(result * 100) / 100;
            return result.toFixed(2) == erg;
        }
    }}
