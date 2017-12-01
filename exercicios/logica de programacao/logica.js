function exercicio5() {
    /* Faça um programa que receba a medida em centímetros e exiba esse
número em polegadas. OBS: Uma polegada equivale a 2.5
centímetros. */
    //Entrada
    var centimetros = parseFloat(prompt("Digite o valor em centimetros para converter em polegadas"));
    // processamento
    var result = centimetros / 2.5;
    //saida
    alert("O valor em polegadas é " + result);
}

function exercicio6() {
    /** Faça um programa que receba a medida em polegadas e exiba esse
    número em centímetros. */
    //Entrada
    var polegadas = parseFloat(prompt("Digite o valor em polegadas para converter em centimetros"));
    //Processamento
    var result = polegadas * 2.5;
    //SAida
    alert("O valor em centimetros é: " + result);
}

function exercicio11() {
    /* .Faça um programa que receba um número inteiro do usuário e informe
    se este número é positivo ou negativo.*/
    //Entrada
    var numero = parseInt(prompt("Digite um valor"));
    //Processamento
    var positivo = numero >= 0;
    //SAida
    alert("O numero é: " + (positivo
        ? "Positivo"
        : "Negativo"));
}

function exercicio12() {
    /* .Faça um programa que receba um número do usuário e informe se
    este número é par ou ímpar. */
    //Entrada
    var numero = parseInt(prompt("Digite um valor"));
    //Processamento
    var par = numero % 2 != 1;
    //SAida
    if (numero == 0) {
        alert("O numero é neutro");
    } else {
        alert("O numero é: " + (par
            ? "Par"
            : "Impar"));
    }
}

function exercicio13() {
    /* Faça um programa que receba um número de usuário e exiba este
    número, apenas se for par */
    //Entrada
    var numero = parseInt(prompt("Digite um numero"));
    //Processamento
    var par = numero % 2 != 1;
    //SAida
    alert("Só exibe se o numero for par: " + (par
        ? numero
        : "é Impar"));
}

function exercicio14() {
    /* Faça um programa que receba o preço de um produto e o seu código
    de origem e imprima a sua procedência, utilizando uma estrutura IF
    sem o ELSE, para cada item abaixo. A procedência obedece a seguinte
    tabela:
    Código de Origem Procedência
    1 Sul
    2 Norte
    3 Leste
    4 Oeste
    5 ou 6 Nordeste
    7, 8 ou 9 Sudeste
    10 até 20 Centro-Oeste
    21 até 30 Sem definição */
    //Entrada
    var valorProduto = parseFloat(prompt("Digite o valor do Produto:"));
    var codigoProcedencia = parseInt(prompt("Digite o codigo de Procedencia:"));

    //Processamento
    console.time("ifSimples");
    var procedencia
    if (codigoProcedencia == 1) {
        procedencia = "Sul";
    }
    if (codigoProcedencia == 2) {
        procedencia = "Norte";
    }
    if (codigoProcedencia == 3) {
        procedencia = "Leste";
    }
    if (codigoProcedencia == 4) {
        procedencia = "Oeste";
    }
    if (codigoProcedencia == 5 || codigoProcedencia == 6) {
        procedencia = "Nordeste";
    }
    if (codigoProcedencia == 7 || codigoProcedencia == 8 || codigoProcedencia == 9) {
        procedencia = "Sudeste";
    }
    if (codigoProcedencia >= 10 && codigoProcedencia <= 20) {
        procedencia = "Centro-Oeste";
    }
    if (codigoProcedencia >= 21 && codigoProcedencia <= 30) {
        procedencia = "Sem definição";
    }
    console.timeEnd("ifSimples");
    console.time("ifConcatenado");
    if (codigoProcedencia == 1) {
        procedencia = "Sul";
    } else if (codigoProcedencia == 2) {
        procedencia = "Norte";
    } else if (codigoProcedencia == 3) {
        procedencia = "Leste";
    } else if (codigoProcedencia == 4) {
        procedencia = "Oeste";
    } else if (codigoProcedencia == 5 || codigoProcedencia == 6) {
        procedencia = "Nordeste";
    } else if (codigoProcedencia == 7 || codigoProcedencia == 8 || codigoProcedencia == 9) {
        procedencia = "Sudeste";
    } else if (codigoProcedencia >= 10 && codigoProcedencia <= 20) {
        procedencia = "Centro-Oeste";
    } else if (codigoProcedencia >= 21 && codigoProcedencia <= 30) {
        procedencia = "Sem definição";
    }
    console.timeEnd("ifConcatenado");
    console.time("Switch");
    switch (codigoProcedencia) {
        case 1:
            procedencia = "Sul";
            break;
        case 2:
            procedencia = "Norte";
            break;
        case 3:
            procedencia = "Leste";
            break;
        case 4:
            procedencia = "Oeste";
            break;
        case 5,6:
            procedencia = "Nordeste";
            break;
        case 7,8,9:
            procedencia = "Sudeste";
            break;
        default:
            if (codigoProcedencia >= 10 && codigoProcedencia <= 20) {
                procedencia = "Centro-Oeste";
            } else if (codigoProcedencia >= 21 && codigoProcedencia <= 30) {
                procedencia = "Sem definição";
            }
            break;
    }
    console.timeEnd("Switch");

    //SAida
    alert("o valor do produto é: " + valorProduto + " e sua procedencia é: " + procedencia);
}

function exercicio15() {
    /*.Faça um programa que receba 4 notas de um aluno, calcule e imprima
        a média aritmética das notas e a mensagem de APROVADO para média
        superior ou igual a 7,0 RECUPERAÇÃO para notas entre 5.0 e 7,0 ou a
        mensagem de REPROVADO para média inferior a 5,0.
    */
    var qtd = 4;
    var notas = 0;
    for (var c = 1; c <= 4; c++) {
        notas += parseFloat(prompt("Digite a Nota" + c))
    }
    var media = notas / qtd;
    alert("Você " + (media < 5
        ? "foi REPROVADO"
        : media >= 7
            ? "foi APROVADO"
            : "ficou de RECUPERAÇÃO") + " sua media foi de: " + media);
}

function exercicioExtra() {
    /* Elabore um programa que solicite um numero entre 1 e 12.
     Você deve validar com if simples.
     Exiba o mês correspondente por Extenso,utilizando a estrutura if composto
    */

    var numero = parseInt(prompt("Digite um numero entre 1 e 12"))
    if (numero > 12 || numero < 1) {
        alert("Eu disse de 1 a 12!!");
    } else {
        var mes;
        if (numero == 1) {
            mes = "Janeiro";
        } else if (numero == 2) {
            mes = "Fevereiro";
        } else if (numero == 3) {
            mes = "Março";
        } else if (numero == 4) {
            mes = "Abril";
        } else if (numero == 5) {
            mes = "Maio";
        } else if (numero == 6) {
            mes = "Junho";
        } else if (numero == 7) {
            mes = "Julho";
        } else if (numero == 8) {
            mes = "Agosto";
        } else if (numero == 9) {
            mes = "Setembro";
        } else if (numero == 10) {
            mes = "Outubro";
        } else if (numero == 11) {
            mes = "Novembro";
        } else if (numero == 12) {
            mes = "Dezembro";
        }
        alert("O mês correspondente é: " + mes);
    }
}

function exercicioExtraComSwitch() {
    /* Elabore um programa que solicite um numero entre 1 e 12.
     Você deve validar com if simples.
     Exiba o mês correspondente por Extenso,utilizando a estrutura if composto
    */

    var numero = parseInt(prompt("Digite um numero entre 1 e 12"))   
        var mes;
        switch (numero) {
            case 1: mes = "Janeiro"; break;
            case 2: mes = "Fevereiro"; break;
            case 3:
                mes = "Março";
                break;
            case 4:
                mes = "Abril";
                break;
            case 5:
                mes = "Maio";
                break;
            case 6:
                mes = "Junho";
                break;
            case 7:
                mes = "Julho";
                break;
            case 8:
                mes = "Agosto";
                break;
            case 9:
                mes = "Setembro";
                break;
            case 10:
                mes = "Outubro";
                break;
            case 11:
                mes = "Novembro";
                break;
            case 12:
                mes = "Dezembro";
                break;
            default:
                alert("Eu disse de 1 a 12!!");
                break;
        }
        if (mes) {
            alert("O mês correspondente é: " + mes);
        }
    
}