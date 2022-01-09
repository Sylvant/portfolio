
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Art from "./Components/Art";
import Introduction from "./Components/Introduction";
import Projects from './Components/Projects'
import Skills from './Components/Skills'

const App=()=>{
  
  return (<>
    <header>
      <Navbar />
    </header>
    <main>
      <Introduction />
      <Projects />
      <Skills />
      <Art />
    </main>
    <Footer />
  </>);
}

export default App