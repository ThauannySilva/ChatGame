let urlParams = new URLSearchParams(window.location.search);
let rodada = parseInt(urlParams.get('rodada'));
let opcao1 = document.getElementById("opcao1");
let opcao2 = document.getElementById("opcao2");
let opcao3 = document.getElementById("opcao3");
const sendButton = document.getElementById("send-btn");
const inputText = document.getElementById("input-text");
const chatsContainer = document.querySelector(".chats");
const clientStatus = document.getElementById("client-status");

if(rodada === 0){
    esconderBotoes();
    enviarNpcMensagem("Jogador, segue as regras para que sua jogabilidade seja boa.");
    enviarNpcMensagem("primeiro, não saia da tela de chat ate que a conversa com o npc seja finalizada. Você apenas recomeçara o jogo desta forma.");
    enviarNpcMensagem("segundo, após selecionar a opção, será necessario apertar no botão de enviar para iniciar uma nova rodada.");
    enviarNpcMensagem("terceiro e ultimo, no lado esquerdo, presente no menu, você poderá escolher o modo de apresentação escuro ou claro para melhor te satisfazer.");
    enviarNpcMensagem("Bom jogo!");
    
    rodada = rodada + 1;
    verificarRodada();

}

function esconderBotoes() {
    document.querySelector(".response-options").style.display = "none";
}

function aparecerBotoes() {
    document.querySelector(".response-options").style.display = "block";
}

function enviarMyMensagem() {
    if (inputText.value !== "") {
        // Criando o elemento da mensagem enviada
        const myChat = document.createElement("div");
        myChat.classList.add("my-chat");
        myChat.innerText = inputText.value;

        // Adicionando o elemento da mensagem enviada ao container de chats
        chatsContainer.appendChild(myChat);

        // verificando se a div de chats tem mais de 10 elementos
        if (chatsContainer.children.length > 8) {
            // removendo o chat mais antigo (primeiro filho)
            chatsContainer.removeChild(chatsContainer.firstElementChild);
        }

        // Resetando o valor do input
        inputText.value = "";

        rodada = rodada + 1;
        verificarRodada();
    }
}

function enviarNpcMensagem(mensagem) {
    // Criando o elemento da mensagem enviada
    const myChat = document.createElement("div");
    myChat.classList.add("client-chat");
    myChat.innerText = mensagem;

    // Adicionando o elemento da mensagem enviada ao container de chats
    chatsContainer.appendChild(myChat);

    // verificando se a div de chats tem mais de 10 elementos
    if (chatsContainer.children.length > 8) {
        // removendo o chat mais antigo (primeiro filho)
        chatsContainer.removeChild(chatsContainer.firstElementChild);
    }
}

function popularOpcaoes(texto1, texto2, texto3) {
        opcao1.value = texto1;
        opcao2.value = texto2;
        opcao3.value = texto3;
}

function npcStatus(status){
    if (status === 1){
       clientStatus.style.color = "yellowgreen";
       clientStatus.textContent = "online" 
    }
    else if(status === 2){
        clientStatus.style.color = "yellowgreen";
        clientStatus.textContent = "escrevendo.." 
    }
    else if(status === 3){
        clientStatus.style.color = "red";
        clientStatus.textContent = "ocupado" 
    }
    else if(status === 4){
        clientStatus.style.color = "lightgray";
        clientStatus.textContent = "desconectado" 
    }
     
}


///////////////////////////////////////////////////// area de veroficação das rodadas ///////////////////////////////////
function verificarRodada() {
    if (rodada === 1){
        npcStatus(2);
        setTimeout(function(){
            npcStatus(1);
            aparecerBotoes();
            enviarNpcMensagem("Oi, sou eu, tudo bem?");
            popularOpcaoes("diga", "O que foi?", "não enche o saco!")
            opcao1.addEventListener("click", function() {
                inputText.value = opcao1.value;
                esconderBotoes();
            });
            
            opcao2.addEventListener("click", function() {
                inputText.value = opcao2.value;
                esconderBotoes();
            });
            
            opcao3.addEventListener("click", function() {
                inputText.value = opcao3.value;
                esconderBotoes();
            });
            
            enviarMyMensagem();
        }, 3000); 
    }
    else if (rodada === 2){
    npcStatus(2);
    setTimeout(function(){
        npcStatus(1);
        setTimeout(() => {
            enviarNpcMensagem("Aconteceu algo com a Nick, sei que ja não somos mais tão proximas.");
        }, 2000); 
        npcStatus(1);
        setTimeout(() => {
            enviarNpcMensagem("Mas é serio, preciso da sua ajuda");
        }, 3500); 
          npcStatus(1);
        setTimeout(() => {
            enviarNpcMensagem("Não sei mais a quem recorrer, nem o Francis esta dando importancia ao que aconteceu");
        }, 4500); 
        npcStatus(1);

        setTimeout(() => {
            popularOpcaoes("explica melhor", "Como assim?", "não quero saber")
            aparecerBotoes();
        }, 5500); 
        
        opcao1.addEventListener("click", function() {
            inputText.value = opcao1.value;
            esconderBotoes();
        });
        
        opcao2.addEventListener("click", function() {
            inputText.value = opcao2.value;
            esconderBotoes();
        });
        
        opcao3.addEventListener("click", function() {
            inputText.value = opcao3.value;
            esconderBotoes();
        });
        enviarMyMensagem();
    }, 3000); 
    }
    else if (rodada === 3){
        npcStatus(2);
        setTimeout(function(){
            npcStatus(1);
            setTimeout(() => {
                enviarNpcMensagem("ontem a gente foi em uma festa");
            }, 2500); 
            setTimeout(() => {
                enviarNpcMensagem("Você sabe, o de sempre né");
            }, 3500); 
            setTimeout(() => {
                enviarNpcMensagem("Mas a nick ficou enchendo o saco pra ir embora, e então a gente falou na brincadeira pra ela ir");
            }, 4500); 
            setTimeout(() => {
                enviarNpcMensagem("Hoje de manhã eu fui mandar uma mensagem me desculpando, mas a tia Naty falou que a Nick não foi pra casa, e nem o Francis sabe dela");
            }, 5500); 
            setTimeout(() => {
                popularOpcaoes("Você tentou ligar?", "Será que ela só não está brava?", "não me importo")
                aparecerBotoes();
            }, 6500); 

            opcao1.addEventListener("click", function() {
                inputText.value = opcao1.value;
                esconderBotoes();
            });
            
            opcao2.addEventListener("click", function() {
                inputText.value = opcao2.value;
                esconderBotoes();
            });
            
            opcao3.addEventListener("click", function() {
                inputText.value = opcao3.value;
                esconderBotoes();
            });
            enviarMyMensagem();
        }, 3000); 
    }
    else if (rodada === 4){
        npcStatus(2);
        setTimeout(function(){
            setTimeout(() => {
                enviarNpcMensagem("é que tipo, não sei");
            }, 2500); 
            setTimeout(() => {
                enviarNpcMensagem("não podemos envolver a policia, por causa do passado");
            }, 3500); 
            setTimeout(() => {
                enviarNpcMensagem("Você sabe que eu não a deixaria ir se soubesse que isso ia acontecer");
            }, 4500); 
            setTimeout(() => {
                enviarNpcMensagem("porra, eu me sinto culpada demais, e de certa forma, a culpa é minha");
            }, 5500); 
            setTimeout(() => {
                enviarNpcMensagem("Não entendo porque o Francis não está preocupado, será que ele fez alguma coisa com ela?");
            }, 6500); 
            setTimeout(() => {
                enviarNpcMensagem("Mas este é o fim da demo e infelizmente, você não vai saber");
            }, 6500); 
            setTimeout(() => {
                popularOpcaoes("ok", "que pena", "ah não!!!")
                aparecerBotoes();
            }, 7500); 
            npcStatus(1);
            opcao1.addEventListener("click", function() {
                inputText.value = opcao1.value;
                esconderBotoes();
            });
            
            opcao2.addEventListener("click", function() {
                inputText.value = opcao2.value;
                esconderBotoes();
            });
            
            opcao3.addEventListener("click", function() {
                inputText.value = opcao3.value;
                esconderBotoes();
            });
            enviarMyMensagem();
        }, 3000); 
        }
}