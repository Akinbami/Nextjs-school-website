import React, {useState,useEffect,useRef} from 'react';
// import ReactQuill from 'react-quill';
import Link from 'next/link';
import Head from 'next/head';
import dynamic from 'next/dynamic'
import LoadingOverlay from 'react-loading-overlay'
import { useCookies } from 'react-cookie';
import cookies from 'next-cookies';
import fetch from 'isomorphic-unfetch';


import { useRouter } from 'next/router';



import AdminLayout from '../../components/AdminLayout';
import MainNav from '../../components/AdminMainNav';


const TESTIMONIAL_API = "https://nephkcspdl.execute-api.us-east-2.amazonaws.com/prod/api/testimonies"
const apiBaseURL = "https://nephkcspdl.execute-api.us-east-2.amazonaws.com/prod"


const CreatePost = (props) => {
    const [title,setTitle] = useState("");
    const [message,setMessage] = useState("");
    const [name, setName] = useState("")
    const [occupation, setOccupation] = useState("")
    const [isActive,setIsActive] = useState(true);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);


    const [cookies, setCookie] = useCookies(['token']);

    const router = useRouter()

    useEffect(()=>{
      if (props.loggedIn==false){
        window.location.href = '/admin/login'
      }
    })


    const handleSubmit = (e) =>{
      e.preventDefault()
      console.log("cookies ",cookies)
      let token = cookies['token']
      if(message==""||name==""||occupation==""){
        console.log("family", message,name)
        setError("Empty Name or message")
      }else{
        console.log("content ", message)
        setIsLoading(true)
        fetch(TESTIMONIAL_API, {
            method: 'POST',
            headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + token
            }, 
            body: JSON.stringify({
                 name: name,
                 message: message,
                 occupation: occupation,
                 is_active: isActive
               })
            })
            .then(response => response.json())
            .then(data =>{
              console.log(data);
              router.push('/admin/testimonies');
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
            
            <AdminLayout sidebar={true}>  
              
              <main className="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
                <MainNav />
                <div className="main-content-container container-fluid px-4">
                  {error==null?
                      "":<div className="alert alert-danger" role="alert">
                          {error}
                        </div>}
                  <div className="page-header row no-gutters py-4">
                    <div className="col-12 col-sm-4 text-center text-sm-left mb-0">
                      <span className="text-uppercase page-subtitle">Testimony</span>
                      <h3 className="page-title">Add New Testimony</h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-10 mb-0">
                      <div className="card card-small mb-4">
                        <div className="card-header border-bottom">
                          <h6 className="m-0">Groups</h6>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item px-3">
                            <form onSubmit={handleSubmit}>
                              <strong className="text-muted d-block mb-2">Name</strong>
                              <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">@</span>
                                </div>
                                <input type="text" className="form-control" onChange={e=>setName(e.target.value)} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" required /> 
                              </div>

                              <strong className="text-muted d-block mb-2">Occupation</strong>
                              <div className="input-group mb-3">
                                <input type="text" className="form-control"  onChange={e=>setOccupation(e.target.value)} placeholder="Occupation" aria-label="Occupation" aria-describedby="basic-addon1" required /> 
                              </div>

                              <strong className="text-muted d-block mb-2">Message</strong>
                              <div className="input-group mb-3">
                                <textarea className="form-control"  onChange={e=>setMessage(e.target.value)} id="exampleFormControlTextarea1" rows="3" required></textarea>
                              </div>

                              <strong className="text-muted d-block mb-2">Is Active</strong>
                              <div className="btn-group btn-group-toggle mb-3" data-toggle="buttons">
                                <label className="btn btn-white active">
                                  <input type="radio" name="options" id="option1" value={true} onChange={e=>setIsActive(e.target.value)} autocomplete="off" checked /> True </label>
                                <label className="btn btn-white">
                                  <input type="radio" name="options" id="option2" value={false}  onChange={e=>setIsActive(e.target.value)} autocomplete="off" /> False </label>
                              </div>
                              
                              <div className="input-group mb-3">
                                <button className="btn btn-primary btn-lg btn-block" type="submit">Submit</button>
                              </div>
                            </form>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </main>

              <style jsx>{`
                .files input {
                    outline: 2px dashed #92b0b3;
                    outline-offset: -10px;
                    -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;
                    transition: outline-offset .15s ease-in-out, background-color .15s linear;
                    padding: 120px 0px 85px 35%;
                    text-align: center !important;
                    margin: 0;
                    width: 100% !important;
                }
                .files input:focus{     outline: 2px dashed #92b0b3;  outline-offset: -10px;
                    -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;
                    transition: outline-offset .15s ease-in-out, background-color .15s linear; border:1px solid #92b0b3;
                 }
                .files{ position:relative}
                .files:after {  pointer-events: none;
                    position: absolute;
                    top: 60px;
                    left: 0;
                    width: 50px;
                    right: 0;
                    height: 56px;
                    content: "";
                    background-image: url(https://image.flaticon.com/icons/png/128/109/109612.png);
                    display: block;
                    margin: 0 auto;
                    background-size: 100%;
                    background-repeat: no-repeat;
                }
                .color input{ background-color:#f1f1f1;}
                .files:before {
                    position: absolute;
                    bottom: 10px;
                    left: 0;  pointer-events: none;
                    width: 100%;
                    right: 0;
                    height: 57px;
                    content: " or drag it here. ";
                    display: block;
                    margin: 0 auto;
                    color: #2ea591;
                    font-weight: 600;
                    text-transform: capitalize;
                    text-align: center;
                }
              `}</style>
            </AdminLayout>
            
          </LoadingOverlay>
        )
}


CreatePost.getInitialProps = async context => {
  // getting token from cookies
  const auth_token = cookies(context).token
  
  console.log("this is the token ",auth_token)

  const AUTHORIZE = "https://nephkcspdl.execute-api.us-east-2.amazonaws.com/prod/api/secret"

  // getting current logged in user with the token
  const headers = {
                    method: 'GET',
                    headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json',
                          'Authorization': 'Bearer ' + auth_token
                    }
                  }
  const res = await fetch(AUTHORIZE,headers);
  const data = await res.json();
  console.log(data)
  
  if (data.valid){
    console.log("valid token")
    return { loggedIn: true };
  }else{ 
    console.log("invalid token")
    return { loggedIn: false };
  }
};

export default CreatePost;


