import React, { Component } from 'react';
import "./style.css";
export default class StuffItem extends Component {
render() {
    const {img , title ,number}=this.props;
    return (
        <>
            <div className='stuffItemWrapper'>
                <img className='stuffItemImg' src={img} alt="img"/>
                <div className='stuffItemDescription'>
                    <span>{`${number}+`}</span>
                    <span>{title}</span>
                </div>
            </div>
        </>
    )
}
}
