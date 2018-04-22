import React, {Component} from 'react';
import axios from 'axios'


class Auth extends Component{

    signIn(){
        axios.get('/auth/github')
    }

    render(){
        return(
            <div>
                <button onClick={this.signIn} className="btn">Sign in</button>
            </div>
        )
    }
}
export default Auth