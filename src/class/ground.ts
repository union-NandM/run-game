import { colors } from "../index";

class Ground {
    left : number;
    top : number;
    width : number;
    height : number;
    color : string;

    constructor(canvas : HTMLCanvasElement) {
        this.left = 0;
        this.top = canvas.height*2/3;
        this.width = canvas.width;
        this.height = canvas.height/3;
        this.color = colors.lightslategray;
    }
    
    draw(ctx : CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.left,this.top,this.width,this.height);
    }
}

export default Ground;