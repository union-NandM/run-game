const resizeCanvas = (canvas : HTMLCanvasElement, container : HTMLElement) => {
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
}

export default resizeCanvas;