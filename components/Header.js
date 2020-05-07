import Link from 'next/link';
import ActiveLink from './NavLink';

const Header = () => (
	<React.Fragment>
		<header  className="header header-1">
			
			<div className="topbar">
				<div className="container">
					<div className="row align-items-center text-center">
						<div className="col-sm-8 col-md-6">
							<div className="info">
								<div className="info-item">
									<i className="fa fa-phone"></i> 07542 289 626
								</div>
								<div className="info-item">
									<i className="fa fa-envelope-o"></i> <a href="mailto:info@schoolofabi.com" title="">info@schoolofabi.com</a>
								</div>
							</div>
						</div>
						<div className="col-sm-4 col-md-6">
							<div className="sosmed-icon d-inline-flex">
								<a href="https://www.facebook.com/SchoolofABI/" target="_blank"><i className="fa fa-facebook"></i></a> 
								<a href="https://twitter.com/schoolofabi?s=20" target="_blank"><i className="fa fa-twitter"></i></a> 
								<a href="https://www.instagram.com/schoolofabi/" target="_blank"><i className="fa fa-instagram"></i></a> 
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="navbar-main">
				<div className="container">
					<nav id="navbar-example" className="navbar navbar-expand-lg">
				        
			        	<a href="/" className="navbar-brand">
							<img className="abc-logo" src="abi_logo.png" alt="" />
						</a>
						
				        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
				            <span className="navbar-toggler-icon"></span>
				        </button>
				        <div className="collapse navbar-collapse" id="navbarNavDropdown">
				            <ul className="navbar-nav ml-auto">
				            	<li className="nav-item active">
				            		<ActiveLink activeClassName="active" href="/">
				            			<a className="nav-link">HOME</a>
				            		</ActiveLink>
				                </li>
				            	<li className="nav-item">
				            		<ActiveLink activeClassName="active" href="/about">
				            			<a className="nav-link">ABOUT US</a>
				            		</ActiveLink>
				                </li>
				            	<li className="nav-item">
				            		<ActiveLink activeClassName="active" href="/blog">
				            			<a className="nav-link">BLOG</a>
				            		</ActiveLink>
				                </li>
				            	<li className="nav-item">
				            		<ActiveLink activeClassName="active" href="/service">
				                    	<a className="nav-link">SERVICES</a>
				                    </ActiveLink>
				                </li>
				            	
				            	<li className="nav-item">
				            		<ActiveLink activeClassName="active" href="/contact">
				                    	<a className="nav-link">CONTACT US</a>
				                    </ActiveLink>
				                </li>
				                
				            </ul>
				        </div>
				    </nav>
				</div> 
			</div>
		</header>

	    
	    	
		 <style jsx global>{`
		  .navbar-brand{
	      	padding-top: 0;
		  }

		  .topbar{
	          background-color: #fd008f !important;
	        }


	      .nav-link:hover {
	      	color: #fd008f !important;
	      }

	      .header-1 .navbar-main .active {
	      	color: #fd008f;
	      }

	      .header-1 .navbar-main .active > .nav-link {
	      	color: #222222; 
	      	background-color: transparent !important;
	      }

	      .header-1 .navbar-main .active > .nav-link:hover {
	      	background-color: transparent !important;
	      }





	    `}</style>

    </React.Fragment>
		
);

export default Header;

// <li className="nav-item dropdown dmenu">
// 			                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
// 						          PAGES
// 						        </a>
// 			                    <div className="dropdown-menu">
// 			                    	<a className="dropdown-item" href="page-gallery.html">GALLERY</a>
// 			                    	<a className="dropdown-item" href="page-testimonials.html">TESTIMONIALS</a>
// 	          						<a className="dropdown-item" href="page-faq.html">FAQ</a>
// 	          						<a className="dropdown-item" href="page-404.html">404 PAGE</a>
// 	          						<a className="dropdown-item" href="page-events.html">EVENTS</a>
// 	          						<a className="dropdown-item" href="page-events-single.html">SINGLE EVENTS</a>
// 	          						<a className="dropdown-item" href="page-news.html">NEWS</a>
// 	          						<a className="dropdown-item" href="page-news-single.html">SINGLE NEWS</a>
// 							    </div>
// 			                </li>