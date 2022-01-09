
import profilesData from "../profiles data"

const Profile=({img, url, label})=>{

  return <a href={url} className="profile-link">
    <img src={img} alt={label+' logo'} />
    <p>{label}</p>
  </a>
}

const Footer=()=>{
  
  return (<footer>
    <p>Find me on</p>
    <ul>
      {profilesData.map((item, i)=>{
        return <li key={i}>
          <Profile {...item}/>
        </li>
      })}
    </ul>
  </footer>)
}

export default Footer
