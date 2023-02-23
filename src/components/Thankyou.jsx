import React from 'react'
import { Link } from 'react-router-dom'

const Thankyou = () => {
  return (
    <section className='empty-cart'>
    <div className="container" >
        <div className="row">
            <div className="col-lg-8 col-10  p-4 for-border mx-auto">
                <div className="empty-cart-img-big mx-auto mb-3">
                    <img src="/assets/images/success.png" alt=" empty cart" width="100%" />

                </div>
                <div className="d-flex justify-content-center">

                    <h1 className='text-center'> Your Order is Successfully Done <br /> Thank You For Your Order</h1>
                    <div className="empty-cart-img">
                        <img src="/assets/images/cart.png" alt=" empty cart" width="100%" />
                    </div>
                </div>
                <div className="btn-class text-center mt-2">
                    <Link to="/"> <div className="btn btn-primary px-5 ">Go To Home Page</div></Link>
                </div>

            </div>
        </div>
    </div>
</section>
  )
}

export default Thankyou