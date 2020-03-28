import React from 'react';


const Banner = props => (
  <React.Fragment>
  		<div id="oc-fullslider" class="banner">
	    	<div class="owl-carousel owl-theme full-screen">
		    	<div class="item">
		        	<img src="images/dummy-img-1920x900.jpg" alt="Slider" />
		        	<div class="overlay-bg"></div>
		        	<div class="container d-flex align-items-center">
		            	<div class="wrap-caption">
		            		<h5 class="caption-supheading">Welcome to Kids</h5>
			                <h1 class="caption-heading">Best Kindergarten at California</h1>
			                <a href="#" class="btn btn-secondary">LEARN MORE</a>
			            </div>  
		            </div>
		    	</div>
	    	</div>
		    <div class="custom-nav owl-nav"></div>
	    </div>	
  		<div class="section services">
			<div class="content-wrap">
				<div class="container">
					<div class="row">
						<div class="col-sm-12 col-md-12">
							<div class="row col-0 overlap no-gutters">
								<div class="col-sm-12 col-md-4 col-lg-4">
									<div class="rs-feature-box-1 bg-primary">
										<i class="fa fa-clock-o"></i>
										<div class="body">
											<h4>Full Day Programs</h4>
											<p>Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
											<div class="spacer-10"></div>
											<a href="#" class="btn">LEARN MORE</a>
										</div>
						            </div>
								</div>
								<div class="col-sm-12 col-md-4 col-lg-4">
									<div class="rs-feature-box-1 bg-secondary">
										<i class="fa fa-home"></i>
										<div class="body">
											<h4>Full Day Programs</h4>
											<p>Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium</p>
											<div class="spacer-10"></div>
											<a href="#" class="btn">LEARN MORE</a>
										</div>
						            </div>
								</div>
								<div class="col-sm-12 col-md-4 col-lg-4">
									<div class="rs-feature-box-1 bg-tertiary">
										<i class="fa fa-trophy"></i>
										<div class="body">
											<h4>Full Day Programs</h4>
											<p>Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium</p>
											<div class="spacer-10"></div>
											<a href="#" class="btn">LEARN MORE</a>
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
