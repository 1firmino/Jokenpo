//Variáveis Globais
let jogadaMaquina 
let jogadaHumano


function jogadas(jogada){

    // REINICIA O ATIBUTO OPACITY
    inicial()

    //CRIA A JOGADA DA MÁQUINA
        jogadaMaquina = Math.floor(Math.random()*3) 
    
    //RESGATA A JOGADA DO HUMANO E TRANSFORMA NUM VALOR PARA COMPARAR COM A JOGADA DA MÁQUINA
    if(jogada === "Pedra"){
       jogadaHumano = 0
    } else if(jogada === "Papel"){
       jogadaHumano = 1
    } else if(jogada === "Tesoura"){
       jogadaHumano = 2
    } 

    
    //TESTE DOS VALORES DA JOGADA DA MÁQUINA E DO HUMANO PARA DECIDIR O RESULTADO
    if(jogadaHumano === jogadaMaquina){
        document.getElementById("resultado").innerHTML = "Empatou!"
    
    }else if((jogadaHumano === 0 && jogadaMaquina === 1) || (jogadaHumano === 1 && jogadaMaquina === 2) || (jogadaHumano === 2 && jogadaMaquina === 0)){
        document.getElementById("resultado").innerHTML = "Você perdeu!"
     
    }else if((jogadaMaquina === 0 && jogadaHumano === 1) || (jogadaMaquina === 1 && jogadaHumano === 2) || (jogadaMaquina === 2 && jogadaHumano === 0)){
        document.getElementById("resultado").innerHTML = "Você ganhou!"
   
}   
   
    console.log("jogada da maquina foi " + jogadaMaquina)
    console.log("jogada do Humano foi " + jogadaHumano)

    realce()
    
}

// Função para realçar as jogadas feitas
function realce(){
    let clicadoMaquina = document.getElementsByClassName("jogadas maquina")
    clicadoMaquina[jogadaMaquina].style.opacity = "1"
    
    let clicadoHumano = document.getElementsByClassName("jogadas humano")
    clicadoHumano[jogadaHumano].style.opacity = "1"
  

}

// Função para voltar o realce ao estado inicial
function inicial(){
    let clicadoMaquina = document.getElementsByClassName("jogadas maquina")
    let i;
    for (i = 0; i < clicadoMaquina.length; i++) { 
        clicadoMaquina[i].style.opacity = "0.5"
    }
    
    
    clicadoHumano = document.getElementsByClassName("jogadas humano")
    let y;
    for (y = 0; y < clicadoHumano.length; y++) { 
        clicadoHumano[y].style.opacity = "0.5"
    }

}



