import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addCart , addWish } from "../redux/action";
import { useParams } from 'react-router-dom';
import productsapi from './data.json';
// import { useDispatch, useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import axios from "axios";
import Alert from './Alert';

const ProductView = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    const { productId } = useParams();
    // console.log(productId);

    const [alert, setAlert] = useState(null);
    const showAlert = (message, types) => {
        setAlert({
            msg: message,
            types: types
        })
    }

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
        showAlert("item Added to Cart", "primary");
        setTimeout(() => setAlert(null), 1000);
    }

    const addWishlist = (product) => {
        dispatch(addWish(product));
        showAlert("item Added to Wishlist", "danger");
        setTimeout(() => setAlert(null), 1000);
    }



    const Loading = () => {
        return (
            <>
                <div className='text-center text-danger mt-5' >Loading...</div>
                <div className="row">
                    <div className="col-lg-12">
                        <Skeleton height={50} width={160} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="img-box">
                            <Skeleton height={250} />
                        </div>

                    </div>


                    <div className="col-lg-6 col-12">
                        <div className="img-box">
                            <Skeleton height={250} />
                        </div>

                    </div>
                </div>
                {/* <div className="col-md-3">
                <Skeleton height={250}/>
               </div>
               <div className="col-md-3">
                <Skeleton height={250}/>
               </div>
               <div className="col-md-3">
                <Skeleton height={250}/>
               </div> */}
            </>
        );
    };
    const Showproducts = () => {
        return (
            <>

                <Alert alert={alert} />

                {productsapi.map((product) => {
                    if (product.id == parseInt(productId)) {
                        return (
                            <div className="col-lg-12 col-md-12 col-12 product-main mt-4 product-view" key={product.id}>


                                <div className="row">
                                    <div className="col-lg-12 mx-auto text-center">
                                        <div className="btn btn-outline-dark mx-auto text-center mb-3">Category : {product.category}</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="img-box">
                                            <img src={product.image} class="card-img-top" alt={product.title} width="100%" />
                                        </div>

                                    </div>
                                    <div className="col-lg-6 p-3">
                                        <h5 class="card-title product-title" data-toggle="tooltip" data-placement="bottom" title={product.title}>{product.title}</h5>
                                        <p class="card-text product-price d-flex"><span className="text-danger h5 me-15"><del>₹{product.price + 200} </del></span> <span className="text-dark-blue h4">₹{product.price}</span>  <div className="ms-auto product-rating h4 mb-0"><i className="fa fa-star"></i><span className="text-light"> {product.rating.rate}</span></div> </p>

                                        <div className="d-flex align-items-center mt-3">




                                            <div className="btn dark-blue-btn me-auto" data-toggle="tooltip" data-placement="bottom" title={"Add To Cart"} onClick={() => addProduct(product)}> Add To Cart</div>
                                            <div class="wishlist-btn text-danger " data-toggle="tooltip" data-placement="bottom" title={"Add To Wishlist"} onClick={() => addWishlist(product)}><i class="fa fa-light fa-heart"></i></div>
                                            <a href={"product" + product.id} class=" text-dark-blue share-btn" data-toggle="tooltip" data-placement="bottom" title={"Share Product"}>  <i class="fa fa-light fa-share-nodes"></i></a>


                                        </div>
                                        <div className="description-product mt-3">
                                            <div className="product-title">
                                                <h4 className='text-danger'> Product Description</h4>
                                            </div>
                                            <p className=''>{product.description}</p>
                                        </div>

                                    </div>
                                </div>






                            </div>
                        )
                    }
                })}



                {/* <div className="col-lg-12 col-md-12 col-12 product-main mt-4 product-view" key={filter.id}>

               
                    <div className="row">
                        <div className="col-lg-12 mx-auto text-center">
                            <div className="btn btn-outline-dark mx-auto text-center mb-3">Category : {filter.category}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="img-box">
                                <img src={filter.image} class="card-img-top" alt={filter.title} width="100%" />
                            </div>

                        </div>
                        <div className="col-lg-6 p-3">
                            <h5 class="card-title product-title" data-toggle="tooltip" data-placement="bottom" title={filter.title}>{filter.title}</h5>
                            <p class="card-text product-price"><span className="text-danger h5 me-15"><del>₹{filter.price + 200} </del></span> <span className="text-dark-blue h4">₹{filter.price}</span> </p>

                            <div className="d-flex align-items-center mt-3">




                                <div className="btn dark-blue-btn me-auto" data-toggle="tooltip" data-placement="bottom" title={"Add To Cart"}  onClick={() => addProduct(filter)}> Add To Cart</div>
                                <a href={"products" + filter.id} class="wishlist-btn text-danger " data-toggle="tooltip" data-placement="bottom" title={"Add To Wishlist"}><i class="fa fa-light fa-heart"></i></a>
                                <a href={"product" + filter.id} class=" text-dark-blue share-btn" data-toggle="tooltip" data-placement="bottom" title={"Share Product"}>  <i class="fa fa-light fa-share-nodes"></i></a>


                            </div>
                            <div className="description-product mt-3">
                                <div className="product-title">
                                    <h4 className='text-danger'> Product Description</h4>
                                </div>
                                <p className=''>{filter.description}</p>
                            </div>

                        </div>
                    </div>



               


            </div> */}





            </>
        )
    }
    return (
        <div className="container">
            {/* <div className="row">
            <div className="col-lg-12">
              <h1 className="display-6 font-weight-bold">Latest Products</h1>
            </div>
          </div> */}
            <div className="row justify-content-center">
                {loading ? <Loading /> : <Showproducts />}
            </div>
        </div>
    );

}


export default ProductView