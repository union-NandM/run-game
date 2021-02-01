const drawScore = (_canvas : HTMLCanvasElement, _ctx : CanvasRenderingContext2D, _t : number, _color : string) => {
    _ctx.fillStyle = _color; // silver
    _ctx.font = `${_canvas.width/20}px sanserif`;
    _ctx.textBaseline = "top";
    _ctx.textAlign = "right";

    _ctx.fillText(`${_t}`, _canvas.width -10, 10);
}

export default drawScore;