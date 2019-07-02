import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';


class App extends React.Component{
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount(){
       fetch(`https://jsonplaceholder.typicode.com/users`)
       .then(response => response.json())
       .then(users => this.setState({ robots: users }))
    }
    onSearchChange = (event) => {
        this.setState( {searchfield: event.target.value } )
    }
    render(){
        const {robots, searchfield} = this.state // No more this.state required.
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (!robots.length) {
            return (
                <div className='tc'>
                    <h1> Loading </h1>
                </div>
            )
        } else {
            return (
                <div className='tc'>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <h1 className='f1'>RoboUsers</h1>
                    <Scroll>
                        <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
        }

    }

}
export default App;