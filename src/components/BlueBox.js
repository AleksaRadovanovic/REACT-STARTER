import React, { useState } from 'react'

export default function BlueBox(props) {
    const [count, setCount] = useState(0);

    const onBoxClick = () => {
        setCount(count + 1);
    }

    return (
        <div className='blue-box' onClick={onBoxClick} style={{ width: props.width, height: props.height, margin: 10}}>
            <span style={{ color: 'white'}}>
                {props.text} ({count})
            </span>
        </div>
    )
}
