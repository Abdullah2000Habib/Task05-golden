import React, { Component } from 'react';
import "./style.css";
class BlogCard extends Component {
    render() { 
        const {img ,title ,body , toggle=false} =this.props;
        return (
            <>
                <div className={toggle?'blogCardWrapper toggle':'blogCardWrapper'}>
                    <img className='blogCardImg' src={img} alt=''/>
                    <div className='blogCardDetails'>
                        <span>{title}</span>
                        <p>{body}</p>
                        <span>Read More</span>
                    </div>
                </div>
            </>
        );
    }
}

export default BlogCard;
