import Navbar from './components/Navbar'
import Home from './sections/Home'
import Project from './sections/Project'
import Contactus from './sections/Contactus'
import About from './sections/About'
import Footer from './components/Footer'
import { Analytics } from '@vercel/analytics/react'

const App = () => {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "4rem" }}></div>
      <Home />
      <About />
      <Project />
      <Contactus />
      <Footer />
      <Analytics />
    </>
  );
}

export default App
