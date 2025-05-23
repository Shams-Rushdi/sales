import React from 'react';
import { Link,useNavigate } from 'react-router';
import axios from 'axios';
import myaxios from "../utils/myaxios";


const LoginPage = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata);

        //console.log(data);

        myaxios.post(
            "/user-login",
            data,
        ).then((response)=>{
            if(response.data.status === "success")
            {
                navigate("/dashboard");
            
                localStorage.setItem("token", response.data.token)
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
            <div className="col-md-7 animated fadeIn col-lg-6 center-screen">
                <div className="card w-90  p-4">
                    <div className="card-body">
                        <form  onSubmit={handleSubmit}> 
        
                        <h4>SIGN IN</h4>
                        <br/>
                        <input id="email" name="email" placeholder="User Email" className="form-control" type="email"/>
                        <br/>
                        <input id="password" name="password" placeholder="User Password" className="form-control" type="password"/>
                        <br/>
                        <button type="submit" className="btn w-100 bg-gradient-primary">Next</button>
                        <hr/>
                        <div className="float-end mt-3">
                            <span>
                                <Link className="text-center ms-3 h6" to="/register">Sign Up </Link>
                                <span className="ms-1">|</span>
                                <Link className="text-center ms-3 h6" to="/reset-password">Forget Password</Link>
                            </span>
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

export default LoginPage