import React from 'react';
import './Activity.css';

const Activity = ({ activity }) => {
    const { img, title } = activity;
    return (
        <div className='activity'>
            <img src={img} alt="" />
            <h4>Activity: {title}</h4>
        </div>
    );
};

export default Activity;