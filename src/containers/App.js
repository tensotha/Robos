import React from 'react';
import ReactDOM from 'react';
import CardList from '../components/CardList';
import {robots} from '../robots';
import SearchBox from '../components/SearchBox';
const App = () => {
    return (
        <div className='tc'>
            <SearchBox />
            <h1>RoboUsers</h1>
            <CardList robots={robots}/>
        </div>
    )
}
export default App;