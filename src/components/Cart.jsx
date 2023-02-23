import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addQuantity, delQuantity, delCart , addWish } from '../redux/action';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
import Alert from './Alert';
const Cart = ({ items, IncreaseQuantity, DecreaseQuantity, DeleteCart }) => {
    const Navigate = useNavigate();
    const { loginWithRedirect,logout,user, isAuthenticated  } = useAuth0();
    const dispatch = useDispatch();

    const [alert, setAlert] = useState(null);
    const showAlert =(message , types)=>{
        setAlert({
          msg : message,
          types : types
        })
      }
    const handleDel = (product) => {
        dispatch(delQuantity(product));
      
        showAlert("Reduce Quantity Successfully","danger");
        setTimeout(()=>setAlert(null),1000);
    }
    const handleAdd = (product) => {
        dispatch(addQuantity(product));
        showAlert("Added Quantity Successfully","primary");
        setTimeout(()=>setAlert(null),1000);
    }
    const delProduct = (product) => {
        dispatch(delCart(product));
        showAlert("Item Deleted from Cart","danger");
        setTimeout(()=>setAlert(null),1000);
    }
    const addWishlist = (product) => {
        dispatch(addWish(product));
        showAlert("item Added To  Wishlist Successfully","primary");
        setTimeout(()=>setAlert(null),1000);
    }
    const product = useSelector((state) => state.handleCart);
    console.log(product);


    const gotoCheckout=()=>{
        
        isAuthenticated ? Navigate("/checkout") : loginWithRedirect();
    }

    if (product.Carts.length === 0) {

        return (
            <>
                <section className='empty-cart'>
                    <div className="container" >
                        <div className="row">
                            <div className="col-lg-8 col-10  p-4 for-border mx-auto">
                                <div className="empty-cart-img-big mx-auto mb-3">
                                    <img src="/assets/images/emoji.png" alt=" empty cart" width="100%" />

                                </div>
                                <div className="d-flex justify-content-center">

                                    <h1 className='text-center'> Your Cart Is Empty</h1>
                                    <div className="empty-cart-img">
                                        <img src="/assets/images/cart.png" alt=" empty cart" width="100%" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

            </>
        )
    }
    else {
        let TotalCart = 0;
        Object.keys(product.Carts
        ).forEach(function (item) {
            TotalCart += product.Carts
            [item].quantity * product.Carts
            [item].price;
            console.log(TotalCart);
            // TotalCart = TotalCart.toFixed(2);
            // console.log(TotalCart);
            // ListCart.push(items.Carts[item]);
        });
        return (

            <section className="cart-page gradient-custom pb-5">
                <Alert alert={alert}/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10">
                            <div className="row">
                                <div className="col-lg-8 mt-5">
                                    {product.Carts.map((cartelement, key) => {
                                        return (
                                            <div className="card mb-3 p-3">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-lg-3 ">
                                                            <div className="cart-image">
                                                                <img src={cartelement.image} alt={cartelement.title} width="100%" height="100%" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-9">
                                                            <div className="cart-title">
                                                                <h5>{cartelement.title}</h5>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-6">
                                                                    <div className="cart-desc">
                                                                        <div className="cart-category">
                                                                            <p> {cartelement.category}</p>
                                                                        </div>
                                                                        <div className="total-cart-money text-start">
                                                                       Cost : <span className='text-danger'> {cartelement.price.toFixed(2)}</span>
                                                                    </div>
                                                                    <div className="pt-3">
                                                                    <button type="button" class="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                                                                            title="Remove item" onClick={() => {
                                                                                delProduct(key)
                                                                            }}>
                                                                            <i class="fas fa-trash"></i>
                                                                        </button>
                                                                        <button type="button" class="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                                                                            title="Move to the wish list" onClick={()=>{
                                                                                addWishlist(cartelement)
                                                                            }}>
                                                                            <i class="fas fa-heart"></i>
                                                                        </button>
                                                                    </div>
                                                                       
                                                                        
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6 col-6">
                                                                <div className="total-cart-money">
                                                                      Total <span className="pc-view">Cost </span> : <span className='text-danger'> {(cartelement.quantity * cartelement.price).toFixed(2)}</span>
                                                                    </div>
                                                                    <div className="d-flex align-items-center justify-content-center pt-3">
                                                                        <div className="quantity-btn mb-0" onClick={() => {
                                                                            handleAdd(key)
                                                                        }}>+</div>
                                                                        <div className="quantity">{cartelement.quantity}</div>
                                                                        <div className="quantity-btn mb-0" onClick={() => handleDel(key)}>-</div>
                                                                    </div>
                                                                   
                                                                </div>

                                                            </div>


                                                        </div>
                                                    </div>
                                                    {/* <div className="h2">{cartelement.title}</div> */}
                                                </div>
                                            </div>

                                        );

                                    })}
                                </div>


                                <div class="col-lg-4 mt-5">
                                    <div class="card mb-4">
                                        <div class="card-header py-3">
                                            <h5 class="mb-0">Summary</h5>
                                        </div>
                                        <div class="card-body">
                                            <ul class="list-group list-group-flush">
                                                <li
                                                    class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                    Products
                                                    <span>{TotalCart.toFixed(2)}</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                                    Shipping
                                                    <span>Free</span>
                                                </li>
                                                <li
                                                    class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                                    <div>
                                                        <strong>Total amount</strong>
                                                        <strong>
                                                            <p class="mb-0">(including VAT)</p>
                                                        </strong>
                                                    </div>
                                                    <span><strong>{TotalCart.toFixed(2)}</strong></span>
                                                </li>
                                            </ul>

                                            <button type="button" class="btn btn-primary btn-lg btn-block w-100" onClick={gotoCheckout}>
                                                Go to checkout
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>


                    </div>
            </section>
        )
    }

}

export default Cart