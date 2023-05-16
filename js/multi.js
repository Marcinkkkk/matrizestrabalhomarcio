var linha1 = parseInt(prompt("Digite o numero de linhas da matriz1"))

while (isNaN(linha1) || linha1 <= 0) {
    alert("Valor Invalido")

    linha1 = parseInt(prompt("Digite o numero de linha da matriz1"))
}
var coluna1 = parseInt(prompt("Digite o numero de colunas da matriz1"))
while (isNaN(coluna1) || coluna1 <= 0) {
    alert("Valor Invalido")

    coluna1 = parseInt(prompt("Digite o numero de colunas da matriz1"))
}

var linha2 = parseInt(prompt("Digite o numero de colunas da matriz2( numero de coluna desta matriz será igual ao de linhas da matriz1)"))
while (isNaN(linha2) || linha2 <= 0) {
    alert("Valor Invalido")

    linha2 = parseInt(prompt("Digite o numero de colunas da matriz2( numero de coluna desta matriz será igual ao de linhas da matriz1)"))

}
var coluna2 = linha1

var matriz1 = new Array();
var matriz2 = new Array();
var result = new Array();

for (i = 0; i < coluna1; i++) {
    matriz1[i] = [];

    for (j = 0; j < linha1; j++) {
        matriz1[i][j] = parseInt(Math.random() * 201 - 100);
    }
}

console.table(matriz1);

for (i = 0; i < coluna2; i++) {
    matriz2[i] = [];

    for (j = 0; j < linha2; j++) {
        matriz2[i][j] = parseInt(Math.random() * 201 - 100);
    }
}

console.table(matriz2);

for (i = 0; i < coluna1; i++) {
    result[i] = [];

    for (j = 0; j < linha2; j++) {
        result[i][j] = 0;
    }
}

for (i = 0; i < coluna1; i++) {
    for (j = 0; j < linha2; j++) {
        for (k = 0; k < coluna2; k++) {
            result[i][j] += matriz1[i][k] * matriz2[k][j];
        }
    }
}


document.write("<br>")

document.write("<h1>Matriz 1:</h1>");
document.write("<h2>(números gerados aleatóriamente)</h2>");
document.write("<br>")
document.write("<table border=1>");
for (i = 0; i < matriz1.length; i++) {
    var linha = "<tr class='matriz'>";
    for (j = 0; j < matriz1[i].length; j++) {
        linha = linha + "<td class='matriz'>" + matriz1[i][j] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");

document.write("<br>")

document.write("<h2>X</h2>");

document.write("<br>")

document.write("<h1>Matriz 1:</h1>");
document.write("<h2>(números gerados aleatóriamente)</h2>");
document.write("<br>")
document.write("<table border=1>");
for (i = 0; i < matriz2.length; i++) {
    var linha = "<tr class='matriz'>";
    for (j = 0; j < matriz2[i].length; j++) {
        linha = linha + "<td class='matriz'>" + matriz2[i][j] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");

document.write("<br>")

document.write("<h2>=</h2>");

document.write("<br>")

document.write("<h2>Resultado</h2>")
document.write("<table border=1>");
for (i = 0; i < result.length; i++) {
    var linha = "<tr class='matriz'>";
    for (j = 0; j < result[i].length; j++) {
        linha = linha + "<td class='matriz'>" + result[i][j] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");

document.write("<br>");
document.write("<br>");