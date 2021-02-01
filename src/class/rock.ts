import { Ground, Item, colors } from "../index";

class Rock implements Item {
    width: number;
    height: number;
    left: number;
    top: number;
    right: number;
    bottom: number;
    color:  string;
    speed: number;
    constructor(_canvas: HTMLCanvasElement, _t: number, _ground: Ground) {
        this.width = _canvas.width/10;
        this.height = _canvas.height/20;
        this.left = _canvas.width;
        this.top = _ground.top - this.height;
        this.right = this.left + this.width;
        this.bottom = _ground.top;
        this.color = colors.gray;
        this.speed = (5 + Math.floor(_t/500))/400*_canvas.width;
    }
    update = (_canvas: HTMLCanvasElement,_t : number) => {
        this.speed = (5 + Math.floor(_t/500))/400*_canvas.width;
        this.left -= this.speed;
        this.right -= this.speed;
    }
    draw = (ctx : CanvasRenderingContext2D) => {
        ctx.fillStyle = this.color;
        ctx.fillRect(
            this.left,
            this.top,
            this.width,
            this.height
            );
    }
}

export default Rock;