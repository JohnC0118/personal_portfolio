import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Cover, Navbar, Works, StarsCanvas } from './components'

const App = () => {
  return (
    <BrowserRouter>
    {/* bg-primary */}
      <div className="relative z-0 ">
        {/* <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"> */}
        {/* </div> */}
        <Navbar />
        <StarsCanvas />
        <Cover />
        <About />
        <Experience />
        <Works />
        {/* <div className="relative z-0">
          <Contact />
        </div> */}
      </div>
    </BrowserRouter>
  )
}

export default App
