import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';
import './modal.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <img src={logo} className="App-logo" alt="logo"/>
                <User></User>
                <img src={'./tigre.jpg'} alt='tigre' className={'img'}/>
            </div>
        );
    }
}

export default App;
