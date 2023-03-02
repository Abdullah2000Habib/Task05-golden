import React, { Component } from 'react';
import stars from "../../assets/images/Group.png";
import "./style.css";
class ReviewCard extends Component {
    render() {
        const {img ,name ,description}= this.props
        return (
            <>
                <div className='reviewCardWrapper'>
                    <div className='reviewCardPerson'>
                        <img className='reviewCardImg' src={img} alt="img"/>
                        <div className='reviewCardDetails'>
                            <span>{name}</span>
                            <img src={stars} alt='img'/>
                        </div>
                    </div>
                    <q className='reviewCardDescription'>{description}</q>
                </div>
            </>
        );
    }
}

export default ReviewCard;
