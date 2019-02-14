import React, { Component } from 'react';

class carbonAds extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            carbonWrapper:this.props.carbonWrapper,
            carbonUrl: this.props.carbonUrl,
            aSync:true
        };
    }

    componentDidMount() {
        const carbon_wrapper = document.querySelector(`.${this.state.carbonWrapper ? this.state.carbonWrapper : 'carbon-adds-wrapper'}`);
        const script = document.createElement("script");
        script.src = this.state.carbonUrl;
        script.async = this.state.aSync;
        script.id =  "_carbonads_js"
        carbon_wrapper.appendChild(script);
    }

    render() {
        return (
            <div className={this.state.carbonWrapper ? this.state.carbonWrapper : 'carbon-adds-wrapper'}></div>
        );
    }
}

export default carbonAds;


