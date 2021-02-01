import { Ground, Item } from "../index";

class Tree implements Item {
    width: number;
    height: number;
    top: number;
    bottom: number;
    left: number;
    right: number;
    color: string;
    speed: number;
    constructor(_canvas: HTMLCanvasElement, _ground: Ground, _t: number, _color: string, _left: number = -1) {
        this.color = _color;
        this.height = _canvas.height/10 * (1 + Math.random());
        this.width = this.height * 2 / Math.tan(Math.PI * 4 / 10);
        this.top = _ground.top - this.height;
        this.bottom = _ground.top;
        this.left = _left === -1 ? _canvas.width : _left;
        this.right = this.left + this.width;
        this.speed = (5 + Math.floor(_t/500))/400*_canvas.width;
    }

    update = (_canvas: HTMLCanvasElement,_t : number) => {
        this.speed = (5 + Math.floor(_t/500))/400*_canvas.width;
        this.left -= this.speed;
        this.right -= this.speed;
    }
    draw = (ctx : CanvasRenderingContext2D) => {
        ctx.globalAlpha = 0.5;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.left, this.bottom);
        ctx.lineTo(this.left + this.width/2, this.top);
        ctx.lineTo(this.right, this.bottom);
        ctx.closePath();
        ctx.fill();
        ctx.globalAlpha = 1;
    }
    
}

export default Tree;