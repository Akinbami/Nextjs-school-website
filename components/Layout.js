import React,  {useState, useEffect, useContext} from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Header from './Header';

const SUBSCRIPTION_API = "https://gwh3ump9m0.execute-api.us-east-2.amazonaws.com/prod/api/subscriptions";

const Layout = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [subscriptionEmail, setSubscriptionEmail] = useState("");
    const [subscriptionSuccess, setsubscriptionSuccess] = useState(null);


	const handleSubmit = (e) =>{
      	e.preventDefault();
      	console.log(subscriptionEmail)

	    setIsLoading(true);
	    fetch(SUBSCRIPTION_API, {
	          method: 'POST',
	          headers: {
	                'Accept': 'application/json',
	                'Content-Type': 'application/json'
	          }, 
	          body: JSON.stringify({
	               email: subscriptionEmail,
	             })
	          })
	          .then(response => response.json())
	          .then(data =>{
	            console.log(data);
	            setIsLoading(false)
	            if(data.error){
	              setPhoneError("Already registered")
	            }else{
	              setsubscriptionSuccess("Thanks for subscribing!!! you will get an email soon.")
	            }
	          })
	          .catch(error =>{
	            setIsLoading(false)
	            console.log(error)
	            setPhoneError("Failed")
	          })    
      
    }
	return (
  <React.Fragment>
  		<Head>
	        <meta charset="utf-8" />
	        <meta http-equiv="x-ua-compatible" content="IE=9" />
	        <meta name="viewport" content="width=device-width, initial-scale=1" />
	        <title>ABI</title>
	        <meta name="description" content="School of Academic and Behavioural Interventions (ABI), 
                    offers a consultancy and management service to support 
                    parents and educational providers when working with children 
                    on the autistic spectrum and related disorders." />
	        <meta name="keywords" content="ABI" />
	        <meta name="author" content="rometheme.net" /> 
	      
	      
	        <link rel="shortcut icon" href="/favicon/favicon.ico" />
	        <link rel="apple-touch-icon" href="/favicon/apple-icon.png" />
	        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
	        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
	        <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
	        
	        
	        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" />
	        <link rel="stylesheet" href="https://getbootstrap.com/docs/4.4/examples/carousel/carousel.css" crossorigin="anonymous" />

	        <link rel="stylesheet" type="text/css" href="/css/vendor/font-awesome.min.css" />
	        <link rel="stylesheet" type="text/css" href="/css/vendor/owl.carousel.min.css" />
	        <link rel="stylesheet" type="text/css" href="/css/vendor/owl.theme.default.min.css" />
	        <link rel="stylesheet" type="text/css" href="/css/vendor/magnific-popup.css" />
	        <link rel="stylesheet" type="text/css" href="/css/vendor/animate.min.css" />

	        
	        <link rel="stylesheet" type="text/css" href="/css/style.css" />

	      
	        <script src="/js/vendor/modernizr.min.js"></script>

	      </Head>
	      
	    <Header />

	    <main role="main">
	    	{props.children}
	    

		    <div className="section bg-tertiary">
		        <div className="content-wrap py-5">
		          <div className="container">
		            <div className="row align-items-center">
		              <div className="col-sm-12 col-md-12">
		                <div className="cta-1 text-center">
		                          <div className="body-text mb-3">
		                            <h3 className="my-1 text-secondary">Note! What We Do?</h3>
		                            <div className="what-inner">
			                            <ul className="text-left text-light">
			                            	<li>Create personalised academic and behavioural programmes</li>
											<li>Encourage and support parental involvement</li>
											<li>Promote child development in communication, self-confidence and independence</li>
											<li>Provide clear guidance on teaching materials, individual educational plans and learning programmes</li>
											<li>Provide a calm and purposeful learning environment</li>
										</ul>
									</div>
		                          </div>
		                      </div>
		              </div>
		            </div>
		          </div>
		        </div>
		    </div>    

		    <div className="footer">
		        <div className="content-wrap">
		          <div className="container">
		            
		            <div className="row">
		              <div className="col-sm-12 col-md-6 col-lg-3">
		                <div className="footer-item">
		                  <img className="abc-logo-footer" src="/abi_logo_2.png" alt="logo bottom" />
		                  <div className="spacer-30"></div>
		                </div>
		              </div>          

		              <div className="col-sm-12 col-md-6 col-lg-3">
		                <div className="footer-item">
		                  <div className="footer-title">
		                    Contact Info
		                  </div>
		                  <ul className="list-info">
		                    <li>
		                      <div className="info-icon">
		                        <span className="fa fa-phone"></span>
		                      </div>
		                      <div className="info-text"> 07542 289 626</div>
		                    </li>
		                    <li>
		                      <div className="info-icon">
		                        <span className="fa fa-envelope"></span>
		                      </div>
		                      <div className="info-text">info@schoolofabi.com</div>
		                    </li>
		                    <li>
		                      <div className="info-icon">
		                        <span className="fa fa-clock-o"></span>
		                      </div>
		                      <div className="info-text">Mon - Fri 9.00am - 6.00pm</div>
		                    </li>
		                  </ul>

		                </div>
		              </div>

		              <div className="col-sm-12 col-md-6 col-lg-3">
		                <div className="footer-item">
		                  <div className="footer-title">
		                    Useful Links
		                  </div>
		                  
		                  <ul className="list text-dark">
		                    <li><a href="/" title="About us">Home</a></li>
		                    <li><a href="/about" title="About us">About us</a></li>
		                    <li><a href="/" title="Our Classes">Our Services</a></li>
		                    <li><a href="/blogs" title="Our Events">Blogs</a></li>
		                    <li><a href="/contact" title="Contact Us">Contact Us</a></li>
		                  </ul>
		                    
		                </div>
		              </div>
		              
		              <div className="col-sm-12 col-md-6 col-lg-3">
		                <div className="footer-item">
		                  <div className="footer-title">
		                    Get in Touch
		                  </div>
		                  <div className="sosmed-icon d-inline-flex">
		                    <a href="https://www.facebook.com/SchoolofABI/" target="_blank" className="fb"><i className="fa fa-facebook"></i></a> 
		                    <a href="https://twitter.com/schoolofabi?s=20" className="tw" target="_blank"><i className="fa fa-twitter"></i></a> 
		                    <a href="https://www.instagram.com/schoolofabi/" className="ig" target="_blank"><i className="fa fa-instagram"></i></a> 
		                  </div>
		                  <div className="subscribe-button">
		                  	<button type="button" data-toggle="modal" data-target="#subscribe" className="btn btn-primary my-2">Subscribe to Mailing List </button>
		                  </div>
							<div className="modal fade" id="subscribe" tabindex="-1" role="dialog" aria-labelledby="subscribeLabel" aria-hidden="true">
							  <div className="modal-dialog" role="document">
							    <div className="modal-content">
							    	{subscriptionSuccess?<h3 className="m-5 text-center">{subscriptionSuccess}</h3>:
							    		<React.Fragment>
									      <div className="modal-header">
									        <p className="modal-title h5" id="exampleModalLabel">Enter your email to Subscribe</p>
									        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
									          <span aria-hidden="true">&times;</span>
									        </button>
									      </div>
									      <form>
										      <div className="modal-body">
										        <input type="email" className="form-control form-control-lg" onChange={e=>setSubscriptionEmail(e.target.value)}   placeholder="Enter email" />
										      </div>
										      <div className="modal-footer">
										      	{isLoading?
							                          <button className="btn btn-danger" type="button" disabled>
							                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
							                            sending...
							                          </button>:
							                          <button type="button"  onClick={handleSubmit} className="btn btn-primary">Submit</button>
							                      }
									      	</div>
									      </form>
									    </React.Fragment>
									}
							    </div>
							  </div>
							</div>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		        
		        <div className="fcopy">
		          <div className="container">
		            <div className="row">
		              <div className="col-sm-12 col-md-12">
		                <p className="ftex">Copyright 2020 &copy; <span className="color-primary">ABI</span>. Designed by <span className="color-primary">smartpy.</span></p> 
		              </div>
		            </div>
		          </div>
		        </div>
		    </div>   
		</main>
		<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
		<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
		<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
		<script src="/js/vendor/owl.carousel.js"></script>
		<script src="/js/vendor/jquery.magnific-popup.min.js"></script>

		<script src="/js/vendor/validator.min.js"></script>
		<script src="/js/vendor/form-scripts.js"></script>
		
		<script src="/js/script.js"></script>
		<style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Open Sans', sans-serif;
        }


        .abc-logo{
          width: 4rem;
        }

        .abc-logo-footer{
        	width: 10rem;
        }

        .bg-tertiary{
          background-color: #0070ff !important;
        }

        .body-text{
          max-width: 100% !important;
          float: none !important;
        }

        .btn-primary{
          background-color: #fd008f !important;
          color: #fff !important;
        }
        .btn-primary:hover{
          background-color: #ffcc04 !important;
        }

        .btn-secondary{
          background-color: #ffcc04 !important;
          color: #fff !important;
        }
        .btn-secondary:hover{
          background-color: #fd008f !important;
        }

        .btn-light{
          color: #ffcc04 !important;
        }
        .btn-light:hover{
          color: #fff !important;
          background-color: #ffcc04 !important;
        }

        .content-wrap{
        	padding-top: 2rem;
        }

        .fb{
        	background-color: #0070ff !important;
        }

        .tw{
        	background-color: #0070ff !important;
        }

        .ig{
        	background-color: #0070ff !important;
        }

        .footer{
          color: #000 !important;
        }

        .footer .fcopy {
            color: #000 !important;
            background-color: #ffffff;
            border-top: none;
        }

        .footer-title{
            color: #fff !important;
            padding: 0.5rem 0 0.5rem 0 !important;
        }

        .footer .footer-item .list li a {
            position: relative;
            color: #000;
            padding-left: 25px;
        }

        .footer .footer-item .list li a:before {
		    color: #000000 !important;
		}

        .info-icon{
        	color: #000 !important;
        }

        .list-info li {
		    margin-bottom: 0;
		}
        

        .section-heading{
          color: #fd008f !important;
        }

        .services{
          padding-top: 0;
        }

        .subscribe-button{
        	padding-top: 1rem;
        }

        .title{
          color: #fd008f !important;
        }

        .what-inner{
        	padding-left: 20%;
        	padding-right: 20%;
        }
        
        * {
          box-sizing: border-box;
        }

        @media (max-width: 414px) {
	    	.section{
	        	text-align: center;
	        }

	        .footer{
          		text-align: center;
	        }

	        .info-text{
	        	width: 100%;
	        }
	        .what-inner{
	        	padding-left: 0;
	        	padding-right: 0;
	        }

	    }

      `}</style>

  </React.Fragment>
)
}

export default Layout;