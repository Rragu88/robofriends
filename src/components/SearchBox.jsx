import React from 'react';
import PropTypes from 'prop-types';

// Search change is getting passed in from the App.js file as a custom method
const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input 
                className="pa3 ba b--green bg-lightest-blue"
                type='search' 
                placeholder='search robots...'
                // this is running searchChange when the search box's value changes
                onChange={searchChange}
            />
        </div>
    );
}

SearchBox.propTypes = {
    searchChange: PropTypes.func.isRequired
};

export default SearchBox;