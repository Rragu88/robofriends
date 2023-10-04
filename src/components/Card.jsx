import React from 'react';
import PropTypes from 'prop-types';

// this is destructuring, so we don't have to use props.name, props.email, props.id
// name, email, and id are passed to us by props from the CardList component
const Card = ({ name, email, id }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow5'>
            {/* we us the id here so we can get a new robot each time we load the card component */}
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                {/* the name and email are passed to us by props from the CardList component */}
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};

export default Card;