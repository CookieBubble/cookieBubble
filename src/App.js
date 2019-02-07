import React, { Component } from 'react';
import './css/app.css';
import _JSXStyle from 'styled-jsx/style';
import AppLogo from '../src/img/logo.svg';
import SideMenu from './components/side-menu';
import MorphHeader from './components/morph-header';
import FeatureIcon from './components/feature-icon';
import TabSection from './components/tab-section';
//images
import logo from './logo.svg';
import iconCoin from './img/icon-coin.svg';
import iconDesign from './img/icon-design.svg';
import iconCode from './img/icon-code.svg';
import iconCoffee from './img/icon-coffee.svg';


class App extends Component {
  render() {
    return (
      <div className="App">
            <section className="section-header">
                <div className="logo">
                    <img src={AppLogo} alt="CookieBubble"></img>
                </div>
                <SideMenu/>
                <MorphHeader/>
            </section>
            
            <section className="section-features">
                <div class="container">
                    <div className="row">
                        <div class="col-sm">
                            <FeatureIcon 
                                imgUrl={iconCoin}
                                title='Open Source'
                                description='You’re free to copy, modify and use as commercial.'
                                buttonText='MIT License'
                                buttonUrl='https://opensource.org/licenses/mit-license.html'
                                
                            />
                        </div>
                        <div class="col-sm">
                            <FeatureIcon
                                imgUrl={iconDesign}
                                title='Design Your Own'
                                description='Use our conﬁgurator to customize cookeBubble and export'
                                buttonText='Get Started'
                                openSideBar={true}
                               
                            />
                        </div>
                        <div class="col-sm">
                            <FeatureIcon
                                imgUrl={iconCode}
                                title='Versatility'
                                description='You can use CookieBubble as React.js component or JQuery plugin for now.'
                                buttonText='View on Github'
                                buttonUrl='https://github.com/CookieBubble'
                            />
                        </div>
                    </div>
                </div>
            </section>

            <TabSection/>

  
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
            <footer>
                <div className="copyright">
                    <span>With ❤️ by <a href="http://joaopereira.pt" target="_blank">Joao Pereira</a></span>
                </div>
                <div className="social">
                    <a href="https://github.com/joaopereirawd" target="_blank">Github</a>
                    <a href="https://twitter.com/joaopereirawd" target="_blank">Twitter</a>
                    <a href="https://www.facebook.com/joaopereirawd" target="_blank">Facebook</a>
                </div>
                <div className="others">
                    <a href="https://github.com/CookieBubble/cookieBubble/blob/master/LICENSE" target="_blank"> MIT License</a>
                    <a href="https://github.com/CookieBubble/cookieBubble/issues" target="_blank">Feedback</a>
                </div>
            </footer>
      </div>
    );
  }
}

export default App;


