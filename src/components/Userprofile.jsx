import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from 'react-redux';
import handleCart from '../redux/reducer/handleCart';
const Userprofile = () => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    const informations = useSelector((state)=>state.handleCart);
    console.log(informations.firstname);
    return (
        <div>
            <section className="userprofile">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    {isAuthenticated ? <>
                                        <img src={user.img} alt={user.name} />
                                        <p>{user.name}</p>
                                        <p>{user.email}</p>
                                    </> : <h2>Please Enter Your self</h2>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Userprofile