import React from 'react';

export default (props) => {
    const tech = props.user.technology.map((item,index)=>{
        return(
            <span key={index}  > {item} </span>
        )
    })

    return(
    <div className="card my-2 ">
        <div className="card-body">
            <p>name: {props.user.name}</p>
            <p>role: {props.user.role}</p>
            <p>Technology: {tech}</p>
        </div>
    </div>
    )
}