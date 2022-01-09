
import { logoIcons } from "../logo icons"

const Score=({score})=>{

  return <svg className="svg">
    {Array.from(Array(10)).map((_, i)=>{
      if (i+1>score) return <rect key={i} x={4+i*16} className='empty'/>
      return <rect key={i} x={4+i*16}/>
    })}
  </svg>
}
const ToolFrame=({title, icon, score})=>{

  return <li className="tool-frame">
    {
      title==='Node' ? <img src={icon} alt={title+' logo'} className="wide"/> : <img src={icon} alt={title+' logo'} />
    }
    <h4>{title}</h4>
    <Score score={score}/>
  </li>
}

const SkillsList=({title, list})=>{

  return <article className="skills-list">
    <h3>{title}</h3>
    <ul>
    {list.map(([title, icon, score], i)=>{
      return <ToolFrame key={i} {...{title, icon, score}}/>
    })}
    </ul>
  </article>
}

const Skills=()=>{

  const coding=logoIcons.slice(0, 7)
  const tools=logoIcons.slice(7)
  
  return <section id='skills' className='main-section'>
    <h2 className="section-title">Skills</h2>
    <div id='skills-container'>
      <SkillsList title='Coding' list={coding}/>
      <SkillsList title='Tools' list={tools}/>
    </div>
  </section>
}

export default Skills
