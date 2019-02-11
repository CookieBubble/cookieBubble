import React from 'react';
import iconCoffee from '../img/icon-coffee.svg';


const cooffee = (props) => {
    return (
        <section className="section-coffee">
            <div className="row">
                <div className="coffee-icon">
                    <img src={iconCoffee} />
                </div>
                <div className="coffee-content">
                    <p>I drink a lot of cofees per day to make crazy things on internet.</p>
                    <p>Could you buy me a coffee?</p>
                    <div className="coffee-button">
                        <a href="https://www.buymeacoffee.com/joaopereira" target="_blank">Buy me a coffee</a>
                    </div>
                </div>

            </div>
        </section> 
    )
}

export default cooffee;


