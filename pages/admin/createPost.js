import React, {useState,useEffect,useRef} from 'react';
// import ReactQuill from 'react-quill';
import Link from 'next/link';
import Head from 'next/head';
import dynamic from 'next/dynamic'
import LoadingOverlay from 'react-loading-overlay';
import { useCookies } from 'react-cookie';
import cookies from 'next-cookies';
import fetch from 'isomorphic-unfetch';


import { useRouter } from 'next/router';



import AdminLayout from '../../components/AdminLayout';
import MainNav from '../../components/AdminMainNav';


// import 'react-quill/dist/quill.snow.css'


// import FormHtmlEditor from '../components/FormHtmlEditor'
const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;
const QuillNoSSRWrapper = dynamic(
    import('react-quill'), { ssr: false, loading: () => <p>Loading ...</p> }
)
const POST_API = "https://gwh3ump9m0.execute-api.us-east-2.amazonaws.com/prod/api/posts"
const apiBaseURL = "https://z2evkvjux4.execute-api.us-east-2.amazonaws.com/prod"


const CreatePost = (props) => {
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const [category, setCategory] = useState("Uncategorized")
    const [imageLocation, setImageLocation] = useState("")
    const [draft,setDraft] = useState(false);
    const [isPublish,setIsPublish] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);


    const [cookies, setCookie] = useCookies(['token']);

    const router = useRouter()

    useEffect(()=>{
      if (props.loggedIn==false){
        window.location.href = '/admin/login'
      }
    })


    const handleChange=(value)=>{
      console.log("value ",value)
      setContent(value);
    }

    const publish = () =>{
      console.log("cookies ",cookies)
      let token = cookies['token']
      if(title==""||content==""){
        console.log("family", title,content)
        setError("Empty title or Content")
      }else{
        console.log("content ", content)
        setIsLoading(true)
        fetch(POST_API, {
            method: 'POST',
            headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + token
            }, 
            body: JSON.stringify({
                 title: title,
                 content: content,
                 image_url: imageLocation,
                 category: category,
                 is_draft: draft,
                 is_published: publish
               })
            })
            .then(response => response.json())
            .then(data =>{
              console.log(data);
              router.push('/admin/posts');
              setIsLoading(false)
            
            })
            .catch(error =>{
              setIsLoading(false)
              console.log(error)
            }) 
      }
    }

    const handleCategory =(e)=>{
      console.log(e.target.id)
      setCategory(e.target.id)
    }

    const handleDraft = (e) =>{
      e.preventDefault();
      setDraft(!draft)
      console.log(e.target.checked)
    }

    const handleImageUpload = (e)=>{
      e.preventDefault()
      console.log(e.target.files[0].name)
      console.log(e.target.files[0].type)
      let file = e.target.files[0]

      var reader = new FileReader();
      reader.addEventListener('loadend', function(e){
        fetch(apiBaseURL+"/requestUploadURL", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: file.name,
            type: file.type
          })
        })
        .then(function(response){
          return response.json();
        })
        .then(function(json){
          console.log(json)
          setImageLocation('https://slsuploadabi.s3.us-east-2.amazonaws.com/'+ file.name)
          return fetch(json.uploadURL, {
            method: "PUT",
            body: new Blob([reader.result], {type: file.type})
          })
        })
        .catch(error =>{
              setIsLoading(false)
              console.log(error)
            })
      });
      reader.readAsArrayBuffer(file);

      // const UPLOAD_API = "https://gwh3ump9m0.execute-api.us-east-2.amazonaws.com/prod/api/image/upload"
      // let token = cookies['token']
      // const form_data = new FormData();
      // form_data.append('image', e.target.files[0]);
      // fetch(UPLOAD_API, {
      //     method: 'POST',
      //     headers: {
      //             'Authorization': 'Bearer ' + token
      //       },
      //     body: form_data
      // })
      // .then(res => res.json())
      // .then(json => console.log(json))
      // .catch(err => console.error(err));

    }

    const modules = {
      toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' },
          { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image', 'video'],
        ['clean']
      ],
      clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false
      }
    }
    /*
     * Quill editor formats
     * See https://quilljs.com/docs/formats/
     */
    const formats = [
      'header', 'font', 'size',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image', 'video'
    ]

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
                      <span className="text-uppercase page-subtitle">Blog Posts</span>
                      <h3 className="page-title">Add New Post</h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-9 col-md-12">
                      <div className="card card-small mb-3">
                        <div className="card-body">
                          <form className="add-new-post">
                            <input className="form-control form-control-lg mb-3" type="text" placeholder="Your Post Title" onChange={e=>setTitle(e.target.value)} />
                            <div className="add-new-post__editor mb-1">
                               <QuillNoSSRWrapper
                                  modules={modules}
                                  formats={formats}
                                  theme='snow'
                                  onChange={handleChange}
                                />
                            </div>
                            <div className="form-group files color">
                              <label>Upload Your Image </label>
                              <input data-required="image" type="file" className="form-control" multiple="" onChange={handleImageUpload}/>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-12">
                      <div className='card card-small mb-3'>
                        <div className="card-header border-bottom">
                          <h6 className="m-0">Categories</h6>
                        </div>
                        <div className='card-body p-0'>
                          <fieldset className="p-3">
                                <div className="form-check custom-radio mb-1">
                                  <input className="form-check-input" type="radio" name="category" onChange={e=>setCategory(e.target.value)} id="Academia" value="Academia" />
                                  <label className="form-check-label" for="Academia">
                                    Academia
                                  </label>
                                </div>
                                <div className="form-check custom-radio mb-1">
                                  <input className="form-check-input" type="radio" name="category" onChange={e=>setCategory(e.target.value)} id="Social" value="Social"  />
                                  <label className="form-check-label" for="Social">
                                    Social
                                  </label>
                                </div>
                                <div className="form-check custom-radio mb-1">
                                  <input className="form-check-input" type="radio" name="category" onChange={e=>setCategory(e.target.value)} id="Behaviour" value="Behaviour"  />
                                  <label className="form-check-label" for="Behaviour">
                                    Behaviour
                                  </label>
                                </div>
                                <div className="form-check custom-radio mb-1">
                                  <input className="form-check-input" type="radio" name="category" onChange={e=>setCategory(e.target.value)} id="sensorimotor" value="sensorimotor"  />
                                  <label className="form-check-label" for="sensorimotor">
                                    sensorimotor
                                  </label>
                                </div>
                                <div className="form-check custom-radio mb-1">
                                  <input className="form-check-input" type="radio" name="category" onChange={e=>setCategory(e.target.value)} id="Other" value="Other"  />
                                  <label className="form-check-label" for="Other">
                                    Other
                                  </label>
                                </div>
                              </fieldset>
                        </div>
                      </div>
                      <div className='card card-small mb-3'>
                        <div className="card-header border-bottom">
                          <h6 className="m-0">Actions</h6>
                        </div>
                        <div className='card-body p-0'>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item p-3">
                              <span className="d-flex mb-2">
                                <i className="material-icons mr-1">flag</i>
                                <strong className="mr-1">Status:</strong> Draft
                                <div className="custom-control custom-checkbox mb-1 ml-auto">
                                  <input type="checkbox" className="custom-control-input" checked={draft} onChange={e=>setDraft(!draft)} id="draft" />
                                  <label className="custom-control-label" htmlFor="draft"></label>
                                </div>
                              </span>
                              <span className="d-flex mb-2">
                                <i className="material-icons mr-1">calendar_today</i>
                                <strong className="mr-1">Schedule:</strong> Now
                                <div className="custom-control custom-checkbox mb-1 ml-auto">
                                  <input type="checkbox" className="custom-control-input" onChange={e=>setIsPublish(e.target.value)} id="schedule" />
                                  <label className="custom-control-label" htmlFor="schedule"></label>
                                </div>                              
                              </span>
                              <span className="d-flex">
                                <i className="material-icons mr-1">score</i>
                                <strong className="mr-1">Readability:</strong>
                                <strong className="text-warning">Ok</strong>
                              </span>
                            </li>
                            <li className="list-group-item d-flex px-3">
                              <button className="btn btn-sm btn-outline-accent" onClick={handleDraft}>
                                <i className="material-icons">save</i> Save Draft</button>
                              <button className="btn btn-sm btn-accent ml-auto" onClick={publish}>
                                <i className="material-icons">file_copy</i> Publish</button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <footer className="main-footer d-flex p-2 px-3 bg-white border-top">
                  <ul className="nav">
                    <li className="nav-item">
                      <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Products</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Blog</a>
                    </li>
                  </ul>
                  <span className="copyright ml-auto my-auto mr-2">Copyright © 2018
                    <a href="https://designrevision.com" rel="nofollow">DesignRevision</a>
                  </span>
                </footer>
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

  const AUTHORIZE = "https://gwh3ump9m0.execute-api.us-east-2.amazonaws.com/prod/api/secret"

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


