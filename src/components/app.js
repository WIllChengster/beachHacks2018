import React from 'react';
import {Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './navigation/navBar';
import Matching from './matching/';
import TopicCreator from './topicCreator/'

const App = () => (
    <div>
        <NavBar/>
        <div className="container">
            <Route path="/matching" component={Matching} />
            <Route path="/topicCreator" component={TopicCreator} />
        </div>
    </div>
);



export default App;
