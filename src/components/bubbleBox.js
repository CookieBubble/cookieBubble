import React from 'react';


const modal = (props) => {
    return (
        <div>
            <div className={`bubbleBox ${props.show ? 'open' : ''}`}>
                <div className="overlay" onClick={props.close}></div>
                <div className="bubbleBox-container">
                    <button className="close-btn" onClick={props.close}><span></span></button>
                    <div>
                        <h2>Your Configuration Is Ready!</h2>
                        {props.children}  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default modal;
