import { useState } from "react"
import "./tic_tac.css"
function TicTac() {
    var lastVal = "X", nextVal = "O";
    function Box() {
        const [state, setState] = useState(" ");
        function changeState() {
            setState(lastVal)
            let value = lastVal
            lastVal = nextVal
            nextVal = value
        }
        let color;
        if (state === "X") {
            color = "rgb(28, 102, 150)"
        }
        else if (state === "O") {
            color = "#c52828"
        }
        return (
            <div className="box">
                <button onClick={changeState} style={{
                    color: color
                }}>{state}</button>
            </div>
        )
    }
    function Board() {
        var boxes = [];
        for (let i = 0; i < 9; i++) {
            boxes.push(<Box key={i} />)
        }
        return boxes
    }
    return (
        <div className="Game">
            <div className="container">
                <Board />
            </div>
        </div>
    )
}


export default function TicTacBoard() {
    return (
        <div className="main">
            <div className="header">
                <p>Play</p> <p className="tic">Tic</p><p className="tac">Tac</p><p className="toe">Toe</p>
            </div>
            <TicTac />
        </div>
    )
}