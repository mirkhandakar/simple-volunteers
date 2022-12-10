import React, { useState } from 'react';
import Activity from '../Activity/Activity';
import useVolunteers from '../hooks/useVolunteers';

const Volunteers = () => {
    const [volunteers, setVolunteers] = useVolunteers();
    const [searchResult, setSearchResult] = useState([]);

    const handleSearchChange = event => {
        const searchText = event.target.value;
    }
    // const handleSearchChange2 = event => {
    //     const searchText = event.target.value;
    //     const match = volunteers.filter(v => v.title.toLowerCase().includes(searchText));
    //     setSearchResult(match);
    // }
    return (
        <div>
            <h2>All Volunteers</h2>
            <input onChange={handleSearchChange} style={{ 'margin': '20px' }} type="text" name="" id="" placeholder='search' />
            <div className='activity-container'>
                {
                    searchResult.map(activity => <Activity
                        key={activity._id}
                        activity={activity}
                    ></Activity>)
                }
            </div>
        </div>
    );
};

export default Volunteers;