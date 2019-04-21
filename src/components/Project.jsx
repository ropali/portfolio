import React from 'react'

export default function Project(props) {
    const { name, github_url, image } = props.repo;
    
    return (
        
        <div className="col-lg-4">
            <a target="_blank" className="zoom green" href={ github_url }><img className="img-responsive" src={ image } /></a>
            <p>{ name }</p>
        </div>
    )
}
