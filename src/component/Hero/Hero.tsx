import './Hero.css'
import hero from '../../assets/images/hero.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-text'>
           <h1 className='title'> Little Lemon </h1>
           <h2 className='sub-tittle'>Chicago</h2>
        
           <p className='desc'> We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
           <button className="reserve-btn btn">
                    Reserve a table
                </button>
        </div>
        
        <div className="img-wrapper">
      
        <img src={hero}alt="hero_img" className='imgg'/>
      
        </div>
       
    </div>
    
  )
}

export default Hero