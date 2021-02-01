const resetCanvas = (canvas : HTMLCanvasElement,ctx : CanvasRenderingContext2D, color : string) => {
    ctx.fillStyle = color; // whitesmoke
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

export default resetCanvas;