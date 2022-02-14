function imcCalculationlogical(){
    const $ = document.querySelector.bind(document);
   
    const peso = $("#displayPeso");
    const altura  = $("#displayAltura");
    const calcular = $("#inputCalcular");

    const imcCalculo = $("#calculoIMC");
    const reposta  = $("#repostaIMC");
    
    calcular.addEventListener("click", () => { 


    let imc = peso.value / (altura.value * altura.value);

    imcCalculo.textContent=`IMC: ${imc.toFixed()}`;

    console.log(peso.value)

    if (imc < 18,5){
        reposta.textContent=`(Abaixo do Peso)`; 
        }

    else if (imc > 18,5 && imc < 24,9){
        reposta.textContent=`(Peso Normal)`; 
        }

    else if (imc > 25 && imc < 29,9){
        reposta.textContent=`(Sobrepeso)`; 
        }

    else if (imc > 30 && imc < 34,9){
        reposta.textContent=`(Obesidade Grau I)`; 
        }  
    
    else if (imc > 35 && imc < 39,9){
        reposta.textContent = `(Obesidade Grau II)`; 
        }
    
    else if (imc >= 40){
            reposta.textContent = `(Obesidade Mórbida)`; 
        }   

    })
}

