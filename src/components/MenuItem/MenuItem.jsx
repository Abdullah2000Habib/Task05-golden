import React, { Component } from 'react';
import "./style.css";
class MenuItem extends Component {
    render() {
        const {img ,title ,description ,code} =this.props;
        return (
            <>
                <div className='menuItemWrapper'>
                    <img className='menuItemImg' src={img} alt='img'/>
                    <div className='menuItemDetails'>
                        <span>{title}</span>
                        <p>{description}</p>
                    </div>
                    <div className='menuItemLine'></div>
                    <span className='menuItemCode'>{code}</span>
                </div>
            </>
        );
    }
}

export default MenuItem;
