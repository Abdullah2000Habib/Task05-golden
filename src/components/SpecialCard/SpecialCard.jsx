import React, { Component } from 'react';
import "./style.css";
export default class SpecialCard extends Component {
render() {
    const {img , title , description} =this.props;
    return (
        <>
            <div className='specialCardWrapper'>
                <img className='specialCardImg' src={img} alt='img'/>
                <span className='specialCardTitle'>{title}</span>
                <p className='specialCardDescription'>{description}</p>
            </div>
        </>
    )
}
}
