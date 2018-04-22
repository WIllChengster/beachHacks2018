import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './navigation/navBar';
import Matching from './matching/';
import TopicCreator from './topicCreator/';
import EventPage from './eventPage/';
import Register from './register/';
import Home from './home/';

class App extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return(
        <div>
            <NavBar/>
            <div className="container">
                <Route exact path="/home" component={Home} />
                <Route path="/matching" component={Matching} />
                <Route path="/topicCreator" component={TopicCreator} />
                <Route exact path="/event/:eventId" component={EventPage}/>
                <Route path="/event/:eventId/register" component={Register} />
            </div>
        </div>
        )
    }
}




export default (App);
