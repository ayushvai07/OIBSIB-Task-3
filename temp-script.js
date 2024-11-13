
function calculate() {
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;

    var temp = parseFloat(document.getElementById("input-data").value);

    var convertedValue;
    var resultUnit;

    switch (fromUnit) {
        case 'C': if (toUnit === 'F') {
            convertedValue = (temp * 9 / 5) + 32;
            resultUnit = 'F';
        } else if (toUnit === 'K') {
            convertedValue = temp + 273.15;
            resultUnit = 'K'
        } else if (toUnit === 'C') {
            convertedValue = temp;
            resultUnit = 'C';
        }
            break;

        case 'F': if (toUnit === 'C') {
            convertedValue = (temp - 32) * 5 / 9;
            resultUnit = 'C';
        } else if (toUnit === 'K') {
            convertedValue = (temp - 32) * 5 / 9 + 273.15;
            resultUnit = 'K'
        } else if (toUnit === 'F') {
            convertedValue = temp;
            resultUnit = 'F';
        }
            break;

        case 'K': if (toUnit === 'F') {
            convertedValue = (temp - 273.15) * 9 / 5 + 32;
            resultUnit = 'F';
        } else if (toUnit === 'K') {
            convertedValue = temp;
            resultUnit = 'K'
        } else if (toUnit === 'C') {
            convertedValue = temp - 273.15;
            resultUnit = 'C';
        }
            break;
    }

    document.getElementById("res").innerHTML = convertedValue.toFixed(2) + " " + resultUnit;



}

