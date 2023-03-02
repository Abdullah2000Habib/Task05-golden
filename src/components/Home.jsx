import React, { Component } from 'react';
import SpecialCard from './SpecialCard/SpecialCard';
// import SectionHeading from './SectionHeading/SectionHeading';
// import Button from './Button/Button';
// import Navbar from './Navbar/Navbar';
import food from "../assets/images/special/Fresh-food.png";
class Home extends Component {
render() {
    return (
    <>
        {/* <Navbar/> */}
        {/* <Button title='Read More'/> */}
        {/* <SectionHeading title='About Us' description='Discover The Taste Of Worldclass Vegan Dishes From The Kitchen Of Go Green Dine'/> */}
        <SpecialCard title='Fresh Food' description='Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sollicitudin Hendrerit A Amet Viverra. Nunc Pretium In Amet At Mattis Cras.' img={food}/>
    </>
    )
}
}

export default Home;