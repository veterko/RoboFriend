import React from 'react';
import {connect} from 'react-redux';
import 'tachyons';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll'
import './App.css'
import ErrorBoundary from './ErrorBoundary';
import {setSearchField} from './Actions.js';

const mapStateToProps = state => {
    return {
        searchField : state.searchField,

    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends React.Component 
{
    constructor()
    {
        super();        
        this.state = 
        {
            robots : [],
        }
    }

    render(){
        const {robots} = this.state;
        const {searchField, onSearchChange} = this.props;
        const filteredRobots = robots.filter(robot => {return robot.name.toLowerCase().includes(searchField.toLowerCase())});
        return(
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then( response =>response.json()).then(users=>this.setState({ robots: users}));
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);