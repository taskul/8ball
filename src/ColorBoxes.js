import { useState } from "react";
import ColorBox from "./ColorBox";
import './ColorBoxes.css'

const ColorBoxes = (props) => {
    const choice = (arr) => {
        const idx = Math.floor(Math.random() * arr.length);
        return arr[idx];
    }
    const [boxes, setBoxes] = useState(
        Array.from({length: props.numBoxes}, () => choice(props.colors))
    )
    
    const changeColor = (evt) => {
        let idx = Math.floor(Math.random() * props.numBoxes)

        setBoxes(boxes => {
            let boxCopy = [...boxes];
            boxCopy[idx] = choice(props.colors);
            return boxCopy;
        })
    }
    
    const colorBoxComponents = boxes.map((color, i) => <ColorBox key={i} color={color} />)
    return (
        <>
        <div className="ColorBoxes">
            {colorBoxComponents}
        </div>
        <button className="ColorBox_button" onClick={changeColor}>Change</button>
        </>
    )
}

ColorBoxes.defaultProps = {
    numBoxes:16,
    colors : [
        '#B70404',
        '#79E0EE',
        '#E57C23',
        '#F266AB',
        '#B3C890',
        '#1B9C85',
        '#19A7CE',
        '#5C469C',
        '#E06469',
        '#F79540',
        '#ADE4DB',
        '#F7D060',
        '#B2A4FF',
        '#9A208C',
        '#7149C6',
        '#B46060',
        '#79E0EE',
        '#C9EEFF',
        '#3F497F',
        '#BFACE2',
        '#FFA3FD',
        '#635985',
        '#16FF00',
        '#1F8A70',
    ]
}

export default ColorBoxes;

