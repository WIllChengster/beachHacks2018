import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class Auth extends Component{
    constructor(props){
        super(props)
    }
    logOff(){
        axios.get('/auth/logoff').then(res=>{
            console.log(res)
        })
    }

    render(){
        let authButton;
        if(this.props.auth){
            authButton = <button onClick={this.logOff()} className="btn">Log Off</button>
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

export default connect(mapStateToProps,{})(Auth);