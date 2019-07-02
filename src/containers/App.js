import React from 'react';
import ReactDOM from 'react';
import CardList from '../components/CardList';
import {robots} from '../robots';
const App = () => {
    return (
        <div>
            <h1>RoboUsers</h1>
            <CardList robots={robots}/>
        </div>
    )
}
export default App;