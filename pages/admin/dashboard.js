import React, {useState,useRef} from 'react';
// import ReactQuill from 'react-quill';
import Link from 'next/link';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import dateformat from 'dateformat';



import AdminLayout from '../../components/AdminLayout';
import MainNav from '../../components/AdminMainNav';


const GET_STAT_API = "https://nephkcspdl.execute-api.us-east-2.amazonaws.com/prod/api/statistics"

const AdminDashboard = (props) => {
    const [title,setTitle] = useState("");
    const [error,setError] = useState(null);

    
    return(
        
          <AdminLayout sidebar={true}> 
            <Head>
              <link rel="stylesheet" id="main-stylesheet" data-version="1.1.0" href="/styles/shards-dashboards.1.1.0.min.css" />
            </Head>

                
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
                    <h3 className="page-title">Dashboard</h3>
                  </div>
                </div>
                <div className="row">
                    <div className="col-lg col-md-6 col-sm-6 mb-4">
                      <div className="stats-small stats-small--1 card card-small">
                        <div className="card-body p-0 d-flex">
                          <div className="d-flex flex-column m-auto">
                            <div className="stats-small__data text-center">
                              <span className="stats-small__label text-uppercase">Contacts</span>
                              <h6 className="stats-small__value count my-3">{props.statistics.contacts}</h6>
                            </div>
                            <div className="stats-small__data">
                              <span className="stats-small__percentage stats-small__percentage--increase">4.7%</span>
                            </div>
                          </div>
                          <canvas height="120" className="blog-overview-stats-small-1"></canvas>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg col-md-6 col-sm-6 mb-4">
                      <div className="stats-small stats-small--1 card card-small">
                        <div className="card-body p-0 d-flex">
                          <div className="d-flex flex-column m-auto">
                            <div className="stats-small__data text-center">
                              <span className="stats-small__label text-uppercase">Subscibers</span>
                              <h6 className="stats-small__value count my-3">{props.statistics.subscriptions}</h6>
                            </div>
                            <div className="stats-small__data">
                              <span className="stats-small__percentage stats-small__percentage--increase">12.4%</span>
                            </div>
                          </div>
                          <canvas height="120" className="blog-overview-stats-small-2"></canvas>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg col-md-4 col-sm-6 mb-4">
                      <div className="stats-small stats-small--1 card card-small">
                        <div className="card-body p-0 d-flex">
                          <div className="d-flex flex-column m-auto">
                            <div className="stats-small__data text-center">
                              <span className="stats-small__label text-uppercase">Users</span>
                              <h6 className="stats-small__value count my-3">{props.statistics.users}</h6>
                            </div>
                            <div className="stats-small__data">
                              <span className="stats-small__percentage stats-small__percentage--decrease">3.8%</span>
                            </div>
                          </div>
                          <canvas height="120" className="blog-overview-stats-small-3"></canvas>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg col-md-4 col-sm-6 mb-4">
                      <div className="stats-small stats-small--1 card card-small">
                        <div className="card-body p-0 d-flex">
                          <div className="d-flex flex-column m-auto">
                            <div className="stats-small__data text-center">
                              <span className="stats-small__label text-uppercase">Testimonies</span>
                              <h6 className="stats-small__value count my-3">{props.statistics.testimonies}</h6>
                            </div>
                            <div className="stats-small__data">
                              <span className="stats-small__percentage stats-small__percentage--increase">12.4%</span>
                            </div>
                          </div>
                          <canvas height="120" className="blog-overview-stats-small-4"></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                
              </div>
            </main>
            
            <style jsx>{`
              
            `}</style>
          </AdminLayout>
      )
    
}

AdminDashboard.getInitialProps = async function() {
  // const res = await fetch('https://0mi6xhcet3.execute-api.us-east-2.amazonaws.com/dev/api/designs');
  const res = await fetch(GET_STAT_API);
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);
  console.log(data)

  return {
    statistics: data
  };
};

export default AdminDashboard;



