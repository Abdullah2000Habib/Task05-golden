import React, { Component } from 'react';
import Button from '../Button/Button';
import SectionHeading from '../SectionHeading/SectionHeading';
import "./style.css";
class FoodSection extends Component {
    render() { 
        const {title ,description ,toggle ,body ,btnName,img} =this.props;
        return (
            <>
                <div className='foodSectionWrapper container'>
                    <div className='foodSectionLeft'>
                        <SectionHeading title={title} description={description} toggle={toggle}  />
                        <p className='foodSectionBody'>{body}</p>
                        <Button title={btnName}/>
                    </div>
                    <div className='foodSectionRight'>
                        <img className='foodSectionImg' src={img} alt='img'/>
                    </div>
                </div>
            </>
        );
    }
}

export default FoodSection;
