import Link from 'next/link';

const Header = () => (
	<React.Fragment>
		<header>
			<div class="topbar">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-sm-8 col-md-6">
							<div class="info">
								<div class="info-item">
									<i class="fa fa-phone"></i> +62 7144 3300
								</div>
								<div class="info-item">
									<i class="fa fa-envelope-o"></i> <a href="mailto:support@kids.com" title="">support@kids.com</a>
								</div>
							</div>
						</div>
						<div class="col-sm-4 col-md-6">
							<div class="sosmed-icon pull-right d-inline-flex">
								<a href="#"><i class="fa fa-facebook"></i></a> 
								<a href="#"><i class="fa fa-twitter"></i></a> 
								<a href="#"><i class="fa fa-instagram"></i></a> 
								<a href="#"><i class="fa fa-linkedin"></i></a> 
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<nav id="navbar-example" class="navbar navbar-expand-lg">
			        <Link href="/">
			        	<a className="navbar-brand">
							<img className="abc-logo" src="abi_logo.png" alt="" />
						</a>
					</Link>
			        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			            <span class="navbar-toggler-icon"></span>
			        </button>
			        <div class="collapse navbar-collapse" id="navbarNavDropdown">
			            <ul class="navbar-nav ml-auto">
			            	<li class="nav-item active">
			                    	<a href="/" class="nav-link">HOME</a>
			                </li>
			            	<li class="nav-item">
			                    	<a href="/about" class="nav-link">ABOUT US</a>
			                </li>
			            	<li class="nav-item">
			            		<Link href="/blog">
			                    	<a class="nav-link">BLOG</a>
			                    </Link>
			                </li>
			            	<li class="nav-item">
			            		<Link href="/services">
			                    	<a class="nav-link">SERVICES</a>
			                    </Link>
			                </li>
			            	
			            	<li class="nav-item">
			            		<Link href="/contact-us">
			                    	<a class="nav-link">CONTACT US</a>
			                    </Link>
			                </li>
			            </ul>
			        </div>
			    </nav>
			</div> 
		</header>

	    
	    	
		 <style jsx global>{`
		  .navbar-brand{
	      	padding-top: 0;
		  }

		  .topbar{
	          background-color: #fd008f !important;
	        }

	      .navbar{
	      	height: 5rem;
	      }

	      .nav-link:hover {
	      	color: #fd008f !important;
	      }

	      .header-1 .navbar-main .active > .nav-link {
	      	background-color: #fd008f !important;
	      }

	      .header-1 .navbar-main .active > .nav-link:hover {
	      	background-color: transparent !important;
	      }



	    `}</style>

    </React.Fragment>
		
);

export default Header;

// <li class="nav-item dropdown dmenu">
// 			                    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
// 						          PAGES
// 						        </a>
// 			                    <div class="dropdown-menu">
// 			                    	<a class="dropdown-item" href="page-gallery.html">GALLERY</a>
// 			                    	<a class="dropdown-item" href="page-testimonials.html">TESTIMONIALS</a>
// 	          						<a class="dropdown-item" href="page-faq.html">FAQ</a>
// 	          						<a class="dropdown-item" href="page-404.html">404 PAGE</a>
// 	          						<a class="dropdown-item" href="page-events.html">EVENTS</a>
// 	          						<a class="dropdown-item" href="page-events-single.html">SINGLE EVENTS</a>
// 	          						<a class="dropdown-item" href="page-news.html">NEWS</a>
// 	          						<a class="dropdown-item" href="page-news-single.html">SINGLE NEWS</a>
// 							    </div>
// 			                </li>