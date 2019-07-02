import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';


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
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return (
                <div className='tc'>
                    <h1> Loading </h1>
                </div>
            )
        } else {
            return (
                <div className='tc'>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <h1>RoboUsers</h1>
                    <CardList robots={filteredRobots}/>
                </div>
            )
        }

    }

}
export default App;