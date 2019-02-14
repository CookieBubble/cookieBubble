import React, { Component } from 'react';
import AdSense from 'react-adsense';

class morphHeader extends Component {
    constructor(props) {
        super(props)
        this.state = { isActive: true };
    }

    componentDidMount() {


        function morph_function_calc() {
            const msText = document.querySelector('.mc-text');
            const msTextHeight = msText.clientHeight;
            const msTextWidth = msText.clientWidth;

            const morphContainer = document.querySelector('.morph-container');
            const morphContainerHeight = morphContainer.clientHeight;
            const morphContainerWidth = morphContainer.clientWidth;

            
            msText.style.left = (morphContainerWidth / 2) - (msTextWidth / 2) + 'px';
            msText.style.top = (morphContainerHeight / 2) - (msTextHeight / 2) + 'px';

        }

        morph_function_calc();
        window.addEventListener("resize", function () {
            morph_function_calc();
        });


            let carbon_wrapper = document.querySelector('.carbon-add');

            const script = document.createElement("script");

            script.src = "//cdn.carbonads.com/carbon.js?serve=CK7DLK3E&placement=joaopereirawdgithubio";
            script.async = true;
            script.id =  "_carbonads_js"

            carbon_wrapper.appendChild(script);
            
        
    }

    ToggleClass = (e) => {
        this.setState({ isActive: !this.state.isActive })
    }

    render() {
        return (
            <div className="morph-container">
                <div className="mc-text">
                    <h1>
                        <span>The easy way to inform users that your website is using cookies. </span>
                    </h1>
                    <button className="btn-custom" onClick={() => document.querySelector('.menu-wrapper').click() }>Customize now</button>
                    <div class="carbon-add"></div>
                    <AdSense.Google
                        client='ca-pub-3361505348838569'
                        slot='7806394673'
                    />
                </div>
                <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 1364 600">
                    <style jsx>{`
                        .st0 {
                            fill:#fda428 !important; 
                        `}</style>
                    <path class="st0" d="M1364,525.8l-573,67.8c-71.7,8.5-144.4,8.5-216.1,0L0,525.8V0h1364V525.8z" />
                </svg>

            </div>

        );
    }
}

export default morphHeader;


