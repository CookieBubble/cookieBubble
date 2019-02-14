import React, { Component } from 'react';

class carbonAds extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            carbonUrl: this.props.carbonUrl
        };
    }

    componentDidMount() {
        const carbon_wrapper = document.querySelector('.carbon-adds-wrapper');
        const script = document.createElement("script");
        script.src = this.state.carbonUrl;
        script.async = true;
        script.id =  "_carbonads_js"
        carbon_wrapper.appendChild(script);
    }

    render() {
        return (
            <div className="carbon-adds-wrapper"></div>
        );
    }
}

export default carbonAds;


