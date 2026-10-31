const btnEnviar = document.querySelector("#btn-enviar");
const form = document.querySelector("form");

const div = document.createElement("div");
form.appendChild(div);

function pintarFactorial(evento) {
  evento.preventDefault();
  
  div.innerHTML = "";

  const input = document.querySelector("#input-number");
  const resultado = calcularFactorial(Number(input.value));

  if (resultado) {
    div.innerHTML = `
      <p>El factorial de ${input.value} es ${resultado}</p>
    `;
  }
}

function calcularFactorial(num) {
  if (num == 0 || num == 1) {
    return 1;
  }

  return num * calcularFactorial(num - 1);
}

btnEnviar.addEventListener("click", pintarFactorial);