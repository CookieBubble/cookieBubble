import React, { Component } from 'react';


class propsTable extends Component {
    render() {
        return (
            <table className="table table-striped table-responsive">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>Default</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>messageText</td>
                        <td>'We use cookies to personalize your experience. By continuing to visit this website you agree to our use of cookies.'</td>
                        <td>String</td>
                    </tr>
                    <tr>
                        <td>messageTextColor</td>
                        <td>'#000000'</td>
                        <td>hex, rgb, rgba</td>
                    </tr>
                    <tr>
                        <td>messageFontSize</td>
                        <td>'18px'</td>
                        <td>px, em, rem</td>
                    </tr>
                    <tr>
                        <td>buttonText</td>
                        <td>'Got It'</td>
                        <td>String</td>
                    </tr>
                    <tr>
                        <td>buttonColor</td>
                        <td>'#00a4ff'</td>
                        <td>hex, rgb, rgba</td>
                    </tr>
                    <tr>
                        <td>buttonFontSize</td>
                        <td>'14px'</td>
                        <td>px, em, rem</td>
                    </tr>
                    <tr>
                        <td>iconColor</td>
                        <td>'#00a4ff'</td>
                        <td>hex, rgb, rgba</td>
                    </tr>
                    <tr>
                        <td>iconVisibility</td>
                        <td>true</td>
                        <td>Bool</td>
                    </tr>
                    <tr>
                        <td>cookiePolicyButtonText</td>
                        <td>'Read our cookie policy.'</td>
                        <td>String</td>
                    </tr>
                    <tr>
                        <td>cookiePolicyButtonUrl</td>
                        <td>'<a href="http://allaboutcookies.org/" rel="nofollow">http://allaboutcookies.org/</a>'</td>
                        <td>Url</td>
                    </tr>
                    <tr>
                        <td>cookiePolicyButtonTarget</td>
                        <td>'_blank'</td>
                        <td>'_blank' or '_self'</td>
                    </tr>
                    <tr>
                        <td>boxPosition</td>
                        <td>'bottom-left'</td>
                        <td>'bottom-left', 'bottom-center', 'bottom-right', 'top-left', 'top-center', 'top-right'</td>
                    </tr>
                    <tr>
                        <td>maxAge</td>
                        <td>30</td>
                        <td>Number</td>
                    </tr>
                     <tr>
                        <td>boxColor</td>
                        <td>'#ffffff'</td>
                        <td>hex, rgb, rgba</td>
                    </tr> 
{/*                     <tr>
                        <td>boxAppearDelay</td>
                        <td>{1000}</td>
                        <td>time in milliseconds</td>
                    </tr> */}
                </tbody>
            </table>
        );
    }
}

export default propsTable;


