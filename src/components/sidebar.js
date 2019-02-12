import React, { Component } from 'react';
import reactCSS from 'reactcss'
import { ChromePicker } from 'react-color'
import Reward from 'react-rewards';
import Modal from './bubbleBox.js';
import Clipboard from 'react-clipboard.js';

class sideMenu extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            LiveTryButton:false,
            ModalVisibility: false,
            sideBarOpen: false,
            isIcon:true,
            rangeInitState:17,
            color: 'red',

            //Message 
            messageText:'We use cookies to personalize your experience. By continuing to visit this website you agree to our use of cookies.',
            m_displayColorPicker: false,
            m_color: {
                r: '0',
                g: '0',
                b: '0',
                a: '1',
            },

            //icon Config
            i_displayColorPicker: false,
            i_color: {
                r: '19',
                g: '154',
                b: '241',
                a: '1',
            },
            
            //Button Config
            buttonText: 'Got It',
            b_displayColorPicker: false,
            b_color: {
                r: '19',
                g: '154',
                b: '241',
                a: '1',
            },

            //Cookie Policy 
            cookiePolicyText: 'Read our cookie Policy',
            cookiePolicyUrl:  'http://allaboutcookies.org',
            cookiePolicyBlankTarget: true,

            //Box Position 
            boxPosition:'bottom-left',

            //Export Settings 
            exportType:'react'

        };

        //Binding functions
        this.button_TextHandle = this.button_TextHandle.bind(this);
        this.messageTextSize = this.messageTextSize.bind(this);
        this.iconVisibility = this.iconVisibility.bind(this);
        this.message_TextHandle  = this.message_TextHandle.bind(this);
        this.cookiePolicy_TextHandle = this.cookiePolicy_TextHandle.bind(this);
        this.cookiePolicy_urlHandle = this.cookiePolicy_urlHandle.bind(this);
        this.cookiePolicy_targetHandle = this.cookiePolicy_targetHandle.bind(this);
        this.cb_boxPosition = this.cb_boxPosition.bind(this);
        this.exportSettings = this.exportSettings.bind(this);
        this.liveTry_handleClick = this.liveTry_handleClick.bind(this);
    }



    sideBarToggle = (e) => {
        this.setState({ sideBarOpen: !this.state.sideBarOpen })
    }
    /****************************+
     *
     *  Live Try HandleClick
     *
     ****************************/
    liveTry_handleClick = () => {
        this.setState({ LiveTryButton: !this.state.LiveTryButton })
    };
    /****************************+
     *
     *  Text Size Range 
     *
     ****************************/
    messageTextSize(event) {
        this.setState({ rangeInitState: event.target.value });
    }
    message_TextHandle(event) {
        this.setState({ messageText: event.target.value });
    }
    message_handleClick = () => {
        this.setState({ m_displayColorPicker: !this.state.m_displayColorPicker })
    };

    message_handleClose = () => {
        this.setState({ m_displayColorPicker: false })
    };

    message_handleChange = (m_color) => {
        this.setState({ m_color: m_color.rgb })
    };
    /****************************+
     * 
     *  Dismiss Button
     * 
     ****************************/
    button_TextHandle(event) {
        this.setState({ buttonText: event.target.value });
    }

    button_handleClick = () => {
        this.setState({ b_displayColorPicker: !this.state.b_displayColorPicker })
    };

    button_handleClose = () => {
        this.setState({ b_displayColorPicker: false })
    };

    button_handleChange = (b_color) => {
        this.setState({ b_color: b_color.rgb })
    };


    /****************************+
     * 
     *  Icon
     * 
     ****************************/
    iconVisibility(event) {
        this.setState({ isIcon: event.target.value });
    }
    icon_handleClick = () => {
        this.setState({ i_displayColorPicker: !this.state.i_displayColorPicker })
    };

    icon_handleClose = () => {
        this.setState({ i_displayColorPicker: false })
    };

    icon_handleChange = (i_color) => {
        this.setState({ i_color: i_color.rgb })
    };

    /****************************+
     *
     * Box Position
     *
     ****************************/
    cb_boxPosition(event) {
        this.setState({ boxPosition: event.target.value });
    }

    /****************************+
     *
     *  Cookie Policy
     *
     ****************************/
    cookiePolicy_TextHandle(event) {
        this.setState({ cookiePolicyText: event.target.value });
    }
    cookiePolicy_urlHandle(event) {
        this.setState({ cookiePolicyUrl: event.target.value });
    }
    cookiePolicy_targetHandle(event) {
        this.setState({ cookiePolicyBlankTarget: event.target.value });
    }

    /****************************+
     *
     *  Export Settings
     *
     ****************************/
    exportSettings(event) {
        this.setState({ exportType: event.target.value });
    }

    /****************************+
     *
     *  Modal Cnf.
     *
     ****************************/
    openModalHandler = () => {
        this.reward.rewardMe();
        setTimeout(
            function () {
                this.setState({
                    ModalVisibility: true
                });
            }.bind(this), 1000);

    }

    closeModalHandler = () => {
        this.setState({
            ModalVisibility: false
        });
        this.setState({ LiveTryButton: false })
    }

 

    render() {
   
        const sidebar_state = this.state.sideBarOpen;
        let body = document.querySelector('body');
        sidebar_state ? body.classList.add("no-scroll", "blurred") : body.classList.remove("blurred", "no-scroll");   


        const styles = reactCSS({
            'default': {
                color: {
                    borderRadius: '50px',
                    padding:'12px',
                    background: `rgba(${this.state.b_color.r}, ${this.state.b_color.g}, ${this.state.b_color.b}, ${this.state.b_color.a})`,
                },


                buttonColor: {
                    background: `rgba(${this.state.b_color.r}, ${this.state.b_color.g}, ${this.state.b_color.b}, ${this.state.b_color.a})`,
                    fontSize: this.state.rangeInitState - 4 + 'px'
                },
                // Icon Conf
                i_color: {
                    borderRadius: '50px',
                    padding: '12px',
                    background: `rgba(${this.state.i_color.r}, ${this.state.i_color.g}, ${this.state.i_color.b}, ${this.state.i_color.a})`,
                },
                //Message
                m_color: {
                    borderRadius: '50px',
                    padding: '12px',
                    background: `rgba(${this.state.m_color.r}, ${this.state.m_color.g}, ${this.state.m_color.b}, ${this.state.m_color.a})`,
                },
                m_textColor: {
                    color: `rgba(${this.state.m_color.r}, ${this.state.m_color.g}, ${this.state.m_color.b}, ${this.state.m_color.a})`,
                },
        
                i_fill: {
                    fill: `rgba(${this.state.i_color.r}, ${this.state.i_color.g}, ${this.state.i_color.b}, ${this.state.i_color.a})`,
                },
            },
        });
      
        const Icon = (props) => {
            return (
                <div className={`cb-image ${this.state.isIcon}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.93 97.93" >
                        <defs>
                            <style jsx>{`
                                .cookie-inner-color {
                                    fill:${ styles.i_fill.fill } !important; 
                                }
                            `}</style> 
                        </defs>
                        <g id="Layer_2" data-name="Layer 2">
                            <g id="Layer_1-2" data-name="Layer 1">
                                <path d="M44,23.76a2.47,2.47,0,1,0,.91,3.37A2.47,2.47,0,0,0,44,23.76Z" />
                                <path d="M25.9,40.32a2.47,2.47,0,0,0,0,4.93h0a2.47,2.47,0,1,0,0-4.93Z" />
                                <circle cx="32.08" cy="65.86" r="2.47" />
                                <path d="M56.38,69.91a2.47,2.47,0,1,0,1.14,1.49A2.47,2.47,0,0,0,56.38,69.91Z" />
                                <path d="M72,52.68a2.47,2.47,0,0,0-2.38,1.83,2.44,2.44,0,0,0,.25,1.87,2.47,2.47,0,0,0,4.52-.59,2.44,2.44,0,0,0-.25-1.87A2.47,2.47,0,0,0,72,52.68Z" />
                                <path className="cookie-inner-color" d="M89.51,52.86A14,14,0,0,1,81,47.2,14.09,14.09,0,0,1,61,35.68,14.09,14.09,0,0,1,49.49,15.73a14,14,0,0,1-5.66-8.55,44,44,0,0,0-21.09,6.15A44.26,44.26,0,0,0,71.46,87.08,44.24,44.24,0,0,0,89.51,52.86ZM28.28,43.42a2.47,2.47,0,0,1-2.38,1.83h0a2.47,2.47,0,1,1,2.38-1.83Zm3.8,24.9a2.47,2.47,0,1,1,2.47-2.47A2.47,2.47,0,0,1,32.08,68.32ZM44.92,27.13A2.47,2.47,0,1,1,44,23.76,2.47,2.47,0,0,1,44.92,27.13ZM57.28,73.27a2.47,2.47,0,1,1-.9-3.36,2.47,2.47,0,0,1,.9,3.36ZM74.42,55.79a2.47,2.47,0,1,1-.25-1.87A2.45,2.45,0,0,1,74.42,55.79Z" />
                                <path d="M97.93,48.52v-.2A2.35,2.35,0,0,0,95.7,46a9.37,9.37,0,0,1-8-5.45,2.35,2.35,0,0,0-3.49-.93,9.51,9.51,0,0,1-5.44,1.72A9.4,9.4,0,0,1,69.39,31.1a2.35,2.35,0,0,0-2.55-2.55c-.28,0-.57,0-.85,0a9.39,9.39,0,0,1-7.68-14.81,2.35,2.35,0,0,0-.93-3.49,9.37,9.37,0,0,1-5.45-8A2.35,2.35,0,0,0,49.61,0H49a49,49,0,1,0,49,49C97.93,48.82,97.93,48.67,97.93,48.52ZM71.46,87.08A44.26,44.26,0,0,1,22.74,13.33,44,44,0,0,1,47.53,4.72a14,14,0,0,0,5.66,8.55A14.09,14.09,0,0,0,64.71,33.22,14.09,14.09,0,0,0,84.66,44.75a14,14,0,0,0,8.56,5.66A44.3,44.3,0,0,1,71.46,87.08Z" />
                            </g>
                        </g>
                    </svg>
                </div>
            );
        }

        const Signature = (props) => {
            return (
                <div className="copyright-wrapper">
                    <a className="copyright" href="/"></a>
                </div>
            );
        }
        



    
 


        
        const LiveTry = (props) => {
            return (
                <div>
                    {this.state.exportType != 'react' ? (
                        <a href='https://codepen.io/joaopereirawd/pen/pKpYpE' target="_blank" className='codepen-button'>
                            <span>Try On CodePen</span>
                        </a>
                    ) : (
                        <a href='https://codesandbox.io/s/mqrnlo852y' target="_blank" className='codesandbox-button'>
                            <span>Try on CodeSandbox</span>
                        </a>
                    )}
                </div>
            );
        }

   
        const CodeExports = (props) => {
            let division;
            let first_line;
            let last_line;
            let bool_true;
            let bool_false;
            let comma;
            let ex_type = this.state.exportType;

            if (ex_type != 'react'){
                first_line = '{'
                last_line = '}'
                division = ':'
                bool_true = 'true'
                bool_false = 'false'
                comma =','
            } else {
                first_line = '<CookieBubble'
                last_line = '/>'
                division = '='
                bool_true = '{true}'
                bool_false = '{false}'
                comma =''
            }


            return (
                <div>
                    <div className="code-content">
                        <code>
                            {first_line}<br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="c_blue">messageTextColor{division}</span>'{styles.m_textColor.color}'{comma}<br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="c_blue">buttonText{division}</span>'{this.state.buttonText}'{comma} <br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="c_blue">messageFontSize{division}</span>'{this.state.rangeInitState}px'{comma}<br></br>
                            {this.state.isIcon != 'false' ? (
                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="c_blue">iconColor{division}</span>'{styles.i_color.background}'{comma}<br></br>
                                </div>
                            ): ('')}
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="c_blue">buttonColor{division}</span>'{styles.buttonColor.background}'{comma}<br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="c_blue">iconVisibility{division}</span>{this.state.isIcon != 'false' ? bool_true : bool_false}{comma}<br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="c_blue">cookiePolicyButtonText{division}</span>'{this.state.cookiePolicyText}'{comma}<br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="c_blue">cookiePolicyButtonUrl{division}</span>'{this.state.cookiePolicyUrl}'{comma}<br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="c_blue">cookiePolicyButtonTarget{division}</span>'{this.state.cookiePolicyBlankTarget != 'false' ? '_blank' : '_self'}'{comma}<br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="c_blue">boxPosition{division}</span>'{this.state.boxPosition}'{comma}<br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="c_blue">messageText{division}</span>'{this.state.messageText}'<br></br>
                            {last_line}<br></br>
                        </code>
                    </div>

                    <div className="modal-controllers">
                        <Clipboard data-clipboard-text={`
                            ${first_line}
                            messageTextColor${division}'${styles.m_textColor.color}'${comma}
                            buttonText${division}'${this.state.buttonText}'${comma}
                            messageFontSize${division}'${this.state.rangeInitState}'${comma}
                            iconColor${division}'${styles.i_color.background}'${comma}
                            buttonColor${division}'${styles.buttonColor.background}'${comma}
                            iconVisibility${division}${this.state.isIcon != 'false' ? bool_true : bool_false}${comma}
                            cookiePolicyButtonText${division}'${this.state.cookiePolicyText}'${comma}
                            cookiePolicyButtonUrl${division}'${this.state.cookiePolicyUrl}'${comma}
                            cookiePolicyButtonTarget${division}'${this.state.cookiePolicyBlankTarget != 'false' ? '_blank' : '_self'}'${comma}
                            boxPosition${division}'${this.state.boxPosition}'${comma}
                            messageText${division}'${this.state.messageText}'${comma}
                            ${last_line}`}
                            onSuccess={this.liveTry_handleClick}
                            className="copy-button">
                            <span>Copy to clipboard</span>
                        </Clipboard> 
                        
                        {this.state.LiveTryButton ? <LiveTry /> : ''}
                        
              
                    </div>
                </div>
            );
        }

        return (
            <div className="sidebar-panel">

                <div className={`side-menu ${(this.state.sideBarOpen) ? 'active' : 'desactive'}`} onClick={this.sideBarToggle} >
                    <div className={`menu-wrapper ${(this.state.sideBarOpen) ? 'active' : 'desactive'}`} onClick={this.sideBarToggle}>
                        <div className="setting-balls">
                            <span className="ball1"></span>
                            <span className="ball2"></span>
                            <span className="ball3"></span>
                        </div>
                        <div className={`hamburger-menu ${(this.state.sideBarOpen) ? 'animate' : 'desactive'}`} onClick={this.sideBarToggle}></div>	  
                    </div>
                </div>
                <div className={`sidebar ${(this.state.sideBarOpen) ? 'active' : 'desactive'}`}  >
                    <div className={
                            `sidebar-container ${
                                    this.state.boxPosition === 'bottom-right' ? 'sc-padding-bottom' : this.state.boxPosition === 'top-right' ? 'sc-padding-top' : ''
                                }`
                        }>
                        <h1>Settings</h1>
                        <section className="theme-cnf">
                            <div className="default-themes container">
                                <div className="row">

                                    <form>
                                        <div className="fieldset">
                                            <h6>General</h6>
                                            <div className="row">
                                                <div className="col-sm-12 col-md-12 col-lg-12 new-feature">
                                                    <div className="form-group">
                                                        <label for="select">Position:</label>
                                                        <select className="form-control" id="select" value={this.state.boxPosition} onChange={this.cb_boxPosition}>
                                                            <option value='bottom-left'>bottom-left</option>
                                                            <option value='bottom-center'>bottom-center</option>
                                                            <option value='bottom-right'>bottom-right</option>
                                                            <option value='top-left'>top-left</option>
                                                            <option value='top-center'>top-center</option>
                                                            <option value='top-right'>top-right</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-sm-12 col-md-12 col-lg-12">
                                                    <div className="form-group">
                                                        <label for="select">Icon Visibility:</label>
                                                        <select className="form-control" id="select" value={this.state.isIcon} onChange={this.iconVisibility}>
                                                            <option value={true}>True</option>
                                                            <option value={false}>False</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-sm-12 col-md-12 col-lg-12">
                                                    <div className="form-group">
                                                        <label>Font Size:</label>
                                                        <input className="form-control"
                                                            type="range"
                                                            min="13" max="18"
                                                            value={this.state.rangeInitState}
                                                            onChange={this.messageTextSize}
                                                            step="1" />
                                                    </div>
                                                </div>                                            
                                            </div>

                                        </div>

                                        <div className="fieldset">
                                            <h6>Colors</h6>
                                            <div className="row">
                                                
                                                <div className="col-sm-12 col-md-12 col-lg-12" style={{ display: this.state.isIcon === 'false' ? 'none' : ''}}>
                                                    <div className="form-group color-group">

                                                        <div className="popButton" className="swatch-ball" onClick={this.icon_handleClick}>
                                                            <div style={styles.i_color} />
                                                        </div>

                                                        {this.state.i_displayColorPicker ? <div className="popover">
                                                            <div  className="popover-close-area" onClick={this.icon_handleClose} />
                                                            <ChromePicker color={this.state.i_color} onChange={this.icon_handleChange} />
                                                        </div> : null}
                                                        <label>Icon Color</label>
                                                    </div>
                                                </div>

                                                <div className="col-sm-12 col-md-12 col-lg-12">
                                                    <div className="form-group color-group">
                                                        <div className="swatch-ball" onClick={this.button_handleClick}>
                                                            <div style={styles.color} />
                                                        </div>
                                                        {this.state.b_displayColorPicker ? <div className="popover">
                                                            <div className="popover-close-area" onClick={this.button_handleClose} />
                                                            <ChromePicker color={this.state.b_color} onChange={this.button_handleChange} />
                                                        </div> : null}
                                                        <label> Dismiss Button</label>
                                                    </div>
                                                </div>

                                                <div className="col-sm-12 col-md-12 col-lg-12">
                                                    <div className="form-group color-group">
                                                        <div className="swatch-ball" onClick={this.message_handleClick}>
                                                            <div style={styles.m_color} />
                                                        </div>
                                                        {this.state.m_displayColorPicker ? <div className="popover">
                                                            <div className="popover-close-area" onClick={this.message_handleClose} />
                                                            <ChromePicker color={this.state.m_color} onChange={this.message_handleChange} />
                                                        </div> : null}
                                                        <label>Message</label>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>



                                        <div className="fieldset">
                                        
                                            <h6>Custom Text</h6>

                                            <div className="row">

                                                <div className="col-sm-12 col-md-12 col-lg-12">
                                                    <div className="form-group">
                                                        <label>Message</label>
                                                        <textarea className="form-control" rows="5" value={this.state.messageText} maxlength="145" onChange={this.message_TextHandle}></textarea>
                                                    </div>
                                                </div>

                                                <div className="col-sm-12 col-md-12 col-lg-12">
                                                    <div className="form-group">
                                                        <label>Dismiss button</label>
                                                        <input className="form-control" type="text" maxlength="10" value={this.state.buttonText} onChange={this.button_TextHandle}></input>
                                                    </div>
                                                </div>


                                                <div className="col-sm-12 col-md-12 col-lg-12">
                                                    <div className="form-group">
                                                        <label>Cookie Policy</label>
                                                        <input className="form-control" type="text" maxlength="22" value={this.state.cookiePolicyText} onChange={this.cookiePolicy_TextHandle}></input>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                               

                                        <div className="fieldset">
                                            <h6>Cookie Policy</h6>
                             
                                            <div className="row">
                                                <div className="col col-sm-12 col-md-12 col-lg-12">
                                                    <div className="form-group">
                                                        <label>URL</label>
                                                        <input className="form-control" type="text" maxlength="22" value={this.state.cookiePolicyUrl} onChange={this.cookiePolicy_urlHandle}></input>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col col-sm-12 col-md-12 col-lg-12">
                                                    <div className="form-group">
                                                        <label for="select">Target:</label>
                                                        <span className="tag">new</span>
                                                        <select className="form-control" id="select" value={this.state.cookiePolicyBlankTarget} onChange={this.cookiePolicy_targetHandle}>
                                                            <option value="true">_blank</option>
                                                            <option value="false">_self</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div> 

                                        </div>
                            
                                       <div className="row">
                                            <div className="col">
                                                <div class="submit-options">
                                                    <div className="form-group">
                                                        <label for="export_type">Export as:</label>
                                                        <select className="form-control" id="export_type" value={this.state.exportType}  onChange={this.exportSettings}>
                                                            <option value="react">react.js Component</option>
                                                            <option value="jquery">jQuery Plugin</option>
                                                        </select>
                                                    </div>
                                          
                                                    <Reward
                                                        ref={(ref) => { this.reward = ref }}
                                                        type='confetti'
                                                        elementSize={20}
                                                    > 
                                                        <button type="button" onClick={this.openModalHandler} className="submit-button">Export Settings <span className="icon-export"></span></button>

                                                    </Reward>
                                                   
                                                </div>
                                            </div>
                                       </div>

                                    </form>
                                </div>
                            </div>                         
                        </section>
                    </div>
                </div>
               
                <div className={`cookie-bubble show ${this.state.boxPosition}`}>
                    <div className="cb-wrapper">
                        <div className="cb-row">
                            {this.state.isIcon ? <Icon /> : ''}
                            <div className="cb-row-content">
                                <span className="message" style={{ fontSize: this.state.rangeInitState + 'px', color: styles.m_textColor.color }} >{this.state.messageText}</span>
                                <div className="cb-controls">
                                    <button className="agreement-btn" style={styles.buttonColor} >{this.state.buttonText}</button>
                                    <a className="cookie-policy-btn" style={{ fontSize: this.state.rangeInitState - 1 + 'px'}} href={this.state.cookiePolicyUrl} target={this.state.cookiePolicyBlankTarget == 'true' ? '_blank' : '' }>{this.state.cookiePolicyText}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Signature/>
                </div>

                <Modal
                    className="modal"
                    show={this.state.ModalVisibility}
                    close={this.closeModalHandler}>
                    <div className="code-column">
                        <div>
                            <div className="code-wrapper">
                                <CodeExports />
                            </div>
                        </div>
                    </div>
                </Modal>


            </div>

        );
    }
}

export default sideMenu;




/**{this.state.export && this.state.exportType ==='react' ? <BubbleBox /> : this.readyForExport}
 */