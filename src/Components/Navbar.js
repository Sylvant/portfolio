
const NavLink=({section})=>{
  
  return <li>
    <a href={"#"+section} className='nav-link'>{section}<hr/></a>
  </li>
}

const Navbar=()=>{

  const sections=['projects', 'skills', 'art']
  
  return <nav>
    <a href="#introduction" id='start-anchor'>Stoyan Zdravkov</a>
    <ul id='nav-list'>
      {sections.map((section, i)=>{
        return <NavLink key={i} section={section}/>
      })}
    </ul>
  </nav>
}

export default Navbar
