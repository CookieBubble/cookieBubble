import React from 'react';

 const linkPopUP = {
     popIn: function(){
        
     }
 }


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
                                <div className="hrefPopIn-social"></div>
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
            </div>
            <div className="others">
                <a href="https://github.com/CookieBubble/react-cookie-bubble/issues" target="_blank">React version feedback</a>
                <a href="https://github.com/CookieBubble/jquery-cookie-bubble" target="_blank">Jquery version feedback</a>
            </div> */}
        </footer>
    )
}

export default footer;


