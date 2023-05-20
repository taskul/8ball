import { useState } from "react";
import './ColorBox.css'

const ColorBox = ({color}) => {
    return (
        <div className="ColorBox">
            <div className="ColorBox_light" style={{background: `radial-gradient(${color}, #111114)`}}></div>
        </div>
    )
}

export default ColorBox;
