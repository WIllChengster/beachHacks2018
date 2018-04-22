import React, {Component} from 'react';
import axios from 'axios'


class Auth extends Component{

    signIn(){
        axios.get('/auth/login')
    }
    authCheck(){
        axios.get('/auth/check').then(res=>{
            console.log(res)
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.authCheck} className="btn">authCheck</button>
                <button onClick={this.signIn} className="btn">Sign in</button>
            </div>
        )
    }
}
export default Auth