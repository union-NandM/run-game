import defaultDraw from "./defaultDraw";
import {
    colors,
    Ground,
    Player,
    Rock,
    Tree,
    drawScore,
    judgeHit,
    resetCanvas,
    showResult,
} from "../index";


const run = (_canvas: HTMLCanvasElement, _ctx: CanvasRenderingContext2D) => {
    
    let isPlaying = false;
    let rockInterval = 50;
    let treeInterval = 0;
    const ground = new Ground(_canvas);
    const player = new Player(_canvas,ground);
    let rocks: Rock[] = [];
    let trees: Tree[] = [];
    for (let i = 0; i < 80; i++) {   
        if (treeInterval === 0) {
            const rand = Math.random() * 100;
            if (rand < 5) {
                treeInterval = 30;
                if (rand < 3) {
                    trees.push(new Tree(_canvas,ground,0,colors.treegreen1,i/80*_canvas.width));
                } else {
                    trees.push(new Tree(_canvas,ground,0,colors.treegreen2,i/80*_canvas.width));
                }
            }
        } else {
            treeInterval--;
        }
    }
    let time = 0;
    let preJudgement = [false,false];
    
    const touchEvent =  (e: TouchEvent) => {
        e.preventDefault();
        if (player.isGrounded) {
            player.vy += _canvas.width/40*1.1;
            player.isGrounded = false;
        }
    }
    const clickEvent = () => {
        if (player.isGrounded) {
            player.vy += _canvas.width/40*1.1;
            player.isGrounded = false;
        }
    }
    const keyEvent =  (e: KeyboardEvent) => {   
        if (e.key === " ") {
            if (player.isGrounded) {
                player.vy += _canvas.width/40*1.1;
                player.isGrounded = false;
            }
        }
    }

    const prepare = (rev:boolean, _dt=-1) => {
        if (_dt===-1) {
            defaultDraw(_canvas,_ctx,ground,player,rocks,trees);
            _ctx.fillStyle = colors.black;
            _ctx.font = `${_canvas.width/20}px sans-serif`;
            _ctx.textBaseline = "middle";
            _ctx.textAlign = "center";
            _ctx.fillText("- tap to start -",_canvas.width/2,_canvas.height/4*3);
        } else {
            defaultDraw(_canvas,_ctx,ground,player,rocks,trees,(rev?_dt:51));
            _ctx.globalAlpha = 0.02 * _dt;
            _ctx.fillStyle = colors.black;
            _ctx.font = `${_canvas.width/20 + (rev?(50-_dt):0)/3}px sans-serif`;
            _ctx.textBaseline = "middle";
            _ctx.textAlign = "center";
            _ctx.fillText("- tap to start -",_canvas.width/2,_canvas.height/6*5);
            _ctx.globalAlpha = 1;
        }
    }

    const startAndRemoveKeyEvent = (e:KeyboardEvent) => {
        if (e.key===" ") {
            start();
        }
    }

    const start = () => {
        if (!isPlaying) {
            isPlaying = true;
            _canvas.removeEventListener("touchstart",start);
            _canvas.removeEventListener("click", start);
            window.removeEventListener("keydown", startAndRemoveKeyEvent);        
            let vanishIndex = 0;
            const roopid = setInterval(() => {
                prepare(true,50-vanishIndex*2);
                vanishIndex++;
                if (vanishIndex>24) {
                    clearInterval(roopid);
                }
            }, 20);
            
            setTimeout(() => {
                _canvas.addEventListener("touchstart",touchEvent);
                _canvas.addEventListener("click", clickEvent);
                window.addEventListener("keydown", keyEvent);
                
                const intervalid = setInterval(() => {
                    if (isPlaying) {
                        trees = trees.filter(tree => tree.right > 0);
                        for (let tree of trees) {
                            tree.update(_canvas,time);
                        }
                        rocks = rocks.filter(rock => rock.right > 0);
                        const prePlayer = {
                            ...player
                        }
                        player.update(_canvas,ground);
                        for (let rock of rocks) {
                            preJudgement = judgeHit(prePlayer, rock);
                            rock.update(_canvas,time);
                            const nowJudgement = judgeHit(player, rock);
                            if (nowJudgement[0] && nowJudgement[1]) {
                                isPlaying = false;
                                player.isHit = true;
                                if (!preJudgement[0]) {
                                    player.setX(rock.left - player.width);
                                }
                                if (!preJudgement[1]) {
                                    player.setY(rock.top - player.height);
                                }
                            }
                        }
                        resetCanvas(_canvas,_ctx,colors.whitesmoke);
                        ground.draw(_ctx);
                        for (let tree of trees) {
                            tree.draw(_ctx);
                        }
                        player.draw(_ctx);
                        for (let rock of rocks) {
                            rock.draw(_ctx);
                        }
                        drawScore(_canvas,_ctx,time,colors.silver);
                        time++;
                        
                        if (treeInterval === 0) {
                            const rand = Math.random() * 100;
                            if (rand < 5) {
                                treeInterval = 30;
                                if (rand < 3) {
                                    trees.push(new Tree(_canvas,ground,time,colors.treegreen1));
                                } else {
                                    trees.push(new Tree(_canvas,ground,time,colors.treegreen2));
                                }
                            }
                        } else {
                            treeInterval--;
                        }
                        if (rockInterval === 0) {
                            const rand = Math.random() * 100;
                            if (rand < 3) {
                                rocks.push(new Rock(_canvas,time,ground));
                                rockInterval = 50;
                            }
                        } else {
                            rockInterval--;
                        }
                    } else {
                        _canvas.removeEventListener("touchstart",touchEvent);
                        _canvas.removeEventListener("click",clickEvent);
                        window.removeEventListener("keydown",keyEvent);
                        clearInterval(intervalid);
                        showResult(_canvas,_ctx,time,player,ground,trees,rocks);
                    }
                }, 20);
            }, 500);
        }
    }
    let appearIndex = 0;
    const initRoopid = setInterval(()=>{
        prepare(false,appearIndex*2);
        appearIndex++;
        if (appearIndex>24) {
            clearInterval(initRoopid);
        }
    },20);
    setTimeout(() => {
        _canvas.addEventListener("touchstart",start);
        _canvas.addEventListener("click", start);
        window.addEventListener("keydown", startAndRemoveKeyEvent);
    }, 500);
}

export default run;