import './Footer.css'

import foot from '../../assets/images/footer.png'

const Footer = () => {
  return (
    <div className='footer'>
        <img src={foot} alt="footer" />
        <div className='navigator'>
            <div className="navtext">
                <p>Navigation</p>
            
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Reservation</li>
                <li>Menu</li>
                <li>Login</li>
            </ul>
        </div>
    </div>

    <div className="navigator">
        <div className='navtext'>
            <p>Contact</p>
        </div>
        <div>
            <ul>
                <li>Address</li>
                <li>Phone number</li>
                <li>Email</li>
            </ul>
        </div>
    </div>
    <div className="navigator">
        <div className="navtext">
            <p >Social media</p>

        </div>
        <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Tiktok</li>
            <li>X</li>
        </ul>
    </div>
    </div>
)
}

export default Footer