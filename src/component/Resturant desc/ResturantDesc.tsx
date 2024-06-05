import './ResturantDesc.css'
import hero from '../../assets/images/hero.png'
const ResturantDesc = () => {
  return (
    <div className='heroo'>
    <div className='hero-text'>
       <h1 className='titlee'> Little Lemon </h1>
       <h2 className='sub-tittlee'>Chicago</h2>
    
       <p className='descc'> We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
     
    </div>
    
    <div className="img-wrapper">
  
    <img src={hero}alt="hero_img"  className='imggg'/>
  
    </div>
   
</div>

)
}

export default ResturantDesc