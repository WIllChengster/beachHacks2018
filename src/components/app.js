import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './navigation/navBar';
import Matching from './matching/';
import TopicCreator from './topicCreator/';
import EventPage from './eventPage/';
import Register from './register/';
import Home from './home/';
import {authCheck} from '../actions'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'


class App extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.authCheck()
    }

    render(){
        console.log(this.props)
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


function mapStateToProps(state){
    return {
        auth: state.user.auth
    }
}


export default withRouter(connect(mapStateToProps, {authCheck:authCheck})(App));
