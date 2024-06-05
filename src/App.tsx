import './App.css'
import Footer from './component/Footer/Footer'
import Hero from './component/Hero/Hero'
import Menu from './component/Menu/Menu'
import NavBar from './component/NavBar/NavBar'
import ResturantDesc from './component/Resturant desc/ResturantDesc'
import Testimonials from './component/Testimonials/Testimonials'
import Testimonialtittle from './component/Testimonials/Testimonialtittle'
import Specials from './component/special/Specials'

function App() {
  return(
      <div> 
        <NavBar />
        <Hero/>
        
        
    <div className='container'>
    <Specials />
    <Menu />
    <Testimonialtittle/>
    <Testimonials/>
    <ResturantDesc />
    <Footer />
     
    </div>
    </div>
  )
}

export default App
