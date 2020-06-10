import React, {useState,useRef} from 'react';
// import ReactQuill from 'react-quill';
import Link from 'next/link';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import dateformat from 'dateformat';



import AdminLayout from '../../components/AdminLayout';
import MainNav from '../../components/AdminMainNav';


const GET_POSTS_API = "https://gwh3ump9m0.execute-api.us-east-2.amazonaws.com/prod/api/posts"

const AdminPost = (props) => {
    const [title,setTitle] = useState("");
    const [error,setError] = useState(null);

    
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
                      <div className="col-12 col-sm-4 text-center text-sm-left mb-0">
                        <span className="text-uppercase page-subtitle">Components</span>
                        <h3 className="page-title">Blog Posts</h3>
                      </div>
                    </div>
                    <div className="row">
                      {props.posts.map(item => {
                        return(
                            <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={item.id}>
                              <div className="card card-small card-post card-post--1">
                                <div className="card-post__image" style={{"backgroundImage": `url(${item.image_url})`}}>
                                  <a href="#" className="card-post__category badge badge-pill badge-dark">{item.category}</a>
                                  {item.is_draft?<a href="#" className="card-post__category badge badge-pill badge-warning m-top">draft</a>:""}
                                  <div className="card-post__author d-flex">
                                    <a href="#" className="card-post__author-avatar card-post__author-avatar--small" style={{"backgroundImage": "url('/favicon/apple-icon.png')"}}>Written by Anna Kunis</a>
                                  </div>
                                </div>
                                <div className="card-body">
                                  <h5 className="card-title">
                                    <Link href={`/admin/p/${item.id}`}>
                                      <a className="text-fiord-blue" href="#">{item.title}</a>
                                    </Link>
                                  </h5>
                                  <span className="text-muted">{dateformat(item.date_posted, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</span>
                                </div>
                              </div>
                            </div>
                            )
                      })}
                    </div>
                    
                  </div>
                </main>
            
            <style jsx>{`
              .card-post__image{
                background-size: 100% 100% !important;
              }
              .m-top{
                margin-top: 1.5rem;
                text-align: right;
              }
              p{
                margin-bottom: .4rem !important;
              }
            `}</style>
          </AdminLayout>
      )
    
}

AdminPost.getInitialProps = async function() {
  // const res = await fetch('https://0mi6xhcet3.execute-api.us-east-2.amazonaws.com/dev/api/designs');
  const res = await fetch(GET_POSTS_API);
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);
  console.log(data)

  return {
    posts: data.map(entry => entry)
  };
};

export default AdminPost;



