console.log('Início de Jogo');

const dino = document.querySelector('.dino');
//console.log(dino);
let dinoPosition = 0;
let estaPulando = false;

//Verificar se a tecla espaço foi precionada
document.addEventListener('keydown',(event)=>{
    if (event.code === 'Space')
            if (!estaPulando) pular();
});

function pular(){
    let intervaloPulo = setInterval(()=>{
        estaPulando = true;
        if (dinoPosition >= 250){
            console.log('Topo!');
            clearInterval(intervaloPulo);
            let intrvaloQueda = setInterval(()=>{
                if (dinoPosition <= 0) {
                    console.log('Chão');
                    estaPulando = false;
                    clearInterval(intrvaloQueda);
                } else {
                    //Decrementar a posição do Dino
                    dinoPosition -= 20;
                    //Atualizar a pisição na tela
                    dino.style.bottom = dinoPosition + 'px';
                }
            },20);


        } else {
            //Incrementar a posição
            dinoPosition += 20;
            //Atualizar a posição da tela
            dino.style.bottom = dinoPosition + 'px';
        }
        
    },20);
    
};

        const background = document.querySelector('.background');

        function criarCacto() {
            let cactoPosition = 1000;
            const cacto = document.createElement('div');
            let tempoRandom = Math.random() * 6000 + 100;
            cacto.classList.add('cacto');
            cacto.style.left = 1000 + 'px';
            background.appendChild(cacto);

            let intervaloEsquerda = setInterval(()=>{
                if (cactoPosition <= -60) {
                    clearInterval(intervaloEsquerda);
                    background.removeChild(cacto);
                } else {
                    cactoPosition -= 10;
                    cacto.style.left = cactoPosition + 'px';
                }
            },20);
            let tempoCacto = setTimeout(criarCacto, tempoRandom);
        }

        criarCacto();