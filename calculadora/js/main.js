//Capta o valor
function numNohistorio() {
    return document.getElementById('valor-historico').innerHTML
}

//Imprime o valor no histórico
function historico(num) {
    document.getElementById('valor-historico').innerHTML = num
}

//Capta o valor
function numNaCaixa() {
    return document.getElementById('valor-caixa').innerHTML
}

//Imprime o valor na caixa
function caixa(num) {
    if (num == "") {
        document.getElementById('valor-caixa').innerHTML = num
    } else { //Formata o número somente se tiver um número na caixa
        document.getElementById('valor-caixa').innerHTML = formatacaoNum(num)
    }
}

//Formata o número
function formatacaoNum(num) {
    if (num == "-") { // Se o número for negativo retorna nada
        return ""
    }

    var numero = Number(num) // Converte para número
    var valor = numero.toLocaleString("en")
    return valor
}

//Deixa no número da forma natural que ele é (sem vírgulas no caso)
function numNatural(num) {
    return Number(num.replace(/,/g, ''))
}

//Colocando o operador na caixa
var operator = document.getElementsByClassName("operator")
for (let index = 0; index < operator.length; index++) {
    operator[index].addEventListener('click', function () {
        if (this.id == "limpaTudo") { // C
            historico("")
            caixa("")
        }
        else if (this.id == "limpaUm") { // CE
            var valor = numNatural(numNaCaixa()).toString()
            if (valor) { // Se tiver algum valor nele
                valor = valor.substring(0, valor.length - 1)
                caixa(valor)
            }
        }
        else { // Se for algum operador
            var valor = numNaCaixa()
            var numHistorico = numNohistorio()
            if (valor == "" && numHistorico != "") { // Realiza somente a mudança no histórico
                if (isNaN(numHistorico[numHistorico.length - 1])) { // Se não for um número o histórico eliminaa ou substitui o último elemento 
                    numHistorico = numHistorico.substring(0, numHistorico.length - 1)
                }
            }
            if (valor != "" || numHistorico != "") { // Se valor ou o histórico for diferente de nada, o valor é adicionado no histórico
                valor = valor == "" ? valor : numNatural(valor)
                numHistorico = numHistorico + valor
                if (this.id == "=") { // Se for o sinal de igual é realizada a conta
                    var res = eval(numHistorico) // É realizado a conta no histórico
                    caixa(res) // Onde o resultado é mostrado
                    historico("") // O histórico fica limpo
                }
                else {
                    numHistorico = numHistorico + this.id // É adicionado o sinal no histórico
                    historico(numHistorico)
                    caixa("") // A caixa fica limpa
                }
            }
        }
    })
}

//Colocando o valor se for número na caixa
var number = document.getElementsByClassName("number")
for (let index = 0; index < number.length; index++) {
    number[index].addEventListener('click', function () {
        var valor = numNatural(numNaCaixa());
        if (valor != NaN) { //Se valor é um número
            valor = valor + this.id
            caixa(valor)
        }
    })

}