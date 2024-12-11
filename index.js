function multiply() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let multiplicationResult;

    if (isNaN(num1) || isNaN(num2)) {
        multiplicationResult = 'Por favor, ingrese números válidos.';
    } else {
        multiplicationResult = num1 * num2;
    }

    document.getElementById('multiplicationResult').innerText = `Resultado de la multiplicación: ${multiplicationResult}`;

    if (!isNaN(multiplicationResult)) {
        document.getElementById('divisionSection').style.display = 'block';
        updateProgress(50);
        updateStep(2);
    }

    return multiplicationResult;
}

function divide() {
    const numerator = parseFloat(document.getElementById('numerator').value);
    const multiplicationResult = parseFloat(document.getElementById('multiplicationResult').innerText.split(': ')[1]);
    let divisionResult;

    if (isNaN(numerator) || isNaN(multiplicationResult)) {
        divisionResult = 'Por favor, ingrese números válidos.';
    } else if (multiplicationResult === 0) {
        divisionResult = 'El denominador no puede ser cero.';
    } else {
        divisionResult = numerator / multiplicationResult;
    }

    document.getElementById('divisionResult').innerText = `Resultado de la división: ${divisionResult}`;
    updateProgress(100);
}

function updateProgress(value) {
    document.getElementById('progress').style.width = `${value}%`;
}

function updateStep(step) {
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.remove('active');
    document.getElementById(`step${step}`).classList.add('active');
}