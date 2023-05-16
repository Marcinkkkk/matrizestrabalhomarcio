var linha = parseInt(prompt("Digite o numero de linhas da matriz"))
while (isNaN(linha) || linha <= 0) {
    alert("Valor Invalido")
    linha = parseInt(prompt("Digite o numero de linhas da matriz"))
}
var coluna = parseInt(prompt("Digite o numero de colunas da matriz"))
while (isNaN(coluna) || coluna <= 0) {
    alert("Valor Invalido")

    coluna = parseInt(prompt("Digite o numero de colunas da matriz"))
}

var matriz1 = new Array();
var result = new Array();

for (i = 0; i < coluna; i++) {
    matriz1[i] = [];

    for (j = 0; j < linha; j++) {
        matriz1[i][j] = parseInt(Math.random() * 201 - 100);
    }
}

console.table(matriz1);

for (i = 0; i < coluna; i++) {
    result[i] = [];

    for (j = 0; j < linha; j++) {
        result[i][j] = matriz1[j][i]
    }

}
console.table(result);

document.write("<br>")

document.write("<h1>Matriz Original:</h1>");
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

document.write("<img src=''>");

document.write("<br>")

document.write("<h2>Resultado da Transposição:</h2>")
document.write("<h2>(Matriz^T)</h2>")
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