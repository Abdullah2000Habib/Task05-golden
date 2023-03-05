import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import Navbar from '../../components/Navbar/Navbar';
import "./style.css";
export default class HomePage extends Component {
render() {
    return (
        <>
            <div className='section1'>
                <Navbar/>
                <div className='section1Details'>
                    <h3 className='section1Title'>Welcome To Golden View Dine</h3>
                    <span className='section1Description'>Explore the authentic vegan dishes with your friends and family</span>
                    <Button title="Read more"/>
                </div>
            </div>
        </>
    )
}
}
