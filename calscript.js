function calculate() {
    // Obter os valores dos inputs e do operador
    var num1 = parseFloat(document.getElementById('input1').value);
    var num2 = parseFloat(document.getElementById('input2').value);
    var operator = document.getElementById('operator').value;

    // Verificar se os inputs são válidos
    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, insira números válidos.');
        return;
    }

    // Realizar a operação com base no operador selecionado
    var result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                alert('Não é possível dividir por zero.');
                return;
            }
            break;
        default:
            alert('Operador inválido.');
            return;
    }

    // Exibir o resultado
    document.getElementById('result').innerText = 'Resultado: ' + result;
}
