import React from 'react'
import myaxios from '../utils/myaxios';

const PasswordReset = () => {

                const handleSubmit = (e) => {
                    e.preventDefault();
                    const data = Object.fromEntries(new FormData(e.target));
                    console.log(data);

                    myaxios.post(
                                "/send-otp",
                                data,
                            ).then((response)=>{
                                if(response.data.status === "success")
                                {
                                   //alert(response.data.message);

                                    localStorage.setItem("email", response.data.email)
                                }
                                else{
                                    alert(response.data);
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
                            <h4>EMAIL ADDRESS</h4>
                            <br/>
                            <label>Your email address</label>
                            <input id="email" name="email" placeholder="User Email" className="form-control" type="email"/>
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

export default PasswordReset