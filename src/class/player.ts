import { Ground, Item, colors } from "../index";

class Player implements Item {
    height: number;
    width: number;
    left: number;
    top: number;
    right: number;
    bottom: number;
    color: string;
    outerEyeColor: string;
    innerEyeColor: string;
    vy: number;
    isGrounded: boolean;
    isHit: boolean;

    constructor(_canvas: HTMLCanvasElement,_ground: Ground) {
        this.width = _canvas.width/40*3;
        this.height = _canvas.height/40*3;
        this.left = _canvas.width/5;
        this.top = _ground.top - this.height;
        this.right = this.left + this.width;
        this.bottom = _ground.top;
        this.color = colors.darkgray;
        this.outerEyeColor = colors.whitesmoke;
        this.innerEyeColor = colors.black;
        this.vy = 0;
        this.isGrounded  = true;
        this.isHit = false;
    }
    
    
    setY = (y: number) => {
        this.top = y;
        this.bottom = this.top + this.height;
    }
    
    setX = (x: number) => {
        this.left = x;
        this.right = this.left + this.width;
    }
    
    moveX = (x: number) => {
        this.left += x;
        this.right += x;
    }

    moveY = (y: number) => {
        this.top += y;
        this.bottom += y;
    }

    getEyeX = (): number => {
        return (this.left+this.right*3)/4;
    }

    getEyeY = (): number => {
        return (this.top*6 + this.bottom*5)/11;
    }
    
    update = (_canvas: HTMLCanvasElement,_ground : Ground) => {
        if (!this.isGrounded) {
            this.moveY(-this.vy);
            this.vy -= _canvas.width/400;
            if (this.bottom > _ground.top) {
                this.setY(_ground.top - this.height);
                this.isGrounded = true;
                this.vy = 0;
            }
        }
    }
    
    draw = (_ctx : CanvasRenderingContext2D) => {
        _ctx.fillStyle = this.color;
        _ctx.fillRect(
            this.left,
            this.top,
            this.width,
            this.height
            );
        if (this.isGrounded && !this.isHit) {
            _ctx.beginPath();
            _ctx.arc(this.getEyeX(),this.getEyeY(),this.width/6,0,Math.PI*2);
            _ctx.fillStyle = this.outerEyeColor;
            _ctx.fill();
            _ctx.beginPath();
            _ctx.arc(this.getEyeX()+this.width/12,this.getEyeY(),this.width/15,0,Math.PI*2);
            _ctx.fillStyle = this.innerEyeColor;
            _ctx.fill();
        } else {
            _ctx.strokeStyle = this.innerEyeColor;
            _ctx.lineWidth = this.width/30;
            _ctx.beginPath();
            _ctx.moveTo(this.getEyeX()-this.width/6,this.getEyeY()-this.width/8);
            _ctx.lineTo(this.getEyeX()+this.width/6,this.getEyeY());
            _ctx.lineTo(this.getEyeX()-this.width/6,this.getEyeY()+this.width/8);
            _ctx.stroke();
        }

    }
    
    
}

export default Player;