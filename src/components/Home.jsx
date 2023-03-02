import React, { Component } from 'react';
import FooterInfo from './FooterInfo/FooterInfo';
// import BlogCard from './BlogCard/BlogCard';
// import ReviewCard from './ReviewCard/ReviewCard';
// import StuffItem from './StuffItem/StuffItem';
// import MenuItem from './MenuItem/MenuItem';
// import SpecialCard from './SpecialCard/SpecialCard';
// import SectionHeading from './SectionHeading/SectionHeading';
// import Button from './Button/Button';
// import Navbar from './Navbar/Navbar';
// import food from "../assets/images/special/Fresh-food.png";
// import menuFood from "../assets/images/menu/menu1.png";
// import stuffImg from "../assets/images/staff/dish.png";
// import person from "../assets/images/Ellipse.png";
// import blogImg from "../assets/images/blogs/blog-image1.png";
import footerInfoImg from "../assets/images/contacts/message.png";
class Home extends Component {
render() {
    return (
    <>
        {/* <Navbar/> */}
        {/* <Button title='Read More'/> */}
        {/* <SectionHeading title='About Us' description='Discover The Taste Of Worldclass Vegan Dishes From The Kitchen Of Go Green Dine'/> */}
        {/* <SpecialCard title='Fresh Food' description='Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sollicitudin Hendrerit A Amet Viverra. Nunc Pretium In Amet At Mattis Cras.' img={food}/> */}
        {/* <MenuItem img={menuFood} title='Lorem ipsum dolor sit amet' description='Lorem ipsum dolor sit amet' code='Rs 222'/> */}
        {/* <StuffItem img={stuffImg} title='Delicacyd sjfns' number='10' /> */}
        {/* <ReviewCard img={person} name='Alex andrina' description='Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sollicitudin Hendrerit A Amet Viverra. Nunc Pretium In Amet At Mattis Cras. Quisque Commodo Mattis Ornare A Nec Odio. Pulvinar Orci, Egestas Eget Nulla Duis At Iaculis Nunc, El'/> */}
        {/* <BlogCard img={blogImg} toggle={true} title='Cooking Dining Experience' body='Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sollicitudin'/> */}
        <FooterInfo img={footerInfoImg} title='Gogreendineservice@Gmail.Com'/>
    </>
    )
}
}

export default Home;