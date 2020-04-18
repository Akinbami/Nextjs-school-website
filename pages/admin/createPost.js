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


// import 'react-quill/dist/quill.snow.css'


// import FormHtmlEditor from '../components/FormHtmlEditor'
const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;
const QuillNoSSRWrapper = dynamic(
    import('react-quill'), { ssr: false, loading: () => <p>Loading ...</p> }
)
const POST_API = "https://6j0n7kx92c.execute-api.us-east-2.amazonaws.com/dev/api/post/create"


const CreatePost = (props) => {
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
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
                 content: content
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

    const saveDraft = () =>{
      if(title==""||content==""){
        setError("Empty title of Content")
      }else{
        console.log("content ", content)
        setIsLoading(true)
      }
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
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item px-3 pb-2">
                              <div className="custom-control custom-checkbox mb-1">
                                <input type="checkbox" className="custom-control-input" id="category1"  />
                                <label className="custom-control-label" htmlFor="category1">Uncategorized</label>
                              </div>
                              <div className="custom-control custom-checkbox mb-1">
                                <input type="checkbox" className="custom-control-input" id="category2"  />
                                <label className="custom-control-label" htmlFor="category2">Design</label>
                              </div>
                              <div className="custom-control custom-checkbox mb-1">
                                <input type="checkbox" className="custom-control-input" id="category3" />
                                <label className="custom-control-label" htmlFor="category3">Development</label>
                              </div>
                              <div className="custom-control custom-checkbox mb-1">
                                <input type="checkbox" className="custom-control-input" id="category4" />
                                <label className="custom-control-label" htmlFor="category4">Writing</label>
                              </div>
                              <div className="custom-control custom-checkbox mb-1">
                                <input type="checkbox" className="custom-control-input" id="category5" />
                                <label className="custom-control-label" htmlFor="category5">Books</label>
                              </div>
                            </li>
                          </ul>
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
                                  <input type="checkbox" className="custom-control-input" id="draft" />
                                  <label className="custom-control-label" htmlFor="draft"></label>
                                </div>
                              </span>
                              <span className="d-flex mb-2">
                                <i className="material-icons mr-1">visibility</i>
                                <strong className="mr-1">Visibility:</strong>
                                <strong className="text-success">Public</strong>
                                <div className="custom-control custom-checkbox mb-1 ml-auto">
                                  <input type="checkbox" className="custom-control-input" id="visibility" />
                                  <label className="custom-control-label" htmlFor="visibility"></label>
                                </div>
                              </span>
                              <span className="d-flex mb-2">
                                <i className="material-icons mr-1">calendar_today</i>
                                <strong className="mr-1">Schedule:</strong> Now
                                <div className="custom-control custom-checkbox mb-1 ml-auto">
                                  <input type="checkbox" className="custom-control-input" id="schedule" />
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
                              <button className="btn btn-sm btn-outline-accent" onClick={saveDraft}>
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
                
              `}</style>
            </AdminLayout>
            
          </LoadingOverlay>
        )
}


CreatePost.getInitialProps = async context => {
  // getting token from cookies
  const auth_token = cookies(context).token
  
  console.log("this is the token ",auth_token)

  const USER_API = "https://6j0n7kx92c.execute-api.us-east-2.amazonaws.com/dev/api/user"

  // getting current logged in user with the token
  const headers = {
                    method: 'GET',
                    headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json',
                          'Authorization': 'Bearer ' + auth_token
                    }
                  }
  const res = await fetch(USER_API,headers);
  const data = JSON.parse(await res.json());
  
  if (data.valid){
    console.log("valid token")
    return { loggedIn: true };
  }else{ 
    console.log("invalid token")
    return { loggedIn: false };
  }
};

export default CreatePost;


