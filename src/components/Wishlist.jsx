import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { delWish , addCart} from "../redux/action";
import { useState } from "react";
import { ShareSocial } from 'react-share-social'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
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
const Wishlist = () => {


  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [urls, setUrls] = useState();
  const openModal = (e) => {

    setIsOpen(true);
    setUrls(e);
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message, types) => {
    setAlert({
      msg: message,
      types: types
    })
  }


  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const dispatch = useDispatch();
  const delWishList = (product) => {
    dispatch(delWish(product));
    showAlert("Your Wishlist Deleted Successfully", "danger");
    setTimeout(() => setAlert(null), 1000);
  }

const addtoCart =(product)=>{
dispatch(addCart(product));
showAlert("Item Added To Cart Successfully", "success");
setTimeout(() => setAlert(null), 1000);
}

  const wishitems = useSelector((state) => state.handleCart);
  console.log(wishitems);
  const pageurl = window.location.href;
  if (wishitems.Wishs.length === 0) {

    return (
      <>
     
        <section className='empty-cart'>
          <div className="container" >
            <div className="row">
              <div className="col-lg-8 col-10 p-4 for-border mx-auto">
                <div className="empty-cart-img-big mx-auto mb-3">
                  <img src="/assets/images/emoji.png" alt=" empty cart" width="100%" />

                </div>
                <div className="d-flex justify-content-center">

                  <h1 className='text-center'> Your Wishlist Is Empty</h1>
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
    return (
      <>
       <Alert alert={alert}/>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="display-6 font-weight-bold text-center my-3 text-danger">Your Wishlist</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            {wishitems.Wishs.map((items, key) => {
              return (
                <div className="col-lg-3 col-md-6 col-6 product" key={items.id}>
                  <div class="card ">
                    <a href={`/product/${items.id}`} >
                      <img
                        src={items.image}
                        class="card-img-top"
                        alt={items.title}
                        width="100%"
                      />
                    </a>

                    <div class="card-body px-0 pb-0">
                      <a href={`/product/${items.id}`} >
                        <h5
                          class="card-title"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title={items.title}
                        >
                          {items.title}
                        </h5>
                        <p class="card-text product-price">
                          <span className="text-danger h5 me-15">
                            <del>₹{items.price + 200} </del>
                          </span>{" "}
                          <span className="text-dark-blue h4">
                            ₹{items.price}
                          </span>{" "}
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
                            addtoCart(items)
                          }}
                        >
                          {" "}
                          <span className="pc-large-view"> Add To Cart</span>  <span className="mobile-small-view"><i class="fa fa-light fa-cart-shopping"></i></span>
                        </div>
                        <div
                          class="wishlist-btn text-danger "
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title={"Delete To Wishlist"}
                          onClick={() => {
                            delWishList(key)
                          }}
                        >
                          <i class="fa fa-solid fa-heart-circle-xmark"></i>
                        </div>




                        <div
                          class=" text-dark-blue share-btn"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title={"Share Product"}

                          onClick={() => { openModal(pageurl) }}
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

      </>
    )
  }

}
export default Wishlist