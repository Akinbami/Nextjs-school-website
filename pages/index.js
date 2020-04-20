import Link from 'next/link';

import Layout from '../components/Layout';
import Banner from '../components/Banner';

import { FaRegComments } from 'react-icons/fa';





const Index = () => (
    <Layout>
      
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item banner-carousel-item  banner1 active">
            <div className="container">
              <div className="carousel-caption">
                <h3>Consultation</h3>
                <p>This involves advice and guidance on speciﬁc learning needs. Discussing programmes and strategies
                    that work to meet your child’s targets as well as strategies to improve behaviour and life skills. We
                    hope that by creating a clear pathway you are able to build conﬁdence for all involved in your child’s
                    developmental journey.</p>
                <p><a className="btn btn-lg btn-secondary" href="#" role="button">Learn More</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item banner-carousel-item banner2">
            <div className="container">
              <div className="carousel-caption">
                <h3>Assessments</h3>
                <p>We offer a variety of assessments; including careful screening and observations on communication,
                  academia and social interaction skills.
                  Our consultants will evaluate the milestones of your child’s development in areas such as learning,
                  play, communication, self-help and transitioning. It is important to get an indication of your child’s
                  stage of development in order to implement a programme at an appropriate level.</p>
                <p><a className="btn btn-lg btn-secondary" href="#" role="button">Learn more</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item banner-carousel-item banner3">
            <div className="container">
              <div className="carousel-caption">
                <h3>Training Programmes</h3>
                <p>Our interactive training programmes are designed for individuals and teams looking to achieve
                  sustainable results. We cover current issues, hands on training, best practices, tips and tools, with
                  real example cases on ethics.</p>
                <p><a className="btn btn-lg btn-secondary" href="#" role="button">Browse gallery</a></p>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="section">
        <div className="content-wrap">
          <div className="container">
            <p className="supheading text-center mb-3">About</p>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6">
                <img src="images/welcome_pic.jpg" alt="" className="img-fluid pb-5 img-border" />
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6">
                <h3 className="section-heading">
                  About Us
                </h3>
                <p>School of Academic and Behavioural Interventions (ABI), offers a consultancy and
                management service to support parents and educational providers when working with
                children on the autistic spectrum and related disorders. </p>

                <p>Autism is a lifelong diagnosis. Applied Behavioural Analysis (ABA) is one of many therapeutic
                interventions used to support the learning, development of children with autism and related
                conditions. After several observations and discussions held with school professionals it is
                clear that educational providers are concerned about the progress of their pupils with
                behavioural and educational diﬃculties.</p>
                <div className="spacer-10"></div>
                <a href="/about" className="btn btn-secondary">DISCOVER MORE</a>
                <div className="spacer-30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="content-wrap services">
          <div className="container">

            <div className="row">
              <div className="col-sm-12 col-md-12">
                <p className="supheading text-center">Our Services</p>
                <h3 className="section-heading text-center">
                  Top Services
                </h3>
              </div>
            </div>

            <div className="row mt-4">
              
              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="rs-class-box mb-5">
                  <div className="media-box">
                    <img src="images/consultation.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="body-box">
                    <div className="class-name">
                      <div className="title">Consultation</div>
                    </div>
                    <p>This involves advice and guidance on speciﬁc learning needs. Discussing programmes and strategies
                      that work to meet your child’s targets as well as strategies to improve behaviour and life skills. </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="rs-class-box mb-5">
                  <div className="media-box">
                    <img src="images/assessment.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="body-box">
                    <div className="class-name">
                      <div className="title">Assessments</div>
                    </div>
                    <p>We offer a variety of assessments; including careful screening and observations on communication,
                      academia and social interaction skills.Our consultants will evaluate the milestones of your child’s </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="rs-class-box mb-5">
                  <div className="media-box">
                    <img src="images/training.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="body-box">
                    <div className="class-name">
                      <div className="title">Training Programmes</div>
                    </div>
                    <p>Our interactive training programmes are designed for individuals and teams looking to achieve
                      sustainable results. We cover current issues, hands on training, best practices, tips and tools,</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="row">
              <div className="col-sm-12 col-md-12">
                <div className="text-center">
                  <a href="/service" className="btn btn-primary">SEE MORE SERVICES</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="section bgi-cover-center">
        <div className="content-wrap">
          <div className="container">

            <div className="row">
              <div className="col-sm-12 col-md-12">
                <p className="supheading text-center text-light">Blogs</p>
                <h2 className="section-heading blog-section-heading text-center">
                  Don't miss our Contents
                </h2>
              </div>
            </div>

	        <div className="blog-inner">

            	<div className="row mt-4">

	              
	              <div className="col-sm-12 col-md-12 col-lg-4 mb-5">
	                <div className="rs-news-1">
	                  <div className="media-box">
	                    <img src="images/blog1.jpg" alt="" className="img-fluid" />
	                  </div>
	                  <div className="body-box">
	                    <div className="title">Talk Bilingual</div>
	                    <div className="meta-date">March 19, 2016 / 08:00 am - 10:00 am</div>
	                    <p>In the U.K we are known for our vast multi-cultural society; having more than two languages
	                      being spoken in a home for a number of families is now seen as the norm. The question I
	                      pose today </p>
	                    <div className="text-center">
	                    	<Link href="/p/Talk-Bilingual">
	                      		<a className="btn btn-secondary">View</a>
	                      	</Link>
	                    </div>
	                  </div>
	                </div>
	              </div>

	              <div className="col-sm-12 col-md-12 col-lg-4 mb-5">
	                <div className="rs-news-1">
	                  <div className="media-box">
	                    <img src="images/blog2.jpg" alt="" className="img-fluid" />
	                  </div>
	                  <div className="body-box">
	                    <div className="title">10 Basic Program Must Haves</div>
	                    <div className="meta-date">March 19, 2016 / 08:00 am - 10:00 am</div>
	                  <p>Running an ABA programme can be very time-consuming and costly. There are a few
	                    valuable ‘must haves’, which can potentially affect the outcomes ...</p>
	                    <div className="text-center">
	                    	<Link href="/p/10-Basic-Program-Must-Haves">
	                      		<a className="btn btn-secondary">View</a>
	                      	</Link>
	                    </div>
	                  </div>
	                </div>
	              </div>

	              <div className="col-sm-12 col-md-12 col-lg-4 mb-5">
	                <div className="rs-news-1">
	                  <div className="media-box">
	                    <img src="images/blog3.jpg" alt="" className="img-fluid" />
	                  </div>
	                  <div className="body-box">
	                    <div className="title">corona</div>
	                    <div className="meta-date">March 19, 2016 / 08:00 am - 10:00 am</div>
	                    <p>We provide high quality design at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores...</p>
	                    <div className="text-center">
	                      <Link href="/p/corona">
	                      		<a className="btn btn-secondary">View</a>
	                      	</Link>
	                    </div>
	                  </div>
	                </div>
	              </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 col-md-12">
                <div className="text-center">
                  <Link href="/blog">
                    <a  className="btn btn-secondary">SEE MORE BLOGS</a>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="section testimonial-section">
		<div className="content-wrap">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-12">
						<p className="supheading text-center">Our Testimonials</p>
						<h2 className="section-heading text-center mb-5">
							What parents say
						</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12 col-md-10 offset-md-1">
						<div className="text-center text-secondary mb-3">
							<FaRegComments size="3em" />
						</div>
						<div id="testimonialCarousel" className="carousel slide mb-0" data-ride="carousel">
					        <ol className="carousel-indicators">
					          <li data-target="#testimonialCarousel" data-slide-to="0" className="active"></li>
					          <li data-target="#testimonialCarousel" data-slide-to="1"></li>
					          <li data-target="#testimonialCarousel" data-slide-to="2"></li>
					        </ol>
					        <div className="carousel-inner">
					          <div className="carousel-item testimonial-carousel active">
					            <div className="rs-box-testimony">
									<div className="quote-box">
										<blockquote>
										 Tawa brings her attention to detail to every project.Her consultancy skills and people skills are excellent.Very organised individual with great dose of creativity.
										</blockquote>
										<p className="quote-name">
											Marzena Kot <span>Businessman</span>
										</p>                        
									</div>
								</div>
					          </div>
					          <div className="carousel-item testimonial-carousel">
								<div className="rs-box-testimony">
									<div className="quote-box">
										<blockquote>
										 You are doing a great job so just keep up the good work, keep helping children, families and keep inspiring people!!!! Thank so much for everything you did and are doing for me :)
										</blockquote>
										
										<p className="quote-name">
											Delia Ghitelaru <span>Businessman</span>
										</p>                        
									</div>
								</div>
							  </div>
							  <div className="carousel-item testimonial-carousel">
								<div className="rs-box-testimony">
									<div className="quote-box">
										<blockquote>
										 Very informative! A price guide would be useful
										</blockquote>
										
										<p className="quote-name">
											Douglas Montaigne <span>Businessman</span>
										</p>                        
									</div>
								</div>
							  </div>
							  <div className="carousel-item testimonial-carousel">
								<div className="rs-box-testimony">
									<div className="quote-box">
										<blockquote>
										 Wishing you the very best with the launch of your website.
										</blockquote>
										
										<p className="quote-name">
											MediaFonics <span>Businessman</span>
										</p>                        
									</div>
								</div>
							  </div>
							  <div className="carousel-item testimonial-carousel">
								<div className="rs-box-testimony">
									<div className="quote-box">
										<blockquote>
										 I like the information posted on this website.
										</blockquote>
										
										<p className="quote-name">
											Daniel Simpson <span>Businessman</span>
										</p>                        
									</div>
								</div>
							  </div>
							  <div className="carousel-item testimonial-carousel">
								<div className="rs-box-testimony">
									<div className="quote-box">
										<blockquote>
										 Great website and good contents too!
										</blockquote>
										
										<p className="quote-name">
											Gary Mellon <span>Businessman</span>
										</p>                        
									</div>
								</div>
							  </div>
							  <div className="carousel-item testimonial-carousel">
								<div className="rs-box-testimony">
									<div className="quote-box">
										<blockquote>
										 Just to say thank you.
										</blockquote>
										
										<p className="quote-name">
											Mark Walters <span>Businessman</span>
										</p>                        
									</div>
								</div>
							  </div>
							  <div className="carousel-item testimonial-carousel">
								<div className="rs-box-testimony">
									<div className="quote-box">
										<blockquote>
										 Thanks once again for your help.
										</blockquote>
										
										<p className="quote-name">
											Mark Broyle <span>Businessman</span>
										</p>                        
									</div>
								</div>
							  </div>
					        </div>
					        <a className="carousel-control-prev" href="#testimonialCarousel" role="button" data-slide="prev">
					          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
					          <span className="sr-only">Previous</span>
					        </a>
					        <a className="carousel-control-next" href="#testimonialCarousel" role="button" data-slide="next">
					          <span className="carousel-control-next-icon" aria-hidden="true"></span>
					          <span className="sr-only">Next</span>
					        </a>
					    </div>
					</div>

				</div>
			</div>
		</div>
	</div>
      

      

      <style jsx>{`
      	
      	.banner1{
      		background-image: url("images/banner1.jpg");
      		background-size: cover;
 			background-repeat: no-repeat;
      	}

      	.banner2{
      		background-image: url("images/banner2.jpg");
      		background-size: cover;
 			background-repeat: no-repeat;
      	}

      	.banner3{
      		background-image: url("images/banner3.jpg");
      		background-size: cover;
 			background-repeat: no-repeat;
      	}

      	.body-box{
      		text-align: left;
      	}

      	.body-box .title {
		    font-size: 1rem;
		    text-align: left;
		}

      	.blog-inner{
      		max-width: 80%
      	}

      	.bgi-cover-center{
      		padding: 2rem 0;
      		background-image: url("images/blog_bg.jpg");
      	}

		.banner-carousel-item:after{
	      	content:"";
			display:block;
			position:absolute;
			top:0;
			bottom:0;
			left:0;
			right:0;
			background:rgba(0,0,0,0.6);
	    }

	    .blog-section-heading {
		    color: #ffcc04 !important;
		}

	    .carousel-caption{
	    	padding-bottom:0px !important;
	    }

	    .carousel-caption p{
	    	font-size: 1rem;
	    }

	    .class-name{
	    	display: grid !important;
	        text-align: left;
	        padding-bottom: 1rem;
	    	justify-content: left !important;
	    }

	    .content-wrap {
		    padding: 0 0;
		}

        .container {
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .media-box{
        	margin-bottom: 0;
        }

        .footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          color: #000 !important;
          justify-content: center;
          align-items: center;
        }
        

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .supheading {
		    margin-bottom: 0;
		}

		.testimonial-carousel{
			height: 18rem;
		}

		.testimonial-section{
			padding-top: 2rem;
		}

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .section-heading{
        	font-size: 1rem;
        }

        .services{
        	padding-bottom: 3rem !important;
        }

	    @media (max-width: 414px) {
	    	.rs-box-testimony .quote-box blockquote{
	    		font-size: 1rem !important;
	    	}

	    	.body-box{
	    		text-align: center;
	    	}

	    	.carousel-caption p{
		    	font-size: 0.8rem;
		    }

	    	.title {
	          font-size: 1.5rem;
	        }

	        .class-name{
	        	justify-content: center !important;
	        }

	        .footer{
	          text-align: center;
	        }

	    }



        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      
    </Layout>
)

export default Index
