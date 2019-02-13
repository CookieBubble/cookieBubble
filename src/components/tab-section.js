import React, { Component } from 'react';
import Clipboard from 'react-clipboard.js';
import PropsTable from '../components/props-table';

class tabSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reactDocs: true,
            jqueryDocs: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.jQueryDocsHandle = this.jQueryDocsHandle.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            reactDocs: !state.reactDocs
        }));
        this.setState(state => ({
            jqueryDocs: false
        }));
    }

    jQueryDocsHandle() {
        this.setState(state => ({
            jqueryDocs: !state.jqueryDocs
        }));
        this.setState(state => ({
            reactDocs: false
        }));
    }

    render() {
        return (
            <section className={`tab-section react-docs-${this.state.reactDocs} jquery-docs-${this.state.jqueryDocs}`}>

                <div className="filter-controls">
                    <button className={(this.state.reactDocs) ? 'active' : 'desactive'} onClick={this.handleClick}>Usage as React.js</button>
                    <button className={(this.state.jqueryDocs) ? 'active' : 'desactive'} onClick={this.jQueryDocsHandle}>Usage as jQuery</button>
                </div>

                <section className={`section-main react-doc ${(this.state.reactDocs) ? 'active' : 'desactive'}`}>
                    <div className="row">

                        <div className="code-column">
                            <h1>Instalation</h1>
                            <div className="code-content">
                                <code>yarn add react-cookie-bubble <br></br>or<br></br>npm i react-cookie-bubble</code>
                                <Clipboard data-clipboard-text="yarn add react-cookie-bubble" className="copy-btn"><span></span></Clipboard>                            
                            </div>
                        </div>

                        <div className="code-column">
                            <h1>Importing</h1>
                            <div className="code-content">
                                <code><span className="c_red">import</span> CookieBubble <span className="c_red">from</span> react-cookie-bubble</code>
                                <Clipboard data-clipboard-text="import CookieBubble from react-cookie-bubble" className="copy-btn"><span></span></Clipboard>
                            </div>
                        </div>

                        <div className="code-column">
                            <h1>Usage</h1>
                            <div className="code-content">
                                <code>
                                    <span className="c_mg">{'<Cookiebubble '}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="c_blue">messageTextColor=</span>"#eee"<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="c_blue">iconVisibility=</span>{'{false}'}<br></br>
                                    <span className="c_red">&nbsp;&nbsp;&nbsp;&nbsp;...</span><br></br>
                                    <span className="c_mg">{'/>'}</span>
                                </code>
                            </div>
                        </div>

                        <div className="code-column">
                            <h1>Props</h1>
                            <div className="code-content no-padding no-background">
                                <PropsTable />
                            </div>
                        </div>
                        
                    </div>
                </section>
                <section className={`section-main jquery-doc ${(this.state.jqueryDocs) ? 'active' : 'desactive'}`}>
                    <div className="row">
                        <div className="code-column">
                            <h1>Instalation</h1>
                            <div className="code-content">
                                <code>yarn add jquery-cookie-bubble<br></br>or<br></br>npm i jquery-cookie-bubble</code>
                                <Clipboard data-clipboard-text="yarn add react-cookieBubble" className="copy-btn"><span></span></Clipboard>
                            </div>
                        </div>

                        <div className="code-column">
                            <div className="code-wrapper">
                                <p>Include <b>cookieBubble.min.css</b> somewhere in your head tag</p>
                                <div className="code-content">
                                    <code>
                                        <span className="c_mg">&#60;</span>link
                                        <span className="c_blue"> href</span>
                                        <span className="c_mg">=</span>
                                        <span className="c_orange">"https://unpkg.com/jquery-cookie-bubble@1.0.0/dist/cookieBubble.min.css"</span>
                                        <span className="c_mg">/></span>
                                    </code>
                                    <Clipboard data-clipboard-text='<link href="https://unpkg.com/jquery-cookie-bubble@1.0.0/dist/cookieBubble.min.css"/>' className="copy-btn"><span></span></Clipboard>
                                </div>
                            </div>
                        </div>

                        <div className="code-column">
                            <div className="code-wrapper">
                                <p>Include <b>cookieBubble.min.js</b> at the bottom of your body tag</p>
                                <div className="code-content">
                                    <code>
                                        <span className="c_mg">&#60;</span>script
                                        <span className="c_blue"> src</span>
                                        <span className="c_mg">=</span>
                                        <span className="c_orange">"https://unpkg.com/jquery-cookie-bubble@1.0.0/dist/cookieBubble.min.js"</span>
                                        <span className="c_mg">/></span>
                                    </code>
                                    <Clipboard data-clipboard-text='<script src="https://unpkg.com/jquery-cookie-bubble@1.0.0/dist/cookieBubble.min.js"/>' className="copy-btn"><span></span></Clipboard>
                                </div>                            
                            </div>
                        </div>

                        <div className="code-column">
                            <h1>Usage</h1>
                            <div className="code-content">
                                <code>
                                    {'<script>'}<br></br>
                                        &nbsp;&nbsp;
                                        (<span className="c_blue">{'function'}</span>{'($) {'}<br></br>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        {'$.'}
                                        <span className="c_orange">{'cookieBubble'}</span>{'({'}<br></br>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <span>{'messageText:'}{'"My custom message"'},</span><br></br>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <span>{'iconVisibility:'}{'false'}</span><br></br>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <span className="c_red">...</span><br></br>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <span>{'});'}</span><br></br>
                                        &nbsp;&nbsp;
                                        {'})('}<span className="c_blue">{'jQuery'}</span>{');'}<br></br>
                                    {'</script>'}
                                </code>
                                <Clipboard data-clipboard-text='
                                    <script>
                                        (function($) {
                                            $.cookieBubble(
                                                { 
                                                    messageText:"My cookie message",
                                                    iconVisibility:false
                                                }
                                            );
                                        })(jQuery);
                                    </script>' className="copy-btn"><span></span></Clipboard>

                            </div>
                        </div>
                      
                        <div className="code-column">
                            <h1>Props</h1>
                            <div className="code-content no-padding no-background">
                                <PropsTable/>
                            </div>
                        </div>
                        

                    </div>
                </section>
            </section>
        );
    }
}

export default tabSection;