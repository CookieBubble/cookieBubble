import React from 'react';

 const linkPopUP = {
     popIn: function(){
        
     }
 }

const tab_section = document.body.classList.add('react-docs-true');

const footer = (props) => {

    return (
        <footer>
            <div className="copyright">
                With ❤️ by 
                <div className="popInContainer" onMouseOver={linkPopUP.popIn}>
                    <span>João Pereira
                        <div className="hrefPopIn">
                            <div className="hrefPopIn--wrapper">
                                <div className="hrefPopIn-photo">
                                    <span></span>
                                </div>
                                <div className="hrefPopIn-name">
                                    <span>João Pereira</span>
                                </div>
                                <div className="hrefPopIn-desc">
                                    <span>UI Designer & Developer <a href="">@roffConsulting</a></span>
                                </div>
                                <div className="hrefPopIn-social">
                                    <a href="https://github.com/joaopereirawd" target="_blank">GH</a>
                                    <a href="https://twitter.com/joaopereirawd" target="_blank">T</a>
                                    <a href="https://www.facebook.com/joaopereirawd" target="_blank">F</a>
                                </div>
                            </div>
                            <div class="arrow-down"></div>
                        </div>
                    </span>

                </div>
            </div>
            {/* <div className="social">
                <a href="https://github.com/joaopereirawd" target="_blank">Github</a>
                <a href="https://twitter.com/joaopereirawd" target="_blank">Twitter</a>
                <a href="https://www.facebook.com/joaopereirawd" target="_blank">Facebook</a>
            </div>*/}

        </footer>
    )
}

export default footer;


