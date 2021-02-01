import drawScore from "./drawScore";
import { Player, Ground, Tree, Rock, colors, defaultDraw, run } from "../index";

const drawResultScreen = (_canvas: HTMLCanvasElement, _ctx: CanvasRenderingContext2D, _dt: number) => {
    _ctx.globalAlpha = 0.02 * Math.min(_dt,50);
    _ctx.fillStyle = colors.black;
    _ctx.font = `${_canvas.width/12}px sans-serif`;
    _ctx.textBaseline = "bottom";
    _ctx.textAlign = "center";
    _ctx.fillText("Game Over",_canvas.width/2,_canvas.height/4);
    _ctx.globalAlpha = 1;
}

const drawResultScore = (_canvas: HTMLCanvasElement, _ctx: CanvasRenderingContext2D, _dt: number, _t: number) => {
    _ctx.globalAlpha = 0.04 * Math.min(25,_dt);
    _ctx.fillStyle = colors.black;
    _ctx.font = `${_canvas.width/15}px sans-serif`;
    _ctx.textBaseline = "bottom";
    _ctx.textAlign = "right";
    _ctx.fillText(`Score : `,_canvas.width/2,_canvas.height/9*5);
    _ctx.font = `${_canvas.width/10}px sans-serif`;
    _ctx.textBaseline = "bottom";
    _ctx.textAlign = "left";
    _ctx.fillText(`${_t}`,_canvas.width/2,_canvas.height/9*5);
    _ctx.globalAlpha = 1;
}

const drawContinueMessage = (_canvas: HTMLCanvasElement, _ctx: CanvasRenderingContext2D, _dt: number) => {
    _ctx.globalAlpha = 0.04 * Math.min(25,_dt);
    _ctx.fillStyle = colors.black;
    _ctx.font = `${_canvas.width/20}px sans-serif`;
    _ctx.textBaseline = "middle";
    _ctx.textAlign = "center";
    _ctx.fillText("- tap to continue -",_canvas.width/2,_canvas.height/6*5);
    _ctx.globalAlpha = 1;
}

const showResult = (
    _canvas: HTMLCanvasElement,
    _ctx: CanvasRenderingContext2D,
    _time: number,
    _player: Player,
    _ground: Ground,
    _trees: Tree[],
    _rocks: Rock[]
) => {
    const removeEvent = () => {
        _canvas.removeEventListener("click", removeClickEvent);
        _canvas.removeEventListener("touchstart", removeTouchEvent);
        window.removeEventListener("keydown", removeKeyEvent);
        let index = 0;
        const disappearid = setInterval(()=>{
            defaultDraw(_canvas,_ctx,_ground,_player,_rocks,_trees);
            drawResultScreen(_canvas,_ctx,50 - index * 2);
            drawResultScore(_canvas,_ctx,25 - index,_time);
            drawContinueMessage(_canvas,_ctx,25 - index);
            drawScore
            if (index > 24) {
                clearInterval(disappearid);
            }
            index++;
        }, 20)
        setTimeout(() => {
            run(_canvas,_ctx);
        }, 700);
    }
    const removeClickEvent = () => {
        removeEvent();
    }
    const removeTouchEvent = () => {
        removeEvent();
    }
    const removeKeyEvent = (e:KeyboardEvent) => {
        if (e.key===" ") {
            removeEvent();
        }
    }

    let dt = 0;
    const intervalid = setInterval(() => {
        defaultDraw(_canvas,_ctx,_ground,_player,_rocks,_trees,dt);
        drawResultScreen(_canvas,_ctx,dt);
        if (dt > 60) {
            drawResultScore(_canvas,_ctx,dt-60,_time);
        }
        if (dt > 95) {
            drawContinueMessage(_canvas,_ctx,dt-95);
        }
        if(dt > 130) {
            _canvas.addEventListener("touchstart", removeTouchEvent);
            _canvas.addEventListener("click", removeClickEvent);
            window.addEventListener("keydown", removeKeyEvent);
            clearInterval(intervalid);
        }
        dt++;
    }, 20);
}

export default showResult;