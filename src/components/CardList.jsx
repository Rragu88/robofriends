import React, { Fragment } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

// this is destructuring the props object so that we can use robots instead of props.robots
// robots is getting passed in from the App.js file
const CardList = ({ robots }) => {
    return (
        <Fragment>
            {
                // here we are mapping over the robots array and returning a Card component for each robot
                robots.map((robot, i) => {
                    return (<Card
                                // these are the props that we are passing to the Card component
                                key={i} 
                                id={robot.id} 
                                name={robot.name} 
                                email={robot.email}
                            />
                    );
                })
            }
        </Fragment>
    );
}

// propTypes define the type of props that are passed to the component and whether they are required or not
CardList.propTypes = {
    robots: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired
        })
    ).isRequired
};

export default CardList;