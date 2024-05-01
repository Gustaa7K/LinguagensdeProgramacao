// Função para adicionar conteúdo ao display
function addToDisplay(value) {
    document.getElementById('display').value += value;
}

// Função para limpar o display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Função para calcular a expressão no display
function calculate() {
    var expression = document.getElementById('display').value;
    var result = eval(expression);
    document.getElementById('display').value = result;
}