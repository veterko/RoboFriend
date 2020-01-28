import React from 'react';
import 'tachyons';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll'
import './App.css'
import ErrorBoundary from './ErrorBoundary';

class App extends React.Component 
{
    constructor()
    {
        super();        
        this.state = 
        {
            robots : [],
            searchField: ''
        }
    }

    onSearchChange =(event)=>
    {
        this.setState({searchField: event.target.value});
    }

    render(){
        const {robots} = this.state;
        const filteredRobots = robots.filter(robot => {return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())});
        return(
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    }

    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/users').then( response =>response.json()).then(users=>this.setState({ robots: users}));
    }
}

export default App;