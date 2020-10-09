import React, {useState,useRef} from 'react';
// import ReactQuill from 'react-quill';
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import fetch from 'isomorphic-unfetch';
import dateformat from 'dateformat';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';





import AdminLayout from '../../../components/AdminLayout';
import MainNav from '../../../components/AdminMainNav';


const POST_API = "https://nephkcspdl.execute-api.us-east-2.amazonaws.com/prod/api/posts"

const AdminSinglePost = (props) => {
    const [title,setTitle] = useState("");
    const [error,setError] = useState(null);
    const [isLoading,setIsLoading] = useState(false);

    const [cookies, setCookie] = useCookies(['token']);
    const router = useRouter()



    const handleDelete = () =>{
      console.log("delete")
      setIsLoading(true)
      let token = cookies['token']
      const API = POST_API+`/${props.data.id}`
      console.log("this is the update api ",API)
      fetch(API, {
          method: 'DELETE',
          headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
          }, 
          body: JSON.stringify({
               title: title,
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

    const handleEdit =(e)=>{
      e.preventDefault();
      console.log("clicked")
      // router.push('/admin/posts')
      router.push(`/admin/editPost?id=${props.data.id}`)
    }

    
    return(
        
          <AdminLayout sidebar={true}>  
                
                <main className="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
                  <MainNav />
                  <div className="main-content-container container-fluid px-4">
                    {error==null?
                        "":<div className="alert alert-danger" role="alert">
                            {error}
                          </div>}
                    <div className="page-header row no-gutters py-4">
                      <div className="col-12 text-center text-sm-left mb-0">
                        <span className="text-uppercase page-subtitle">Blog</span>
                        <h3 className="page-title">{props.data.title}</h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-9 col-md-12">
                        <div className="card card-small mb-3">
                          <div className="card-body">
                            <div dangerouslySetInnerHTML={{__html: props.data.content}}></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-12">
                        
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
                                <button className="btn btn-sm btn-outline-danger" data-toggle="modal" data-target="#exampleModal">
                                  <i className="material-icons">save</i> Delete</button>
                                  <a href={`/admin/editPost?id=${props.data.id}`} className="btn btn-sm btn-outline-accent ml-auto">
                                  <i className="material-icons">file_copy</i> Edit</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Are you sure you want to delete?</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          {props.data.title}
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-outline-success" data-dismiss="modal">Cancel</button>
                          <button type="button" className="btn btn-outline-danger"  onClick={handleDelete}>Delete</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </main>
            
            <style jsx global>{`
              p{
                margin-bottom: .4rem !important;
              }
            `}</style>
          </AdminLayout>
      )
    
}

AdminSinglePost.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://nephkcspdl.execute-api.us-east-2.amazonaws.com/prod/api/posts/${id}`);
  // const res = await fetch(GET_POSTS_API);
  const data = await res.json();

  console.log(`Fetched post: ${data.title}`);

  return { data };
};

export default AdminSinglePost;



