interface Item {
    height: number;
    width: number;
    top: number;
    bottom: number;
    left: number;
    right: number;
    color: string;
    draw(_ctx: CanvasRenderingContext2D): void;
}

export default Item;