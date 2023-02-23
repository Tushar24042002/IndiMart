import React from 'react'

const Footer = () => {
  return (
    <div>
       
<footer class="text-center text-lg-start mt-5">
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom-1">
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>

    <div>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-github"></i>
      </a>
    </div>
  </section>

  <section class="">
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3 text-secondary"></i>IndiMart
          </h6>
          <p>
          Indimart  Private Limited, is an Indian instant delivery service. It was founded in January 2023 and is based out of Delhi. Customers of the company use a mobile application to order groceries and essentials online.
          </p>
        </div>

        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Pages
          </h6>
          <p>
            <a href="/" class="text-reset">Home</a>
          </p>
          <p>
            <a href="/about" class="text-reset">About Us</a>
          </p>
          <p>
            <a href="/products" class="text-reset">Products</a>
          </p>
          <p>
            <a href="/contact" class="text-reset">Contact Us</a>
          </p>
        </div>

        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="/cart" class="text-reset">Go To Cart</a>
          </p>
          <p>
            <a href="/wishlist" class="text-reset">Go To Wishlist</a>
          </p>
          <p>
            <a href="https://www.studybuddy.store" class="text-reset">Educational Website</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Github Code</a>
          </p>
        </div>

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3 text-secondary"></i> h-134 Aman Vihar Kirari Delhi-110086</p>
          <p>
            <i class="fas fa-envelope me-3 text-secondary"></i>
            tushargupta24042002@gmail.com
          </p>
          <p><i class="fas fa-phone me-3 text-secondary"></i>+91 8882060228</p>
          <p><i class="fas fa-print me-3 text-secondary"></i>+91 8882060228</p>
        </div>
      </div>
    </div>
  </section>

  <div class="text-center p-4" style={{backgroundColor: "#092e67" , color:"white"}}>
    © 2023 Copyright :
    <a class="text-reset" href="https://www.studybuddy.store/"> Study Buddy</a>
  </div>
</footer>
    </div>
  )
}

export default Footer