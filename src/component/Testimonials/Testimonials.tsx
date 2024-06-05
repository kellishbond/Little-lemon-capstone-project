import './Testimonials.css'
import img1 from '../../assets/images/reviewer1.png'
import img2 from '../../assets/images/reviewer2.png'
import img3 from '../../assets/images/reviewer4.png'

import React from 'react'

const Testimonials = () => {
  return (
    
    <div className='testimonials'>
        <div className="Tittle"> 
            <div className='test-pic'>
                
                <img src={img1} alt="" />
                <div className='name'>
                    <p className='tit-name'>John Dee</p>
                    <p className='tit-rating'>5/5</p>
                    <div className="test-desc">
                        Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. 
                        Delectus perspiciatis excepturi, 
                        obcaecati libero quidem dolorum dolore,
                         hic temporibus magni nesciunt fugit. Omnis 
                         explicabo excepturi laboriosam blanditiis 
                         ipsum, iste animi error?
                    </div>
                </div>
            </div>
       
            </div>


        <div className='test-title'>
            
            <div className='test-pic'>
                <img src={img2} alt="" />
                <div className='name'>
                <p className='tit-name'>Mary Jane</p>
                    <p className='tit-rating'>5/5</p>
                    <div className="test-desc">
                        Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. 
                        Delectus perspiciatis excepturi, 
                        obcaecati libero quidem dolorum dolore,
                         hic temporibus magni nesciunt fugit. Omnis 
                         explicabo excepturi laboriosam blanditiis 
                         ipsum, iste animi error?
                    </div>
                </div>
            </div>
        </div>

    <div className='test-pic'>
                <img src={img3} alt="" />
                <div className='name'>
                <p className='tit-name'>Lee John</p>
                    <p className='tit-rating'>5/5</p>
                    <div className="test-desc">
                        Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. 
                        Delectus perspiciatis excepturi, 
                        obcaecati libero quidem dolorum dolore,
                         hic temporibus magni nesciunt fugit. Omnis 
                         explicabo excepturi laboriosam blanditiis 
                         ipsum, iste animi error?
                    </div>
                </div>
            </div>
        </div>

  )
}

export default Testimonials