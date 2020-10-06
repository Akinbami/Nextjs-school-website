import React, {useState,useRef} from 'react';
// import ReactQuill from 'react-quill';
import Link from 'next/link';
import Head from 'next/head';
import LoadingOverlay from 'react-loading-overlay'
import { FaRegEnvelope } from 'react-icons/fa';


import AdminLayout from '../../components/AdminLayout';

// import 'react-quill/dist/quill.snow.css'




const REGISTER_API = "https://nephkcspdl.execute-api.us-east-2.amazonaws.com/prod/api/login"

const Register = () => {
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);


    

    const handleChange=(value)=>{
      console.log("value ",value)
      setContent(value);
    }

    const register = () =>{
      if(username==""||password==""||email==""){
        setError("please complete the form and try again")
      }else{
        console.log("username and password ", username, password,email)
        setIsLoading(true)
        fetch(REGISTER_API, {
            method: 'POST',
            headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
                 username: username,
                 email: email,
                 password: password
               })
            })
            .then(response => response.json())
            .then(data =>{
              console.log(data);
              setIsLoading(false)
            
            })
            .catch(error =>{
              setIsLoading(false)
              console.log(error)
            }) 
      }
    }

    
    return(

        <LoadingOverlay
            active={isLoading}
            spinner
            text='Loading your content...'
            >
          

          <AdminLayout sidebar={false} >
	          <div className="w-100 d-flex justify-content-center">
	          	<div className="auth-card">
		   			      <div className="card card-small mb-4">
		                <div className="card-header border-bottom text-center">
		                    <h6 className="m-0">Register</h6>
		                </div>
		                <div className="login-group w-50 mx-auto">
                        {error!==null?<div className="alert alert-danger" role="alert">
                            {error}
                          </div>:""}
		                    <form>
		                        <strong className="text-muted d-block mb-2">Username</strong>
		                        <div className="input-group mb-3">
		                          <div className="input-group-prepend">
		                            <span className="input-group-text">@</span>
		                          </div>
		                          <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" /> 
		                        </div>

		                        <strong className="text-muted d-block mb-2">Email</strong>
		                        <div className="input-group mb-3">
		                          <div className="input-group-prepend">
		                            <span className="input-group-text"><FaRegEnvelope /></span>
		                          </div>
		                          <input type="email" className="form-control" placeholder="Emial" aria-label="email" aria-describedby="basic-addon1" /> 
		                        </div>

		                        <strong className="text-muted d-block mb-2">Password</strong>
		                        <div className="input-group mb-3">
		                          <div className="input-group input-group-seamless">
		                            <input type="password" className="form-control" id="form2-password" placeholder="Password" value="mySuperSecretPa$$word" />
		                            <span className="input-group-append">
		                              <span className="input-group-text">
		                                <i className="material-icons">lock</i>
		                              </span>
		                            </span>
		                          </div>
		                        </div>
		                        <div className="float-right">
		                        	<button type="button" class="mb-2 btn btn-sm btn-primary mr-1">Submit</button>
		                        </div>
		                        <p>Don't have an Account! <a href="/login">Login Here</a></p>
          						<p>Forgot <a href="#">Password?</a></p>
		                    </form>
		                </div>
		            </div>
		        </div>
	        </div>
            <style jsx>{`
              .auth-card{
                width: 30rem;
                margin-top: 5rem;
              }


              .login-group{
                padding-top: 10%;
                padding-bottom: 10%;
              }
            `}</style>
          </AdminLayout>
        </LoadingOverlay>
      )
    
}

export default Register;
