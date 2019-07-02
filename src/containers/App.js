import React from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import {setSearchField} from '../redux/action';

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }}
class App extends React.Component{
    constructor(){
        super();
        this.state = {
            robots: [],
        }
    }
    componentDidMount(){
       fetch(`https://jsonplaceholder.typicode.com/users`)
       .then(response => response.json())
       .then(users => this.setState({ robots: users }))
    }
    render(){
        const {robots} = this.state // No more this.state required.
        const {searchField, onSearchChange} = this.props
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
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
                    <SearchBox searchChange={onSearchChange}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(App); // mapStateToProps, mapDispatchToProps are just names commonly used in redux, not reserved