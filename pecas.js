let pesoPeca = 50
let quantidadePecas = 11
let nomeDaPeca = "Di"
let comprimentoNomeDaPeca = nomeDaPeca.length

if(comprimentoNomeDaPeca < 3){
    console.log(" # Atenção !!! O nome da peça deverá possuir mais de 3 caracteres para poder ser cadastrada, refaça esta etapa!")
} else {
    console.log(" ** O nome da Peça é válido, continue com o cadastramento da peça.")
}

if(pesoPeca > 100) {
    console.log(" ** Peso maior que 100g, continue com o cadastramento da peça.")
} else {
    console.log(" # Atenção!!! Peso isuficiente, não é possível cadastrar!")
}

if(quantidadePecas < 10) {
    console.log(" ** Ainda há espaço na caixa, pode cadastrar mais peças.")
} else {
    console.log(" # Atenção !!! A caixa está completa, você não pode cadastrar mais peças!")
}