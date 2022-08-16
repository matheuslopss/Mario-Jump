const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const pontos = document.querySelector('.pontos');

let countPontos = 0;


const jump = () => {
    mario.classList.add('jump');
    
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);

}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');


    if(pipePosition <= 100 && pipePosition > 0 && marioPosition <= 80){

        pipe.style.animation = 'nome';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'nome';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '70px';
        mario.style.marginLeft = '20px';

        clearInterval(loop);
    }


}, 10);

function reload(){
    window.location.reload();
}



document.addEventListener('keydown', jump);