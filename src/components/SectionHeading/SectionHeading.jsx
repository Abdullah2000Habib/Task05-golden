import React, { Component } from 'react';
import "./style.css";
class SectionHeading extends Component {
    render() {
        const {title,description ,toggle = false} = this.props;
        return (
            <>
                <div className='sectionHeadingWrapper'>
                    <span className={toggle?'title toggle':'title'}>{title}</span>
                    <p className={toggle?'description toggle':'description'}>{description}</p>
                </div>
            </>
        );
    }
}

export default SectionHeading;
