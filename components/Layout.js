import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Header from './Header';


const Layout = props => (
  <React.Fragment>
  		<Head>
	        <meta charset="utf-8" />
	        <meta http-equiv="x-ua-compatible" content="IE=9" />
	        <meta name="viewport" content="width=device-width, initial-scale=1" />
	        <title>ABC</title>
	        <meta name="description" content="ABC description" />
	        <meta name="keywords" content="ABC" />
	        <meta name="author" content="rometheme.net" /> 
	      
	      
	        <link rel="shortcut icon" href="images/favicon.ico" />
	        <link rel="apple-touch-icon" href="images/apple-touch-icon.png" />
	        <link rel="apple-touch-icon" sizes="72x72" href="images/apple-touch-icon-72x72.png" />
	        <link rel="apple-touch-icon" sizes="114x114" href="images/apple-touch-icon-114x114.png" />
	        <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
	        
	        
	        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
	        <link rel="stylesheet" type="text/css" href="css/vendor/font-awesome.min.css" />
	        <link rel="stylesheet" type="text/css" href="css/vendor/owl.carousel.min.css" />
	        <link rel="stylesheet" type="text/css" href="css/vendor/owl.theme.default.min.css" />
	        <link rel="stylesheet" type="text/css" href="css/vendor/magnific-popup.css" />
	        <link rel="stylesheet" type="text/css" href="css/vendor/animate.min.css" />
	        
	        
	        <link rel="stylesheet" type="text/css" href="css/style.css" />
	      
	        <script src="js/vendor/modernizr.min.js"></script>

	      </Head>
	      
	    <Header />

	    <main role="main">
	    	{props.children}
	    

		    <div class="section bg-tertiary">
		        <div class="content-wrap py-5">
		          <div class="container">
		            <div class="row align-items-center">
		              <div class="col-sm-12 col-md-12">
		                <div class="cta-1 text-center">
		                          <div class="body-text mb-3">
		                            <h3 class="my-1 text-secondary">Note!</h3>
		                            <p class="uk18 mb-0 text-white">Please note: We are a private practice and offer our services throughout the UK, Europe, Africa
		                            and the Middle-East. We are totally independent of any organisation and have no formal
		                            associations with other agencies or consultancies on ABA therapy.

		                            For information and to discuss further the support we offer, contact us</p>
		                            <Link href="/contact">
		                              <a class="btn btn-light mt-3">CONTACT US</a>
		                            </Link>
		                          </div>
		                      </div>
		              </div>
		            </div>
		          </div>
		        </div>
		    </div>    

		    <div class="footer">
		        <div class="content-wrap">
		          <div class="container">
		            
		            <div class="row">
		              <div class="col-sm-12 col-md-6 col-lg-3">
		                <div class="footer-item">
		                  <img className="abc-logo" src="abi_logo.png" alt="logo bottom" />
		                  <div class="spacer-30"></div>
		                  <p>School of Academic and Behavioural Interventions (ABI), offers a consultancy and management service to support parents and educational providers when working with children on the autistic spectrum and related disorders.</p>
		                  <a href="/about"><i class="fa fa-angle-right"></i> Read More</a>
		                </div>
		              </div>          

		              <div class="col-sm-12 col-md-6 col-lg-3">
		                <div class="footer-item">
		                  <div class="footer-title">
		                    Contact Info
		                  </div>
		                  <ul class="list-info">
		                    <li>
		                      <div class="info-icon">
		                        <span class="fa fa-map-marker"></span>
		                      </div>
		                      <div class="info-text">99 S.t Jomblo Park Pekanbaru 28292. Indonesia</div> </li>
		                    <li>
		                      <div class="info-icon">
		                        <span class="fa fa-phone"></span>
		                      </div>
		                      <div class="info-text">(0761) 654-123987</div>
		                    </li>
		                    <li>
		                      <div class="info-icon">
		                        <span class="fa fa-envelope"></span>
		                      </div>
		                      <div class="info-text">info@yoursite.com</div>
		                    </li>
		                    <li>
		                      <div class="info-icon">
		                        <span class="fa fa-clock-o"></span>
		                      </div>
		                      <div class="info-text">Mon - Sat 09:00 - 17:00</div>
		                    </li>
		                  </ul>

		                </div>
		              </div>

		              <div class="col-sm-12 col-md-6 col-lg-3">
		                <div class="footer-item">
		                  <div class="footer-title">
		                    Useful Links
		                  </div>
		                  
		                  <ul class="list text-dark">
		                    <li><a href="/" title="About us">Home</a></li>
		                    <li><a href="/about" title="About us">About us</a></li>
		                    <li><a href="/" title="Our Classes">Our Services</a></li>
		                    <li><a href="/blogs" title="Our Events">Blogs</a></li>
		                    <li><a href="/contact" title="Contact Us">Contact Us</a></li>
		                  </ul>
		                    
		                </div>
		              </div>
		              
		              <div class="col-sm-12 col-md-6 col-lg-3">
		                <div class="footer-item">
		                  <div class="footer-title">
		                    Get in Touch
		                  </div>
		                  <p>Lit sed The Best in dolor sit amet consectetur adipisicing elit sedconsectetur adipisicing</p>
		                  <div class="sosmed-icon d-inline-flex">
		                    <a href="#" class="fb"><i class="fa fa-facebook"></i></a> 
		                    <a href="#" class="tw"><i class="fa fa-twitter"></i></a> 
		                    <a href="#" class="ig"><i class="fa fa-instagram"></i></a> 
		                    <a href="#" class="in"><i class="fa fa-linkedin"></i></a> 
		                  </div>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		        
		        <div class="fcopy">
		          <div class="container">
		            <div class="row">
		              <div class="col-sm-12 col-md-12">
		                <p class="ftex">Copyright 2020 &copy; <span class="color-primary">ABC</span>. Designed by <span class="color-primary">smartpy.</span></p> 
		              </div>
		            </div>
		          </div>
		        </div>
		    </div>   
		</main>
		<script src="js/vendor/owl.carousel.js"></script>
		<script src="js/vendor/jquery.magnific-popup.min.js"></script>

		<script src="js/vendor/validator.min.js"></script>
		<script src="js/vendor/form-scripts.js"></script>
		<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
		<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

		<script src="js/script.js"></script>
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

        .bg-tertiary{
          background-color: #0070ff !important;
        }

        .body-text{
          max-width: 100% !important;
        }

        .btn-primary{
          background-color: #fd008f !important;
        }
        .btn-primary:hover{
          background-color: #ffcc04 !important;
        }

        .btn-secondary{
          background-color: #ffcc04 !important;
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

        .footer{
          color: #000 !important;
        }

        .footer .fcopy {
            color: #000 !important;
            background-color: #ffffff;
        }

        .footer-title{
            color: #fff !important;
        }

        .footer .footer-item .list li a {
            position: relative;
            color: #000;
            padding-left: 25px;
        }

        .section-heading{
          color: #fd008f !important;
        }

        .services{
          padding-top: 0;
        }

        .title{
          color: #fd008f !important;
        }
        
        * {
          box-sizing: border-box;
        }
      `}</style>

  </React.Fragment>
);

export default Layout;