# calculadorajs
Calculadora em JavaScript com eventListener e manipulação do DOM.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="calscript.js" defer></script>
    <title>Calculadora</title>

    <style>
.container {
  width: 300px;
  margin: 0 auto;
  padding: 10px;
}

input {
  width: 100px;
  height: 30px;
  border: 1px solid black;
}

button {
  width: 50px;
  height: 30px;
  background-color: #000;
  color: #fff;
  border: none;
  cursor: pointer;
}

#resultado {
  width: 100px;
  height: 30px;
  border: 1px solid black;
  text-align: center;
}
    </style>
</head>
<body>
    <div class="container">
        <input type="number" id="num1">
        <input type="number" id="num2">
        <button id="soma">+</button>
        <button id="subtrai">-</button>
        <button id="multiplica">*</button>
        <button id="divide">/</button>
        <button id="raiz">√</button>
        <button id="exp">^</button>
        <button id="ce">CE</button>
        <button id="trocar">↔</button>
        <div id="resultado"></div>
      </div>
  </div>
</body>
</html>
