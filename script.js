const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const pontos = document.querySelector('.pontos');

let countPontos = 0;

var rangeIntersect = function(min0, max0, min1, max1) {
    return Math.max(min0, max0) >= Math.min(min1, max1) && Math.min(min0, max0) <= Math.max(min1, max1)
}

var rectIntersect = function (r0, r1) {
    return rangeIntersect(r0.left, r0.right, r1.left, r1.right) && rangeIntersect(r0.top, r0.bottom, r1.top, r1.bottom)
}


const jump = () => {
    mario.classList.add('jump');
    
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);

}


const loop = setInterval(() => {

    var itemA = mario.getBoundingClientRect();
    var itemB = pipe.getBoundingClientRect();

    if(rectIntersect(itemA, itemB)){
        onDeath(itemA, itemB);
        clearInterval(loop);
    }
    

}, 10);

function reload(){
    window.location.reload();
}


function onDeath(marioDeath, pipeDeath){
    console.log(marioDeath);

    pipe.style.animation = 'nome';
    pipe.style.left = `${pipeDeath.left}px`;

    mario.style.animation = 'nome';
    mario.style.bottom = 'unset';
    mario.style.top = `${marioDeath.bottom}px`;
    mario.style.transform = 'translateY(-100%)';

    mario.src = './images/game-over.png';
    mario.style.width = '70px';
    mario.style.marginLeft = '20px';

}


document.addEventListener('keydown', jump);