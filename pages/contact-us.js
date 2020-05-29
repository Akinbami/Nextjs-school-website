import React,  {useState, useEffect, useContext} from 'react';
import Link from 'next/link';
import {isValidPhoneNumber } from 'react-phone-number-input';
import PhoneInput from 'react-phone-number-input/input';
import Router from 'next/router';

import Layout from '../components/Layout';
import Banner from '../components/Banner';

const CONTACT_API = "https://gwh3ump9m0.execute-api.us-east-2.amazonaws.com/prod/api/contacts";

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [phoneError, setPhoneError] = useState(null);
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [contactSuccess, setContactSuccess] = useState(null);


    const [message, setMessage] = useState("");

    const handleSubmit = (e) =>{
      e.preventDefault();
      console.log(phone)
      console.log(message)

      if(phone.length!=14){
        setPhoneError("invalid phone number!")
      }else{
        setPhoneError(null)
        setIsLoading(true);
        fetch(CONTACT_API, {
              method: 'POST',
              headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
              }, 
              body: JSON.stringify({
                   phone: phone,
                   email: email,
                   subject: subject,
                   name: name,
                   message: message,
                 })
              })
              .then(response => response.json())
              .then(data =>{
                console.log(data);
                setIsLoading(false)
                if(data.error){
                  setPhoneError("Already registered")
                }else{
                  setContactSuccess("Message successfully sent!!! you will get an email soon.")
                }
              })
              .catch(error =>{
                setIsLoading(false)
                console.log(error)
                setPhoneError("Failed")
              })    
      }
    }
    return (
      <Layout>
        <div className="section banner-page contact-bg">
          <div className="content-wrap pos-relative">
            <div className="d-flex justify-content-center bd-highlight mb-3">
              <div className="title-page">Contact</div>
            </div>
            <div className="d-flex justify-content-center bd-highlight mb-3">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb ">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Contact</li>
                </ol>
              </nav>
              </div>
          </div>
        </div>

        <div id="contact">
          <div className="content-wrap pb-0">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-12">
                  {contactSuccess?<div className="alert alert-success text-center" role="alert">
                    {contactSuccess}
                  </div>:""}
                  <form className="form-contact" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-sm-6 col-md-6">
                        <div className="form-group">
                          <input type="text" className="form-control" id="p_name" onChange={e=>setName(e.target.value)} placeholder="Enter Name" required />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6">
                        <div className="form-group">
                          <input type="email" className="form-control" id="p_email" onChange={e=>setEmail(e.target.value)} placeholder="Enter Email" required />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6">
                        <div className="form-group">
                          <input type="text" className="form-control" id="p_subject" onChange={e=>setSubject(e.target.value)} placeholder="Subject" required />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6">
                        <div className="form-group">
                          <PhoneInput className="form-control" defaultCountry="NG" placeholder="Enter Mobile Number" value={phone} onChange={setPhone}
                           error={phone ? (isValidPhoneNumber(phone) ? undefined : <small className="form-text text-danger">Invalid phone number</small>) : <small className="form-text text-danger">Phone number required</small>}/>
                          {phone==="" || isValidPhoneNumber(phone) ? "" : <small className="form-text text-danger">Invalid phone number</small>}
          
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                       <textarea id="p_message" className="form-control" rows="6"  onChange={e=>setMessage(e.target.value)} placeholder="Enter Your Message" required></textarea>
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group text-center">
                      <div id="success"></div>
                      {isLoading?
                          <button className="btn btn-danger" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            sending...
                          </button>:
                          <button type="submit" className="btn btn-primary">Send Message</button>
                      }
                      
                    </div>
                  </form>
                  <div className="spacer-content"></div>

                </div>
                
              </div>
            </div>
          </div>
        </div>

        


        <style jsx>{`
          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }



          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
              Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          }


          .abc-logo{
            width: 3rem;
          }

          .body-text{
            max-width: 100% !important;
          }

          .contact-bg{
            background-image: url("images/Contact_Banner.jpg");
          }

          .services{
            padding-top: 0;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </Layout>
  )
}

export default Contact
