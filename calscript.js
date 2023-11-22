const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const soma = document.querySelector("#soma");
const subtrai = document.querySelector("#subtrai");
const multiplica = document.querySelector("#multiplica");
const divide = document.querySelector("#divide");
const raiz = document.querySelector("#raiz");
const exp = document.querySelector("#exp");
const ce = document.querySelector("#ce");
const trocar = document.querySelector("#trocar");
const resultado = document.querySelector("#resultado");

soma.addEventListener("click", () => {
  const valor1 = parseFloat(num1.value);
  const valor2 = parseFloat(num2.value);
  resultado.textContent = valor1 + valor2;
});

subtrai.addEventListener("click", () => {
  const valor1 = parseFloat(num1.value);
  const valor2 = parseFloat(num2.value);
  resultado.textContent = valor1 - valor2;
});

multiplica.addEventListener("click", () => {
  const valor1 = parseFloat(num1.value);
  const valor2 = parseFloat(num2.value);
  resultado.textContent = valor1 * valor2;
});

divide.addEventListener("click", () => {
  const valor1 = parseFloat(num1.value);
  const valor2 = parseFloat(num2.value);
  resultado.textContent = valor1 / valor2;
});

raiz.addEventListener("click", () => {
  const valor1 = parseFloat(num1.value);
  resultado.textContent = Math.sqrt(valor1);
});

exp.addEventListener("click", () => {
  const valor1 = parseFloat(num1.value);
  resultado.textContent = Math.pow(valor1, valor2);
});

ce.addEventListener("click", () => {
  resultado.textContent = "";
});

trocar.addEventListener("click", () => {
  const temp = num1.value;
  num1.value = num2.value;
  num2.value = temp;
});