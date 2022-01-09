
import orangeGirl from '../images/digital drawings/orange female.png'
import kyloRen from '../images/digital drawings/Kylo Ren.png'
import casualGirl from '../images/digital drawings/casual girl.png'
import dangel from '../images/digital drawings/dangel.png'

const drawings=[
  [dangel, 'Half devil, half angel warrior'],
  [orangeGirl, 'Girl in orange colors'],
  [kyloRen, 'Kylo Ren of Star Wars'],
  [casualGirl, 'Girl in casual pose and outfit'],
]

const Art=()=>{
  
  return <section className="main-section" id='art'>
    <h2 className="section-title">Digital Drawings</h2>
    <div id='drawings-container'>
      {drawings.map(([img, caption], i)=>{
        return <img key={i} src={img} alt={caption} />
      })}
    </div>
  </section>
}

export default Art
