type Piece = {
    x:number,
    y:number
}
type Row = Array<boolean>
type Display = Array<Row>

const dData: Display = [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
]
const dot: Piece = {x:2, y:0}

function refresh(display: Display, dot: Piece): void {
    for (let y: number = 0; y <=4; y++){
        for (let x: number = 0; x <=4; x++){
            if (display[y][x]){
            led.plot(x, y)
            }
            else {
                led.unplot(x, y)
            }
            led.plot(dot.x, dot.y)
        }
    }
}
refresh(dData, dot)

loops.everyInterval(1000, function() {
    dot.y ++;
    if(dot.y > 4) {
        dot.y = 0
    }

    refresh(dData, dot)
})
input.onButtonPressed(Button.A, function() {
    if (dot.x > 0){
        dot.x --;
    }
    refresh(dData, dot)
})
input.onButtonPressed(Button.B, function () {
if (dot.x < 4){
    dot.x ++;
}
    refresh(dData, dot)
})