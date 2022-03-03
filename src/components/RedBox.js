import React, { useState } from 'react'
import BlueBox from './BlueBox'

export default function RedBox() {
    const [isRow, setIsRow] = useState(false);

    const changeDisplay = () => {
        setIsRow(!isRow);
    }

    const getButtonText = () => {
        let text = '';
        
        if(isRow == true){
            text = 'Change to column';
        }
        else {
            text = 'Change to row';
        }

        return text;
    }

    return (
        <div style={{ backgroundColor: 'red', width: 1000, height: 500, margin: 100, padding: 50}}>
            <button onClick={changeDisplay} >
                {getButtonText()}
            </button>

            <div style={{ display: isRow ? 'flex' : 'block'}}>
                <BlueBox  
                    width={100} 
                    height={100}
                    text="First"
                />
                <BlueBox  
                    width={120}  
                    height={50}  
                    text="Second"
                />
                <BlueBox  
                    width={200} 
                    height={100} 
                    text="Third"
                />
            </div>
        </div>
    )
}
