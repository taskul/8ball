import { useState } from "react";
import './EightBall.css'

const EightBall = (props) => {
    const [displayedText, setDisplayedText] = useState('Think of a Question')
    const [color, setColor] = useState('#394867')

    const changeState = () => {
        const randIdx = Math.floor(Math.random() * props.messages.length)
        const {msg, color} = props.messages[randIdx];
        setDisplayedText(msg)
        setColor(color);
    }

    const reset = () => {
        setDisplayedText('Think of a Question')
        setColor('#394867')
    }

    return (
        <div className="EightBall">
            <div className="EightBall_ball"onClick={changeState} style={{background: `radial-gradient(${color}, #111114)`}}>
                <div className="EightBall_glare"></div>
                <p className="EightBall_text">{displayedText}</p>
                
            </div>
            <div className="EightBall_alignCenter">
            <button onClick={reset} className="EightBall_reset">Reset</button>
            </div>
        </div>
    )
}

EightBall.defaultProps = {
    messages : [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ]
}

export default EightBall;