import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addCart, addWish } from "../redux/action";
import { productView } from "../redux/action";
import Skeleton from 'react-loading-skeleton'
import { RWebShare } from "react-web-share";
import { ShareSocial } from 'react-share-social'
import productsapi from './data.json';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import 'react-loading-skeleton/dist/skeleton.css'
import Alert from "./Alert";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    zIndex: 9999999,
    transform: 'translate(-50%, -50%)',
  },
};
const Products = (props) => {

  const [alert, setAlert] = useState(null);
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [urls, setUrls] = useState();
  const [isActive, setIsActive] = useState(false);


  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };
  const showAlert = (message, types) => {
    setAlert({
      msg: message,
      types: types
    })
  }



  const openModal = (e) => {

    setIsOpen(true);
    setUrls(e);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }




  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categorys, setCategorys] = useState();
  useEffect(() => {
    setData(productsapi);
    setFilter(productsapi);
  }, []);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
    showAlert("Item Added to Cart", "success");
    setTimeout(() => setAlert(null), 1000);
  }
  const addWishList = (product) => {
    dispatch(addWish(product));
    showAlert("Item Added to Wishlist", "danger");
    setTimeout(() => setAlert(null), 1000);
  }
  const productview = (product) => {
    dispatch(productView(product));
    console.log(product);
  }



  const pageurl = window.location.href;
  const Loading = () => {
    return (
      <>
        <div className='text-center text-danger mt-5' >Loading...</div>
        <div className="col-md-3">
          <Skeleton height={250} />
        </div>
        <div className="col-md-3">
          <Skeleton height={250} />
        </div>
        <div className="col-md-3">
          <Skeleton height={250} />
        </div>
        <div className="col-md-3">
          <Skeleton height={250} />
        </div>
      </>
    );
  };
  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  }
  const Showproducts = () => {
    return (
      <>
        <article className={isActive ? 'active categoryclass' : 'categoryclass'}>
          <div className="back-drop"></div>
          <div className="close-btn" onClick={() => { setIsActive(false) }}>
            <i class="fa fa-solid fa-xmark"></i>
          </div>
          <div className="sidecategory">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 px-0">

                <div className="heading">
                  <h4>Category</h4>
                </div>

                <ul>
                 <li onClick={() => setFilter(productsapi)}>All Products</li>
                  <li onClick={() => filterProduct("electronics")}>Electronics</li>
                  <li onClick={() => filterProduct("jewelery")}>Jewellery</li>
                  <li onClick={() => filterProduct("groceries")}>Groceries</li>
                  <li onClick={()=> filterProduct("furniture")}>Furniture</li>

                  <li onClick={() => filterProduct("skincare")}>Skin Care</li>
                  <li onClick={() => filterProduct("fragrances")}>Fragrances</li>
                  <li onClick={()=> filterProduct("laptops")}>Laptops</li>
                  <li onClick={()=> filterProduct("smartphones")}>Smart Phones</li>
                  <li onClick={() => filterProduct("men's clothing")}>Men's Clothing</li>
                  <li onClick={() => filterProduct("women's clothing")}>Women's Clothing</li>
                  <li onClick={()=> filterProduct("home-decoration")}>Home Decoration</li>
                </ul>
              </div>
            </div>
          </div>
          </div>
          
        </article>

        <div className="buttons text-center  mb-5 ">
          <button className="btn btn-login-logout yellow-btn me-2 mb-3 text-capitalize" onClick={handleClick}>
            Filter Category
          </button>
          <div className="btn btn-login-logout mb-3 yellow-btn" disable={true}>Products : {filter.length}</div>
      
        </div>
        {filter.map((product) => {
          return (
            <div className="col-lg-3 col-md-6 col-6 product" key={product.id}>
              <div class="card ">
                <a href={`/product/${product.id}`} >
                  <img
                    src={product.image}
                    class="card-img-top"
                    alt={product.title}
                    width="100%"
                  />
                </a>

                <div class="card-body px-0 pb-0">
                  <a href={`/product/${product.id}`} >
                    <h5
                      class="card-title"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title={product.title}
                    >
                      {product.title}
                    </h5>
                    <p class="card-text product-price d-flex align-items-center">
                      <span className="text-danger h5 me-15">
                        <del>₹{(product.price + 200).toFixed(0)} </del>
                      </span>{" "}
                      <span className="text-dark-blue h4">
                        ₹{(product.price).toFixed(0)}
                      </span>{" "}
                      <div className="ms-auto product-rating h4"><i className="fa fa-star"></i><span className="text-light"> {product.rating.rate}</span></div>
                    </p>
                  </a>
                  <div className="d-flex align-items-center small-justify">
                    {/* <a href={"products" + product.id} class="btn dark-blue-btn me-auto " data-toggle="tooltip" data-placement="bottom" title={"Add To Cart"} onClick={()=>{depositMoney(100)}}>Add To Cart</a> */}

                    <div
                      className="btn dark-blue-btn cart-btn me-auto"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title={"Add To Cart"}
                      onClick={() => {
                        addProduct(product)
                      }}
                    >
                      {" "}
                      <span className="pc-large-view"> Add To Cart</span>  <span className="mobile-small-view"><i class="fa fa-light fa-cart-shopping"></i></span>
                    </div>
                    <div
                      class="wishlist-btn text-danger "
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title={"Add To Wishlist"}
                      onClick={() => {
                        addWishList(product)
                      }}
                    >
                      <i class="fa fa-light fa-heart"></i>
                    </div>




                    <div
                      class=" text-dark-blue share-btn"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title={"Share Product"}

                      onClick={() => { openModal(pageurl + "product/" + product.id) }}
                    >

                      {" "}
                      <i class="fa fa-light fa-share-nodes"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <div className="container">
      <Alert alert={alert} />
      <div className="row">
        <div className="col-lg-12">
          <h1 className="display-6 font-weight-bold text-center mt-3 text-danger">Latest Products</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <Showproducts />}
      </div>


      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Indimart Share Page</h2>
        <button onClick={closeModal}>X</button>
        <ShareSocial
          url={urls}
          socialTypes={['facebook', 'twitter', 'reddit', 'linkedin', 'whatsapp', 'email', 'telegram']}
        />
      </Modal>
    </div>
  );
};

export default Products;
