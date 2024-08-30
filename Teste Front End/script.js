// botão hamburguer
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.main-nav').classList.toggle('active');
    

});



//telefone
document.querySelectorAll('.ver-telefone').forEach(function(botao, index) {
    botao.addEventListener('click', function() {
        const telefoneElement = document.querySelectorAll('.telefone')[index];
        telefoneElement.textContent = telefoneElement.getAttribute('data-telefone');
        telefoneElement.style.display = 'block';
    });
});

//inputs mascara
const txt_cpf = document.querySelector('#txt_cpf');
txt_cpf.addEventListener('keypress', () => {
    let inputLength = txt_cpf.value.length;
    if(inputLength === 3 || inputLength === 7) {
        txt_cpf.value += ".";
    } else if (inputLength === 11) {
        txt_cpf.value += "-";
    }

})

const txt_telefone = document.querySelector('#txt_telefone');
txt_telefone.addEventListener('keypress', () =>{
    let inputLength = txt_telefone.value.length;
    if(inputLength === 0) {
        txt_telefone.value += "(";
    } else if(inputLength === 3){
        txt_telefone.value += ") ";
    } else if(inputLength === 9){
        txt_telefone.value += "-";
    }
});

function msgAlerta() {
    alert("Mensagem enviada com sucesso!");
}

//regra de 3
document.getElementById('calcularRg3').addEventListener('click', function(){
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);

    if(isNaN(num1) || isNaN(num2) || isNaN(num3) || num1 === 0){
        document.getElementById('resultadoRg3').value = "Sem resultado";
    }
    
    var resultado = (num3 * num2) / num1;
    
    if(Number.isInteger(resultado)){
        document.getElementById('resultadoRg3').value = resultado;

        } else{
        document.getElementById('resultadoRg3').value = resultado.toFixed(2).replace('.', ',');

    }
   

});

//modal
const abrirModal = document.getElementById('abrir-modal');
const fecharModal = document.getElementById('fechar-modal');
const modal = document.getElementById('modal');
const fade = document.getElementById('fade');

const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
};

[abrirModal, fecharModal, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});

//download imagem html2canvas
document.getElementById("btn-download").addEventListener("click", function() {
    html2canvas(document.getElementById("capture")).then(function(canvas) {
        var link = document.createElement('a');
        link.download = 'casa-capture.png'; 
        link.href = canvas.toDataURL("imagens");
        link.click(); 
    });
});

