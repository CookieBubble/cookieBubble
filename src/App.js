import React, { Component } from 'react';
import Logo from '../src/img/logo.svg';
import './css/app.css';
import _JSXStyle from 'styled-jsx/style';
import Sidebar from './components/sidebar';
import HeroShot from './components/heroshot';
import TabSection from './components/tab-section';
import Footer from './components/footer';
import BuyCoffee from './components/buy-coffee.js';
import Features from './components/feature-section';


class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="section-header">
            <div className="logo">
                <a href="/">
                    <img src={Logo} alt="CookieBubble"></img>
                </a>
            </div>
            <Sidebar/>
            <HeroShot/>
        </section>
        <Features/>
        <TabSection/>
        <BuyCoffee/>
        <Footer/>
      </div>
    );
  }
}

export default App;


