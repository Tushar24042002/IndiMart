import React from 'react'
import Alert from './Alert';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Payment = () => {
  const Navigate = useNavigate();
  const [alert, setAlert] = useState(null);
  const showAlert = (message, types) => {
    setAlert({
      msg: message,
      types: types
    })
  }

  const [userpayment, setUserpayment] = useState({
    name :"",
    expiry:"",
    cardnumber:"",
    cvv:""
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name);
    setUserpayment({ ...userpayment, [name]: value });
  }
const payment =()=>{
  if(userpayment.name==""|| userpayment.expiry=="" || userpayment.cardnumber==""||userpayment.cvv==""){
    showAlert("Please Fill All Required Fields", "danger");
    setTimeout(() => setAlert(null), 1000);
  }
  else{
    Navigate("/thankyou");
  }
}

 
  return (
    <div>
      <Alert alert={alert}/>
      <div className="container pt-5 pb-4">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="card shadow">
              <div className="card-body">
              <form action="" method="get">
        <h4 class="mb-3 text-center h2">Payment</h4>

        <div class="d-block my-3">
          <div class="custom-control custom-radio">
            <input
              id="credit"
              name="paymentMethod"
              type="radio"
              class="custom-control-input me-2"
              checked
              required
            />
            <label class="custom-control-label" for="credit">
              Credit card
            </label>
          </div>
          <div class="custom-control custom-radio">
            <input
              id="debit"
              name="paymentMethod"
              type="radio"
              class="custom-control-input me-2"
              required
            />
            <label class="custom-control-label" for="debit">
              Debit card
            </label>
          </div>
          <div class="custom-control custom-radio">
            <input
              id="paypal"
              name="paymentMethod"
              type="radio"
              class="custom-control-input me-2"
              required
            />
            <label class="custom-control-label" for="paypal">
              PayPal
            </label>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="cc-name">Name on card</label>
            <input
              type="text"
              class="form-control"
              id="cc-name"
              placeholder="Name On Card"
              name='name'
              required
              onChange={handleChange}
            />
            <small class="text-muted">
              Full name as displayed on card
            </small>
            <div class="invalid-feedback">Name on card is required</div>
          </div>
          <div class="col-md-6 mb-3">
            <label for="cc-number">Credit card number</label>
            <input
              type="number"
              class="form-control"
              id="cc-number"
              placeholder=""
              name='cardnumber'
              maxLength={16}
              required
              onChange={handleChange}
            />
            <div class="invalid-feedback">
              Credit card number is required
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 mb-3">
            <label for="cc-expiration">Expiration</label>
            <input
              type="number"
              class="form-control"
              id="cc-expiration"
              placeholder=""
              name='expiry'
              maxLength={4}
              required
              onChange={handleChange}
            />
            <div class="invalid-feedback">Expiration date required</div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="cc-cvv">CVV</label>
            <input
              type="number"
              class="form-control"
              id="cc-cvv"
              placeholder=""
              maxLength={3}
              name='cvv'
              required
              onChange={handleChange}
            />
            <div class="invalid-feedback">Security code required</div>
          </div>
        </div>
        <hr class="mb-4" />
        <button class="btn btn-primary btn-lg btn-block w-100" type="button" onClick={payment}>
        Make Payment
        </button>
      </form>
              </div>
            </div>
        
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Payment