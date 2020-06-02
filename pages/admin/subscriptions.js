import React, {useState,useRef} from 'react';
// import ReactQuill from 'react-quill';
import Link from 'next/link';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import LoadingOverlay from 'react-loading-overlay';
import dateformat from 'dateformat';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';





import AdminLayout from '../../components/AdminLayout';
import MainNav from '../../components/AdminMainNav';


const GET_SUBSCRIPTIONS_API = "https://gwh3ump9m0.execute-api.us-east-2.amazonaws.com/prod/api/subscriptions"


const AdminSubscriptions = (props) => {
    const [title,setTitle] = useState("");
    const [error,setError] = useState(null);
    const [isLoading,setIsLoading] = useState(false);

    const [id,setId] = useState("");

    const [cookies, setCookie] = useCookies(['token']);
    
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
                        <span className="text-uppercase page-subtitle">Components</span>
                        <h3 className="page-title">Subscriptions</h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="card card-small mb-4">
                          <div className="card-header border-bottom">
                            <h6 className="m-0">Active Users</h6>
                          </div>
                          <div className="card-body p-0 pb-3 text-center">
                            <table className="table mb-0">
                              <thead className="bg-light">
                                <tr>
                                  <th scope="col" className="border-bottom-0">#</th>
                                  <th scope="col" className="border-bottom-0">Email</th>
                                  <th scope="col" className="border-bottom-0">Date Posted</th>
                                </tr>
                              </thead>
                              <tbody>
                                {props.subscriptions.map(item => {
                                  return(
                                    <tr key={item.id}>
                                      <td>{item.id}</td>
                                      <td>{item.email}</td>
                                      <td>{dateformat(item.date_posted, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</td>
                                    </tr>
                                  )
                                })}
                              </tbody>
                            </table>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  
                </main>
            
            <style jsx>{`
              
            `}</style>
          </AdminLayout>
        </LoadingOverlay>
      )
    
}

AdminSubscriptions.getInitialProps = async function() {
  // const res = await fetch('https://0mi6xhcet3.execute-api.us-east-2.amazonaws.com/dev/api/designs');
  const res = await fetch(GET_SUBSCRIPTIONS_API);
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);
  console.log(data)

  return {
    subscriptions: data.map(entry => entry)
  };
};

export default AdminSubscriptions;



