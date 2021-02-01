import { Player, Rock, Tree, Ground, colors, resetCanvas } from "../index";

const defaultDraw = (
    _canvas: HTMLCanvasElement,
    _ctx: CanvasRenderingContext2D,
    _ground: Ground,
    _player: Player,
    _rocks: Rock[],
    _trees: Tree[],
    _dt=51
) => {
    resetCanvas(_canvas,_ctx,colors.whitesmoke);
    _ground.draw(_ctx);
    for (let tree of _trees) {
        tree.draw(_ctx);
    }
    for (let rock of _rocks) {
        rock.draw(_ctx);
    }
    _player.draw(_ctx);

    _ctx.globalAlpha = 0.01 * Math.min(_dt, 50);
    _ctx.fillStyle = colors.whitesmoke;
    _ctx.fillRect(0,0,_canvas.width,_canvas.height);
    _ctx.globalAlpha = 1;
}

export default defaultDraw;