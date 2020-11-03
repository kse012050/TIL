export class Ball {
    constructor(stageWidth, stageHeight, radius, speed) {
        // console.log(stageWidth);
        this.radius = radius;
        this.vx = speed;
        this.vy = speed;
        // console.log(speed);
        const diameter = this.radius * 2;
        this.x = diameter + (Math.random() * stageWidth - diameter);
        this.y = diameter + (Math.random() * stageHeight - diameter);
        // console.log(this.x);
    }

    draw(ctx, stageWidth, stageHeight) {
        // console.log(this.vw);
        console.log(this.x);
        // this.x += this.vw;
        this.y += this.vy;

        this.bounceWindow(stageWidth, stageHeight);
        // console.log(this.radius);
        ctx.fillStyle = '#fdd700';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    bounceWindow(stageWidth, stageHeight) {
        const minX = this.radius;
        const maxX = stageWidth - this.radius;
        const minY = this.radius;
        const maxY = stageHeight - this.radius;

        if (this.x <= minX || this.x >= maxX){
            this.vx *= -1;
            this.x += this.vw;
        }else if(this.y <= minY || this.y >= maxY){
            this.vy *= -1;
            this.y += this.vy;
        }
    }
}