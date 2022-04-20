import React from 'react';
import "./Theme.css";

export const Theme = () => {
    
    return (
        <div className="theme">
            <div className="choose-text">
                    Chose Theme: 
            </div>
            <div className="theme-selector">
                <input type="color" name="color1" value="#7ee8fa"/>
                <input type="color" name="color2" className="input-two" value="#eec0c6"/>
                         
           </div>
        </div>
    )
}
export default Theme; 