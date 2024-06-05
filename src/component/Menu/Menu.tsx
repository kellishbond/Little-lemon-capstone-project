import './Menu.css'

import  greek from '../../assets/images/greek-salad.png'
import  Bruchetta from '../../assets/images/bruchetta.jpg'
import  Lemon from '../../assets/images/lemon-dessert.jpg'

const Menu = () => {
  return (
    <div className="cards">
    <div className="card">
        <img className="menu-img" src={greek} alt="greek salad"/>
        <div className="name-price">
            <p className="item-name">Greek Salad</p>
            <p className="item-price">$12.99</p>
        </div>
        <div className="item-desc">
            <p >The famous greek salad of crispy lettuce, 
                peppers, olives and our Chicago style feta cheese, 
                garnished with crunchy garlic and rosemary croutons. </p>
        </div>
        <div className="delivery">
            <p>Order a delivery</p>
        </div>
    </div>
    <div className="card">
        <img className="menu-img" src={Bruchetta} alt="bruchetta"/>
        <div className="name-price">
            <p className="item-name">Bruchetta</p>
            <p className="item-price">$5.99</p>
        </div>
        <div className="item-desc">
            <p>Our Bruschetta is made from grilled bread that has 
                been smeared with garlic and seasoned with salt and olive oil.  </p>
        </div>
        <div className="delivery">
            <p>Order a delivery</p>
        </div>
    </div>
    <div className="card">
        <img className="menu-img" src={Lemon} alt="lemon-dessert"/>
        <div className="name-price">
            <p className="item-name">Lemon Dessert</p>
            <p className="item-price">$5.00</p>
        </div>
        <div className="item-desc">
            <p>This comes straight from grandma’s recipe book,
                 every last ingredient has been sourced and is as 
                 authentic as can be imagined. </p>
        </div>
        <div className="delivery">
            <p>Order a delivery</p>
        </div>
    </div>
</div>

)
}
export default Menu