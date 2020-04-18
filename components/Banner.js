import React from 'react';


const Banner = props => (
  <React.Fragment>
  		<div id="oc-fullslider" className="banner">
	    	<div className="owl-carousel owl-theme full-screen">
		    	<div className="item">
		        	<img src="images/dummy-img-1920x900.jpg" alt="Slider" />
		        	<div className="overlay-bg"></div>
		        	<div className="container d-flex align-items-center">
		            	<div className="wrap-caption">
		            		<h5 className="caption-supheading">Welcome to Kids</h5>
			                <h1 className="caption-heading">Best Kindergarten at California</h1>
			                <a href="#" className="btn btn-secondary">LEARN MORE</a>
			            </div>  
		            </div>
		    	</div>
	    	</div>
		    <div className="custom-nav owl-nav"></div>
	    </div>	
  		<div className="section services">
			<div className="content-wrap">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md-12">
							<div className="row col-0 overlap no-gutters">
								<div className="col-sm-12 col-md-4 col-lg-4">
									<div className="rs-feature-box-1 bg-primary">
										<i className="fa fa-clock-o"></i>
										<div className="body">
											<h4>Full Day Programs</h4>
											<p>Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
											<div className="spacer-10"></div>
											<a href="#" className="btn">LEARN MORE</a>
										</div>
						            </div>
								</div>
								<div className="col-sm-12 col-md-4 col-lg-4">
									<div className="rs-feature-box-1 bg-secondary">
										<i className="fa fa-home"></i>
										<div className="body">
											<h4>Full Day Programs</h4>
											<p>Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium</p>
											<div className="spacer-10"></div>
											<a href="#" className="btn">LEARN MORE</a>
										</div>
						            </div>
								</div>
								<div className="col-sm-12 col-md-4 col-lg-4">
									<div className="rs-feature-box-1 bg-tertiary">
										<i className="fa fa-trophy"></i>
										<div className="body">
											<h4>Full Day Programs</h4>
											<p>Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium</p>
											<div className="spacer-10"></div>
											<a href="#" className="btn">LEARN MORE</a>
										</div>
						            </div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>	
  </React.Fragment>
);

export default Banner;
