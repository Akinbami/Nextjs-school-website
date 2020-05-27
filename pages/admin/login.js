import React, {useState,useRef} from 'react';
// import ReactQuill from 'react-quill';
import Link from 'next/link';
import Head from 'next/head';
import LoadingOverlay from 'react-loading-overlay'
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import { Base64 } from 'js-base64';

import AdminLayout from '../../components/AdminLayout';

// import 'react-quill/dist/quill.snow.css'




const LOGIN_API = "https://gwh3ump9m0.execute-api.us-east-2.amazonaws.com/prod/api/login"
// const cookies = new Cookies();

const Login = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);
    const [cookies, setCookie] = useCookies(['token']);

    const router = useRouter()

    const handleChange=(value)=>{
      console.log("value ",value)
      setContent(value);
    }

    const login = () =>{

      if(username==""||password==""){
      	console.log(username, password)
        setError("please complete the form and try again")
      }else{
        console.log("username and password ", username, password)
        setIsLoading(true)

        fetch(LOGIN_API, {
            method: 'POST',
            headers: {
                  "Authorization": `Basic ${Base64.encode(`${username}:${password}`)}`
              }
            })
            .then(response => response.json())
            .then(data =>{
              	console.log(data);
              	if(data.status){
                  let token = data.access_token;
                  setCookie('token', token);
                  setError(null);
                  router.push('/admin/posts')
              	}else{
              		setIsLoading(false)
                  setError(data.message);
	              	// setIsLoading(false)
              	}
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
          

          <AdminLayout sidebar={false}>
	          <div className=" w-100 d-flex justify-content-center">
	          	<div className="auth-card">
    		   			<div className="card card-small mb-4">
    		                <div className="card-header border-bottom text-center">
    		                    <h6 className="m-0">Login</h6>
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
		                          <input type="text" className="form-control" onChange={e=>setUsername(e.target.value)} aria-label="Username" aria-describedby="basic-addon1" /> 
		                        </div>

		                        <strong className="text-muted d-block mb-2">Password</strong>
		                        <div className="input-group mb-3">
		                          <div className="input-group input-group-seamless">
		                            <input type="password" className="form-control" onChange={e=>setPassword(e.target.value)} id="password"  />
		                            <span className="input-group-append">
		                              <span className="input-group-text">
		                                <i className="material-icons">lock</i>
		                              </span>
		                            </span>
		                          </div>
		                        </div>
		                        <div className="float-right">
		                        	<button type="button" onClick={()=>login()} class="mb-2 btn btn-sm btn-primary mr-1">Submit</button>
		                        </div>
		                        <p>Don't have an Account! <a href="/register">Sign Up Here</a></p>
          						      <p>Forgot <a href="#">Password?</a></p>
  		                    </form>
    		                </div>
    		            </div>
    		        </div>
    	        </div>
            <style jsx>{`
              .auth-card{
              	width: 30rem;
              	margin-top: 10rem;
                margin-bottom: 10rem;
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

export default Login;
