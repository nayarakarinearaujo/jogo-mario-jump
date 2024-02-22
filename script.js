// Seleciona o elemento HTML com a classe 'mario' e o atribui à variável 'mario'
const mario = document.querySelector('.mario');

// Seleciona o elemento HTML com a classe 'pipe' e o atribui à variável 'pipe'
const pipe = document.querySelector('.pipe');

// Define a função jump, que adiciona e remove a classe 'jump' ao elemento 'mario' para simular um pulo
const jump = () => {
    mario.classList.add('jump'); // Adiciona a classe 'jump'

    setTimeout(() => {
        mario.classList.remove('jump'); // Remove a classe 'jump' após 500ms
    }, 500);
}

// Define um loop que executa a cada 10ms
const loop = setInterval(() => {
    console.log('loop'); // Exibe uma mensagem no console a cada iteração do loop

    // Obtém a posição horizontal (offsetLeft) do elemento 'pipe'
    const pipePosition = pipe.offsetLeft;
    // Obtém a posição vertical do elemento 'mario' com base no estilo computado (bottom)
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    // Verifica se o 'mario' colidiu com o 'pipe'
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        // Desativa a animação do 'pipe' e define sua posição atual
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        // Desativa a animação do 'mario' e define sua posição atual
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        // Altera a imagem do 'mario', seu tamanho e margem esquerda
        mario.src = './imagens/game-over.png';
        mario.style.width = '20%';
        mario.style.marginLeft = '40%';

        // Interrompe o loop
        clearInterval(loop);
    }
}, 10);

// Adiciona um event listener para detectar a tecla pressionada e chamar a função jump
document.addEventListener("keydown", jump);