import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {authCheck} from '../../actions/index'

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
        console.log(this.props)
        return(
            <div>
                <button onClick={this.logOff} >logOff</button>>
                <button onClick={this.props.authCheck} className="btn">authCheck</button>
                <a href="/auth/login"> <button className="btn">Sign in</button> </a>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        state: state.user.auth
    }
}

export default connect(mapStateToProps, {authCheck: authCheck})(Auth);