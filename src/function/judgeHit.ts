import { Player, Rock } from "../index";

const judgeHit = (_p : Player, _r : Rock) => {
    return [
        ((_p.right > _r.left && _p.left < _r.left) || (_r.right > _p.left && _r.left < _p.left)),
        ((_p.bottom > _r.top && _p.top < _r.top) || (_r.bottom > _p.top && _r.top < _p.top))
    ];
}
export default judgeHit;