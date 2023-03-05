import React, { Component } from 'react';
import foodSectionImg from "../../assets/images/about-image.png";
import gift1 from "../../assets/images/golden1.png";
import gift2 from "../../assets/images/golden2.png";
import menuFood1 from "../../assets/images/menu/menu1.png";
import menuFood10 from "../../assets/images/menu/menu10.png";
import menuFood11 from "../../assets/images/menu/menu11.png";
import menuFood12 from "../../assets/images/menu/menu12.png";
import menuFood2 from "../../assets/images/menu/menu2.png";
import menuFood3 from "../../assets/images/menu/menu3.png";
import menuFood4 from "../../assets/images/menu/menu4.png";
import menuFood5 from "../../assets/images/menu/menu5.png";
import menuFood6 from "../../assets/images/menu/menu6.png";
import menuFood7 from "../../assets/images/menu/menu7.png";
import menuFood8 from "../../assets/images/menu/menu8.png";
import menuFood9 from "../../assets/images/menu/menu9.png";
import specialCardImage3 from "../../assets/images/special/Exotic-dishes.png";
import specialCardImage1 from "../../assets/images/special/Fresh-food.png";
import specialCardImage2 from "../../assets/images/special/skilled-Chef.png";
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import FoodSection from '../../components/FoodSection/FoodSection';
import MenuItem from '../../components/MenuItem/MenuItem';
import Navbar from '../../components/Navbar/Navbar';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import SpecialCard from '../../components/SpecialCard/SpecialCard';
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
            <div className='section3'>
                <div className='section3Heading'>
                    <SectionHeading title='Special' description='What Makes Us Special' toggle={false}/>
                </div>
                <div className='section3Cards'>
                    <SpecialCard img={specialCardImage1} title='Fresh Food' description='Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sollicitudin Hendrerit A Amet Viverra. Nunc Pretium In Amet At Mattis Cras.'/>
                    <SpecialCard img={specialCardImage2} title='Skilled Chef' description='Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sollicitudin Hendrerit A Amet Viverra. Nunc Pretium In Amet At Mattis Cras.'/>
                    <SpecialCard img={specialCardImage3} title='Exotic Dishes' description='Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sollicitudin Hendrerit A Amet Viverra. Nunc Pretium In Amet At Mattis Cras.'/>
                </div>
            </div>
            <div className='section4'>
                <div className='section3Heading'>
                        <SectionHeading title='Straight From Kitchen' description='Our Menu' toggle={false}/>
                    </div>
                <Container>
                    <div className='section4Menus'>
                        <MenuItem img={menuFood1} title='Lorem ipsum dolor sit amet' description='Lorem ipsum dolor sit amet' code='Rs 222'/>
                        <MenuItem img={menuFood2} title='Lorem ipsum dolor sit amet' description='Lorem ipsum dolor sit amet' code='Rs 185'/>
                        <MenuItem img={menuFood3} title='Lorem ipsum dolor sit amet' description='Lorem ipsum dolor sit amet' code='Rs 190'/>
                        <MenuItem img={menuFood4} title='Lorem ipsum dolor sit amet' description='Lorem ipsum dolor sit amet' code='Rs 200'/>
                        <MenuItem img={menuFood5} title='Lorem ipsum dolor sit amet' description='Lorem ipsum dolor sit amet' code='Rs 135'/>
                        <MenuItem img={menuFood6} title='Lorem ipsum dolor sit amet' description='Lorem ipsum dolor sit amet' code='Rs 148'/>
                        <MenuItem img={menuFood7} title='Lorem ipsum dolor sit amet' description='Lorem ipsum dolor sit amet' code='Rs 590'/>
                        <MenuItem img={menuFood8} title='Lorem ipsum dolor sit amet' description='Lorem ipsum dolor sit amet' code='Rs 130'/>
                        <MenuItem img={menuFood9} title='Lorem ipsum dolor sit amet' description='Lorem ipsum dolor sit amet' code='Rs 190'/>
                        <MenuItem img={menuFood10} title='Lorem ipsum dolor sit amet' description='Lorem ipsum dolor sit amet' code='Rs 200'/>
                        <MenuItem img={menuFood11} title='Lorem ipsum dolor sit amet' description='Lorem ipsum dolor sit amet' code='Rs 130'/>
                        <MenuItem img={menuFood12} title='Lorem ipsum dolor sit amet' description='Lorem ipsum dolor sit amet' code='Rs 185'/>
                    </div>
                </Container>
            </div>
            <div className='section5'>

                <div className='section3Heading'>
                            <SectionHeading title='Come join us for a lunch this weekend and enjoy' description='FLAT 10% OFF' toggle={true}/>
                </div>
                <div className='section5Btn'>
                    <Button title='Book Table'/>
                </div>
                    
                <div className='section5Imgs1'>
                    <img src={gift1} alt=''/>
                    <img src={gift2} alt=''/>
                </div>
                <div className='section5Imgs2'>
                    <img src={gift1} alt=''/>
                    <img src={gift2} alt=''/>
                </div>
            </div>

        </>
    )
}
}
