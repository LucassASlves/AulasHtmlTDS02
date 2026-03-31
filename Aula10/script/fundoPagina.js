const botaoVermelho = document.getElementById('btnRed');
const botaoVerde = document.getElementById('btnGreen');
const botaoAzul = document.getElementById('btnBlue');
const botaoAmarelo = document.getElementById('btnYellow');
const botaoHide = document.getElementById("btnHide"); //pegar por ID -> uTILIZAR #
const Titulo = document.querySelector("#titulo"); //pegar por tag -> UTILIZAR O NOME DA TAG
const botaoTema = document.querySelector("#btnTema"); //pegar por classe -> UTILIZAR .


function alterarCor(cor) {
    document.body.style.backgroundColor = cor;
}

botaoVermelho.addEventListener('click', () => alterarCor('red'));
botaoVerde.addEventListener('click', () => alterarCor('green'));
botaoAzul.addEventListener('click', () => alterarCor('blue'));
botaoAmarelo.addEventListener('click', () => alterarCor('yellow'));


botaoHide.addEventListener('click', () => {
    //titulo.classList.add('invisivel'); //adicionar a classe invisivel
    
    //classList.toggle -> se a classe existir ele remove, se não existir ele adiciona
    Titulo.classList.toggle('invisivel');


    if(botaoHide.textContent === "Esconder Título"){
        botaoHide.textContent = "Mostrar Título";
    } else {
    botaoHide.textContent = "Esconder Título";

  


    botaoHide.textContent == "Esconder Título";
    
}}); 

botaoTema.addEventListener('click', () => {
    document.body.classList.toggle('temaEscuro')

    if(botaoTema.textContent === "Tema Escuro"){
        botaoTema.textContent = "Tema Claro";
    } else {
        botaoTema.textContent = "Tema Escuro";
    }
});