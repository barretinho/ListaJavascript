function calcularAntecessor() {
  const numero = parseFloat(document.getElementById("numero").value);
  const antecessor = numero - 1;

  document.getElementById("resultado").innerHTML = `O antecessor de ${numero} é ${antecessor}`;
}

function calcularArea() {
  const base = parseFloat(document.getElementById("base").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const area = base * altura;

  document.getElementById("resultado").innerHTML = `A área do retângulo é ${area}`;
}

function calcularIdade() {
  const anos = parseFloat(document.getElementById("anos").value);
  const meses = parseFloat(document.getElementById("meses").value);
  const dias = parseFloat(document.getElementById("dias").value);

  const idadeDias = anos * 365 + meses * 30 + dias;

  document.getElementById("resultado").innerHTML = `A idade em dias é ${idadeDias}`;
}

function calcularPercentuais() {
  const eleitores = parseFloat(document.getElementById("eleitores").value);
  const votosBrancos = parseFloat(document.getElementById("votos-brancos").value);
  const votosNulos = parseFloat(document.getElementById("votos-nulos").value);
  const votosValidos = parseFloat(document.getElementById("votos-validos").value);


  const percentualBrancos = (votosBrancos / eleitores) * 100;
  const percentualNulos = (votosNulos / eleitores) * 100;
  const percentualValidos = (votosValidos / eleitores) * 100;

  document.getElementById("brancos").innerHTML = percentualBrancos.toFixed(2) + "%";
  document.getElementById("nulos").innerHTML = percentualNulos.toFixed(2) + "%";
  document.getElementById("validos").innerHTML = percentualValidos.toFixed(2) + "%";
}

function calcularNovoSalario() {
  const salarioAtual = parseFloat(document.getElementById("salario-atual").value);
  const percentualReajuste = parseFloat(document.getElementById("percentual-reajuste").value);

  const novoSalario = salarioAtual + (salarioAtual * percentualReajuste / 100);

  document.getElementById("resultado").innerHTML = `O novo salário é R$${novoSalario.toFixed(2)}`;
}

function calcularMedia() {
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);

  const media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;

  document.getElementById("resultado").innerHTML = `A média final é ${media.toFixed(2)}`;
}

function converterTemperatura() {
  const temperaturaF = parseFloat(document.getElementById("temperatura-f").value);

  const temperaturaC = (temperaturaF - 32) * 5 / 9;

  document.getElementById("resultado").innerHTML = `${temperaturaC.toFixed(1)} °C`;
}

function verificarNumero() {
  const valor = parseFloat(document.getElementById("valor").value);

    if (valor > 10) {
      document.getElementById("resultado").innerHTML = "É MAIOR QUE 10!";

    }else if (valor == 10) {
      document.getElementById("resultado").innerHTML = "É O PRÓPRIO 10!";

    }else {
      document.getElementById("resultado").innerHTML = "NÃO É MAIOR QUE 10!";

    }
}

function identificarMaior() {
  const valor1 = parseFloat(document.getElementById("valor1").value);
  const valor2 = parseFloat(document.getElementById("valor2").value);

    if (valor1 > valor2) {
      document.getElementById("resultado").innerHTML = `O maior valor digitado é ${valor1}`;

    } else {
      document.getElementById("resultado").innerHTML = `O maior valor digitado é ${valor2}`;
      
    }
} 