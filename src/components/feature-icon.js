import React, { Component } from 'react';


class featureIcon extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            img: this.props.imgUrl,
            title: this.props.title,
            desc: this.props.description,
            btnText: this.props.buttonText,
            btnUrl: this.props.buttonUrl,
            openSideBar: this.props.openSideBar
        };
    }
    
    ToggleClass = (e) => {
        this.setState({ isActive: !this.state.isActive })
    }

    render() {

        function openSidebar() {
            document.querySelector('.menu-wrapper').click();
        }


        return (
            <div className="sf-container">
                <div className="sfc-icon">
                    <img src={this.state.img} />
                </div>
                <div className="sfc-title">
                    <h3>{this.state.title}</h3>
                </div>
                <div className="sfc-desc">
                    <p>{this.state.desc}</p>
                </div>
                <div className="sfc-button" onClick={() => this.state.openSideBar ? openSidebar() : '' }>
                    <a target="_blank" href={this.state.btnUrl}>{this.state.btnText}</a>
                </div>
            </div>
        );
    }
}

export default featureIcon;


