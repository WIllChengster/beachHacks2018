import React, {Component} from 'react';
import Hackathon from './hackathon'
import axios from 'axios'

class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            hackathons: {

            }
        }
    }

    getHackathons(){
        axios.get('/hackathons')
    }

    render(){



        const hackathonArr = {1:1, 2:2, 3:3, 4:4, 5:5}
        // const hackathonBox = Object.keys(hackathonArr).map((item,index) => {
        //     return(
        //         <Hackathon key={index} hackathonData={item} />
        //     )
        // })

        return(
            
            <div>
                <div>
                    <h1 className="text-center display-3 mb-5 w-100">Welcome to the Home Page</h1>
                    <h3 className="display-4 text-center w-100">1,405,230 hackers </h3>
                    <input type="text" className="form-control my-5" placeholder="search for a hackathon"/>
                </div>
                    <h4 className="my-5" >Explore Hackathons</h4>
                    <div className="d-flex " >
                        {/* {hackathonBox} */}
                    </div>
            </div>
        )
    }
}

export default Home

