
import { projects } from "../projects data"
import boyOnPCimg from '../images/boy in front of pc.svg'

const Project=({img, link, title, description})=>{
  
  return <a className='project-link' href={link}>
    <h3 className='project-title'>{title}</h3>
    <img src={img} alt={title+' thumbnail'} className='project-image'/>
    <p className='project-description'>{description}</p>
  </a>
}

const Projects=()=>{
  
  return <section className="main-section" id='projects'>
    <h2 className='section-title'>Projects</h2>
    <div id='projects-container'>
      {projects.map((project, i)=>{
        return <Project key={i} {...project}/>
      })}
      <img src={boyOnPCimg} alt="Boy sitting in front of a PC" className="bg-image"/>
    </div>
  </section>
}

export default Projects
