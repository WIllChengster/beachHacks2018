import React, {Component} from 'react';
class Home extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const hackathon={
            height: '100px',
            width: '150px',
            backgroundColor:'lightGray',
            display: "inline-block",
            margin: '5px'
        }
        const center={
            
        }
        return(
            <div>
                <div className="">
                    <h1 className="text-center display-3 mb-5 w-100">Welcome to the Home Page</h1>
                    <h3 className="display-4 text-center w-100">1,405,230 hackers </h3>
                    <input type="text" className="form-control my-5" placeholder="search for a hackathon"/>
                </div>
                    <h4 className="my-5" >Explore Hackathons</h4>
                    <div className="">
                        <div style={hackathon}>
                            <h6>Hackathon Title</h6>
                        </div>
                        <div style={hackathon}>
                            <h6>Hackathon Title</h6>
                        </div>
                        <div style={hackathon}>
                            <h6>Hackathon Title</h6>
                        </div>
                    </div>
            
            </div>
        )
    }
}

export default Home

