import React from 'react';
//icon importation
import FeatureIcon from '../components/feature-icon';
import iconCoin from '../img/icon-coin.svg';
import iconDesign from '../img/icon-design.svg';
import iconCode from '../img/icon-code.svg';

const feature_section = (props) => {
    return (
        <section className="section-features">
            <div class="container">
                <div className="row">
                    <div class="col-sm">
                        <FeatureIcon
                            imgUrl={iconCoin}
                            title='Open Source'
                            description='You’re free to copy, modify and use as commercial.'
                            buttonText='MIT License'
                            buttonUrl='https://github.com/CookieBubble/cookieBubble/blob/master/LICENSE'

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
    )
}

export default feature_section;


