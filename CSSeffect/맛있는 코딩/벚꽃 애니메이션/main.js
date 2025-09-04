const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

const TOTAL = 150;
const petalArray = [];

const petalImg = new Image();
petalImg.src = './petal4.png '
petalImg.onload = () =>{
    for(let a = 0; a < TOTAL; a++){
        petalArray.push(new Petal())
    }
    // 이미지가 다 불러오기 전에 render() 함수가 실행 되기 떄문에 이미지가 불러오고 나서 render() 함수 실행
    render();
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    petalArray.forEach(petal => {
        petal.animate();
    })
    window.requestAnimationFrame(render);
}

window.addEventListener('resize', ()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

// 벚꽃 잎 클래스
class Petal{
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height * 2 - canvas.height;
        this.w = 30 + Math.random() * 15;
        this.h = 20 + Math.random() * 10;
        this.opacity = this.w / 45;
        this.xSpeed = 2 + Math.random();
        this.ySpeed = 1 + Math.random();
        this.flip = Math.random();
        this.flipSpeed = Math.random() * 0.03;
    }

    draw() {
        if(this.y > canvas.height || this.x > canvas.width){
            this.x = -petalImg.width;
            this.y = Math.random() * canvas.height * 2 - canvas.height;
            this.xSpeed = 2 + Math.random();
            this.ySpeed = 1 + Math.random();
            this.flip = Math.random();
        }
        ctx.globalAlpha = this.opacity;
        ctx.drawImage(
            petalImg,
            this.x,
            this.y,
            this.w * (0.66 + (Math.abs(Math.cos(this.flip)) / 3)),
            this.h * (0.8 + (Math.abs(Math.sin(this.flip)) / 2))
        )
    }

    animate() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        this.draw();
        this.flip += this.flipSpeed;
    }
}