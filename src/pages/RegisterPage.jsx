import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import myaxios from "../utils/myaxios";
import { useNavigate  } from 'react-router';

{/* 
import { Link } from 'react-router-dom';
<Link to="/userRegistration.html">Sign Up</Link>
<Link to="/sendOtp.html">Forget Password</Link> */}

const RegisterPage = () => {

  const navigate  = useNavigate();
  
    const handleSubmit = (e) =>{
        e.preventDefault();
        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata);

        //console.log(data);

        myaxios.post(
            "/user-registration",
            data,
        ).then((response)=>{
            if(response.data.status === "success")
            {
                localStorage.setItem("token", response.data.token)
                alert(response.data.message);
            }
            else{
                alert(response.data.message);
            }
        }).catch((error)=>{
            console.log(error)
        });
    }
  return (
    <div>
    <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-10 center-screen">
                    <div className="card animated fadeIn w-100 p-3">
                        <div className="card-body">
                            <h4>Sign Up</h4>
                            <hr/>
                            <form onSubmit={handleSubmit}> 
                            <div className="container-fluid m-0 p-0">
                                <div className="row m-0 p-0">
                                    <div className="col-md-4 p-2">
                                        <label>Email Address</label>
                                        <input id="email" placeholder="User Email" name="email" className="form-control" type="email"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>First Name</label>
                                        <input id="firstName" placeholder="First Name" name="firstName" className="form-control" type="text"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Last Name</label>
                                        <input id="lastName" placeholder="Last Name" name="lastName" className="form-control" type="text"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Mobile Number</label>
                                        <input id="mobile" placeholder="Mobile" name="mobile" className="form-control" type="mobile"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Password</label>
                                        <input id="password" placeholder="User Password" name="password" className="form-control" type="password"/>
                                    </div>
                                </div>
                                <div className="row m-0 p-0">
                                    <div className="col-md-4 p-2">
                                        <button type="submit" className="btn mt-3 w-100  bg-gradient-primary">Complete</button>
                                    </div>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
  )
}

export default RegisterPage