import React from 'react'
import Project from '../components/Project'
import Intro from './Intro'

export default function Porjects(props) {
    return (
        <React.Fragment>
            <Intro/>
            <div className="container pt">
                <div className="row mt">
                    <div className="col-lg-6 col-lg-offset-3 centered">
                        <h3>MY WORK</h3>
                        <hr />
                        <p>These are all my projects that I have build in my free time.All the projects are uploaded on GitHub. </p>
                    </div>
                </div>
                <div className="row mt centered">

                    {props.projects.map((project, index) => (<Project key={project.name} repo={project} />))}
                </div>
            </div>
            
        </React.Fragment>
    )
}
