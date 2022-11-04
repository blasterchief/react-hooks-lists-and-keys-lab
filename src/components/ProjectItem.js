import React from "react";

function ProjectItem({ name, about, technologies, id }) {

     const techToJsx = technologies.map((technology) => {
      console.log(id)
       return (<span key={`${technology}${id}`} >{technology}</span>)
     }
     )
//console.log()

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {techToJsx}
      </div>
    </div>
  );
}

export default ProjectItem;
