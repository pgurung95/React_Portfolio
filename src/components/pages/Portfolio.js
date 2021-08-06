import React from 'react';
import { projects } from '../../project';

export default function Projects() {
    return (
        <div className="container px-5 py-10 mx-auto text-center lg:px-40 pb-5">
            <h1>
              Portfolio
            </h1>
          <section className="row">
          {projects.map((project) => (
  
              <div className="col-lg-6 col-sm-12 mb-3">
                <div className="card">
                  <a className="image-container" href={project.deployedLink} target="blank">
                    <img src={project.image} alt="A screenshot of deployed project"></img></a>
                    <div className="card-body">
                      <h5 className="card-title">{project.title}</h5>
                      <a href={project.deployedLink}>Deployed version</a> |
                      <a href={project.gitHubLink}>GitHub repository</a>
                    </div>
                </div>
                </div>
  
          ))}
                    </section>
  
        </div>
    );
  }