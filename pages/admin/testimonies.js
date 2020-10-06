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


const GET_TESTIMONIES_API = "https://nephkcspdl.execute-api.us-east-2.amazonaws.com/prod/api/testimonies"
const SINGLE_TESTIMONIES_API = "https://nephkcspdl.execute-api.us-east-2.amazonaws.com/prod/api/testimonies"


const AdminTestimonies = (props) => {
    const [title,setTitle] = useState("");
    const [error,setError] = useState(null);
    const [isLoading,setIsLoading] = useState(false);

    const [id,setId] = useState("");

    const [cookies, setCookie] = useCookies(['token']);
    const router = useRouter()

    const handleDelete = () =>{
      console.log("delete",id)
      setIsLoading(true)
      let token = cookies['token']
      const API = SINGLE_TESTIMONIES_API+`/${id}`
      console.log("this is the update api ",API)
      fetch(API, {
          method: 'DELETE',
          headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
          }, 
          body: JSON.stringify({
               title: id,
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
                        <h3 className="page-title">Testimonies</h3>
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
                                  <th scope="col" className="border-bottom-0">Name</th>
                                  <th scope="col" className="border-bottom-0">Occupation</th>
                                  <th scope="col" className="border-bottom-0">Message</th>
                                  <th scope="col" className="border-bottom-0">Is Active</th>
                                  <th scope="col" className="border-bottom-0">Date Posted</th>
                                  <th scope="col" className="border-bottom-0">Date Updated</th>
                                  <th scope="col" className="border-bottom-0">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {props.testimonies.map((item,index) => {
                                  return(
                                    <tr key={index+1}>
                                      <td>{index+1}</td>
                                      <td>{item.name}</td>
                                      <td>{item.occupation}</td>
                                      <td>{item.message}</td>
                                      <td>{item.is_active?"true":"false"}</td>
                                      <td>{dateformat(item.date_posted, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</td>
                                      <td>{dateformat(item.date_updated, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</td>
                                      <td>
                                        <button type="button" onClick={e=>setId(item.id)} className="btn badge badge-danger" data-toggle="modal" data-target="#exampleModal">
                                          Delete
                                        </button>

                                      </td>
                                    </tr>
                                  )
                                })}
                              </tbody>
                            </table>
                            <div className="modal fade" id="exampleModal" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                              <div className="modal-dialog">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Are you sure you want to delete? </h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">&times;</span>
                                    </button>
                                  </div>
                                  <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                    <button type="button" onClick={handleDelete} className="btn btn-danger">Yes</button>
                                  </div>
                                </div>
                              </div>
                            </div>
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

AdminTestimonies.getInitialProps = async function() {
  // const res = await fetch('https://0mi6xhcet3.execute-api.us-east-2.amazonaws.com/dev/api/designs');
  const res = await fetch(GET_TESTIMONIES_API);
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);
  console.log(data)

  return {
    testimonies: data.map(entry => entry)
  };
};

export default AdminTestimonies;



