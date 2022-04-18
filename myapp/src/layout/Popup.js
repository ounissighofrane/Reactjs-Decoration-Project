import React from 'react'
import '../App.css'
export const Popup = (props) => {
    return (props.trigger) ? (
        <div className="popup">
            <div>
                <button className="close-btn" onClick={()=>props.setTrigger(false)}>close</button>
                 { props.children }
            </div>
        </div>
    ) :"";
}
export default Popup
