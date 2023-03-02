import React, { Component } from 'react';
import "./style.css";
class FooterInfo extends Component {
render() {
    const {img ,title} = this.props;
    return (
        <>
            <div className='footerInfoWrapper'>
                <img className='footerInfoImg' src={img} alt=''/>
                <span className='footerInfoTitle'>{title}</span>
            </div>
        </>
    )
}
}

export default  FooterInfo;