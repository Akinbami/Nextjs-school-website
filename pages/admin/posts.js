import React, {useState,useRef} from 'react';
// import ReactQuill from 'react-quill';
import Link from 'next/link';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import dateformat from 'dateformat';



import AdminLayout from '../../components/AdminLayout';
import MainNav from '../../components/AdminMainNav';


const GET_POSTS_API = "https://6j0n7kx92c.execute-api.us-east-2.amazonaws.com/dev/api/posts"

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
                                <div className="card-post__image" style={{"backgroundImage": "url('/images/content-management/1.jpeg')"}}>
                                  <a href="#" className="card-post__category badge badge-pill badge-dark">Business</a>
                                  <div className="card-post__author d-flex">
                                    <a href="#" className="card-post__author-avatar card-post__author-avatar--small" style={{"backgroundImage": "url('/images/avatars/0.jpg')"}}>Written by Anna Kunis</a>
                                  </div>
                                </div>
                                <div className="card-body">
                                  <h5 className="card-title">
                                    <a className="text-fiord-blue" href="#">{item.title}</a>
                                  </h5>
                                  <p className="card-text d-inline-block mb-3">{item.content.slice(0, 50)}</p>
                                  <span className="text-muted">{dateformat(item.date_posted, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</span>
                                </div>
                              </div>
                            </div>
                            )
                      })}
                      <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div className="card card-small card-post card-post--1">
                          <div className="card-post__image" style={{"backgroundImage": "url('/images/content-management/2.jpeg')"}}>
                            <a href="#" className="card-post__category badge badge-pill badge-info">Travel</a>
                            <div className="card-post__author d-flex">
                              <a href="#" className="card-post__author-avatar card-post__author-avatar--small" style={{"backgroundImage": "url('/images/avatars/1.jpg')"}}>Written by James Jamerson</a>
                            </div>
                          </div>
                          <div className="card-body">
                            <h5 className="card-title">
                              <a className="text-fiord-blue" href="#">Off tears are day blind smile alone had ready</a>
                            </h5>
                            <p className="card-text d-inline-block mb-3">Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...</p>
                            <span className="text-muted">29 February 2019</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div className="card card-small card-post card-post--1">
                          <div className="card-post__image" style={{"backgroundImage": "url('/images/content-management/3.jpeg')"}}>
                            <a href="#" className="card-post__category badge badge-pill badge-primary">Technology</a>
                            <div className="card-post__author d-flex">
                              <a href="#" className="card-post__author-avatar card-post__author-avatar--small" style={{"backgroundImage": "url('/images/avatars/2.jpg')"}}>Written by Jimmy Jackson</a>
                            </div>
                          </div>
                          <div className="card-body">
                            <h5 className="card-title">
                              <a className="text-fiord-blue" href="#">Difficult in delivered extensive at direction</a>
                            </h5>
                            <p className="card-text d-inline-block mb-3">Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...</p>
                            <span className="text-muted">29 February 2019</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div className="card card-small card-post card-post--1">
                          <div className="card-post__image" style={{"backgroundImage": "url('/images/content-management/4.jpeg')"}}>
                            <a href="#" className="card-post__category badge badge-pill badge-warning">Technology</a>
                            <div className="card-post__author d-flex">
                              <a href="#" className="card-post__author-avatar card-post__author-avatar--small" style={{"backgroundImage": "url('/images/avatars/3.jpg')"}}>Written by John James</a>
                            </div>
                          </div>
                          <div className="card-body">
                            <h5 className="card-title">
                              <a className="text-fiord-blue" href="#">It so numerous if he may outlived disposal</a>
                            </h5>
                            <p className="card-text d-inline-block mb-3">How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved ready road market resolution...</p>
                            <span className="text-muted">29 February 2019</span>
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



