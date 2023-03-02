import React, { Component } from 'react';
import "./style.css";
export default class Logo extends Component {
  render() {
    const {logo} = this.props;
    return (
      <>
      <div className='logoWrapper'>
        <img className='logo' src={logo} alt='Logo'/>
      </div>
      </>
    )
  }
}
