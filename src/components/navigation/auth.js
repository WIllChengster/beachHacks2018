import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {authCheck} from '../../actions'

class Auth extends Component{
    constructor(props){
        super(props)
    }
    logOff(){
        axios.get('/auth/logoff').then(res=>{
            this.props.authCheck()
        })
    }

    render(){
        let authButton;
        if(this.props.auth){
            authButton = <button onClick={this.logOff.bind(this)} className="btn">Log Off</button>
        } else {
            authButton = <a href="/auth/login"> <button className="btn">Sign in</button> </a>
        }
        return(
            <div>
                {authButton}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.user.auth
    }
}

export default connect(mapStateToProps, {authCheck:authCheck})(Auth);
