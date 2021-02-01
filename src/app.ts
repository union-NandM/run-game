import {
    resizeCanvas,
    run,
} from "./index";

(() => {
    const canvas = <HTMLCanvasElement>document.getElementById("canvas");
    const ctx = <CanvasRenderingContext2D>canvas.getContext("2d");
    const container = <HTMLElement>document.getElementById("canvas-container");

    resizeCanvas(canvas, container);
    
    run(canvas,ctx);
})();
