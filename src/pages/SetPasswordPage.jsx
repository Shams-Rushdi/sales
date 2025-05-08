import React from 'react'
import myaxios from '../utils/myaxios'; // ✅ Add this line
import { useNavigate } from 'react-router';

const SetPasswordPage = () => {

    const navigate = useNavigate();
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        data.email = localStorage.getItem("email");
        console.log(data);

        myaxios.post(
                    "/reset-password",
                    data,
                ).then((response)=>{
                    if(response.data.status === "success")
                    {
                        console.log(response.data);
                        localStorage.setItem("token", response.data.token)
                        navigate("/dashboard");
                    }
                    else{
                        alert(response.data.message || "Something went wrong");
                    }
                }).catch((error)=>{
                    console.log(error)
                });
            }


  return (
    <div>
         <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-7 col-lg-6 center-screen">
                    <div className="card animated fadeIn w-90  p-4">
                <form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <h4>Reset Password</h4>
                            <br/>
                            <label>New Password</label>
                            <input id="password" name="password" placeholder="New Password" className="form-control" type="password"/>
                            <br/>
                            <button type="submit" className="btn w-100 float-end bg-gradient-primary">Next</button>
                        </div>
                </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SetPasswordPage