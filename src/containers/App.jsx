import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import 'tachyons';

class App extends Component {
    constructor() {
        super()
        // this is the state of the App component. It is what changes in an app.
        this.state = {
            robots: [],
            searchField: '',
        }
    }

    // this is a lifecycle method that runs when the component mounts
    componentDidMount() {
        // this is an API call to get the users from the jsonplaceholder API
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        // this is setting the state of the robots array to the users that we got from the API
        .then(users => this.setState({ robots: users }));
    }

    // this is a custom method that when the search box's value changes, it will update the state of the searchField
    // to the value of the search box
    onSearchChange = (e) => {
        this.setState({ searchField: e.target.value })
    }

    render() {
        // this is destructuring the state object so that we can use robots and 
        // searchField instead of this.state.robots and this.state.searchField
        const { robots, searchField } = this.state;

        // this is filtering the robots array based on the searchField value
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        // this is a ternary operator that will return a loading message if the robots array is empty
        return !robots.length ? 
        <h1>Loading...</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
    }
}

export default App;