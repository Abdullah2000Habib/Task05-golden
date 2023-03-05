import React, { Component } from 'react';
import foodSectionImg from "../../assets/images/about-image.png";
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import FoodSection from '../../components/FoodSection/FoodSection';
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
            <div className='section2'>
                <Container>
                    <FoodSection title='About Us' description='Discover The Taste Of Worldclass Vegan Dishes From The Kitchen Of Go Green Dine'  body='Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sollicitudin Hendrerit A Amet Viverra. Nunc Pretium In Amet At Mattis Cras. Quisque Commodo Mattis Ornare A Nec Odio. Pulvinar Orci, Egestas Eget Nulla Duis At Iaculis Nunc, Elit. Nibh Auctor Purus Nunc Tellus Pellentesque Nibh Mattis. Malesuada Integer Consectetur. Imperdiet Aliquam Quam Mauris Semper Suscipit. Molestie Maecenas Interdum Pharetra Id Velit Sed Nec.Tetur Sit Sagittis Pretium Eget Vitae Semper Pellentesque Pellentesque.' btnName='Read more' img={foodSectionImg}/>
                </Container>
            </div>
        </>
    )
}
}
