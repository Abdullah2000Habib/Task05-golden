import React, { Component } from 'react';
import "./style.css";
export default class Button extends Component {
render() {
    const {title='Click Me'} = this.props;
    return (
        <>
            <button className='mainButton'>{title}</button>
        </>
    )
}
}
