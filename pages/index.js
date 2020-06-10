import Link from 'next/link';

import Layout from '../components/Layout';
import Banner from '../components/Banner';
import dateformat from 'dateformat';
import { FaRegComments } from 'react-icons/fa';
import Slider from "react-slick";


const POST_API = "https://gwh3ump9m0.execute-api.us-east-2.amazonaws.com/prod/api/posts"



const Index = (props) =>{ 
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
    };
    return (
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
                <p>
                  All consultants provide advice and guidance on speciﬁc learning needs. 
                  You can discuss programmes and strategies that work to meet your child’s 
                  targets as well as techniques to improve behaviour and life skills. We hope 
                  that by creating a clear pathway you are able to build conﬁdence for all 
                  involved in your child’s developmental journey.
                </p>
                <p>
                  <Link href="/services">
                    <a className="btn btn-lg btn-secondary" role="button">Learn More</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item banner-carousel-item banner2">
            <div className="container">
              <div className="carousel-caption">
                <h3>Assessments</h3>
                <p>
                  Our assessment process includes careful screening and observations on communication, 
                  academia and social interaction. Our consultants will evaluate the milestones of your 
                  child’s development in areas such as learning, play, communication, self-help and 
                  transitioning. It is important to get an indication of your child’s stage of development 
                  in order to implement a programme at an appropriate level. 
                </p>
                <p>
                  <Link href="/services">
                    <a className="btn btn-lg btn-secondary" role="button">Learn More</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item banner-carousel-item banner3">
            <div className="container">
              <div className="carousel-caption">
                <h3>Training Programmes</h3>
                <p>
                  Register for our interactive training sessions, specifically designed 
                  for individuals and teams looking to achieve sustainable results. We 
                    cover current issues, hands on training and best practices with real life case studies.
                </p>
                <p>
                  <Link href="/services">
                    <a className="btn btn-lg btn-secondary" role="button">Learn More</a>
                  </Link>
                </p>
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
                <p>
                  School of Academic and Behavioural Interventions (ABI), offers a consultancy 
                  and management service to support parents and educational providers when 
                  working with children on the autistic spectrum and related developmental conditions. </p>

                <p>
                  Autism is a lifelong diagnosis. Applied Behavioural Analysis (ABA) is one of many 
                  therapeutic interventions used to support the learning and development 
                  of children with autism. After several observations and discussions held with 
                  school professionals, it is clear that educational providers are concerned about 
                  the progress of their pupils with behavioural and educational diﬃculties.</p>
                <div className="spacer-10"></div>
                <a href="/about-us" className="btn btn-secondary">Discover More</a>
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
                    <p>
                      We offer a variety of assessments; including careful screening and 
                      observations on communication, academia and social interaction skills. 
                      Our consultants will evaluate the milestones of your child’s... </p>
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
                    <p>
                      Our interactive training sessions are designed for individuals and 
                      teams looking to achieve sustainable results. We cover current issues, 
                      hands on training, best practices, tips and tools and so much more…
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div className="row">
              <div className="col-sm-12 col-md-12">
                <div className="text-center">
                  <a href="/services" className="btn btn-primary">More About Services</a>
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
                  Don't Miss Our Contents
                </h2>
              </div>
            </div>

	        <div className="blog-inner">

            	<div className="row mt-4">
                {props.posts.slice(0,3).map(item=>(
                    <div className="col-sm-12 col-md-12 col-lg-4 mb-5">
                      <div className="rs-news-1">
                        <div className="media-box">
                          <img src={item.image_url} alt="" className="img-fluid" />
                        </div>
                        <div className="body-box">
                          <div className="title">{item.title}</div>
                          <div className="meta-date">{dateformat(item.date_posted, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</div>
                          <div className="text-center">
                            <Link href={`/p/${item.slug}?pd=${item.id}`}>
                                <a className="btn btn-secondary">View</a>
                              </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
	              }
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 col-md-12">
                <div className="text-center">
                  <Link href="/blog">
                    <a  className="btn btn-secondary">See More Blogs</a>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <div className="section testimonial-section">
		<div className="content-wrap">
				<div className="row">
					<div className="col-sm-12 col-md-12">
						<p className="supheading text-center">Our Testimonials</p>
						<h2 className="section-heading text-center mb-5">
							What Parents Say
						</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12 col-md-10 offset-md-1">
						<div className="text-center text-secondary mb-3">
							<FaRegComments size="3em" />
						</div>

            <Slider {...settings}>
              {props.testimonies.map(item=>{
                if(item.is_active){
                  return (<div className="testimonial-carousel">
                            <div className="rs-box-testimony">
                              <div className="quote-box">
                                <blockquote>
                                {item.message}
                                </blockquote>
                                <p className="quote-name">
                                 {item.name} <span>{item.occupation}</span>
                                </p>                        
                              </div>
                            </div>
                          </div>
                        )
                }
              }
              )}
            </Slider>
            

				</div>
        <div className="container text-center pb-5">
          <Link href="/contact-us">
            <a className="btn btn-secondary my-2">Leave a Message</a>
          </Link>
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
            font-weight: 900;
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

        .quote-name{
          color: #000 !important;
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
			height: 13rem;
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

      <style jsx global>{`
        div.blog-content > p{
            margin-bottom: .4rem !important;
        }
      `}</style>

      
    </Layout>
  )
}

Index.getInitialProps = async function(context) {
  const POST_API = `https://gwh3ump9m0.execute-api.us-east-2.amazonaws.com/prod/api/posts?draft=${false}`
  const TESTIMONIAL_API = "https://gwh3ump9m0.execute-api.us-east-2.amazonaws.com/prod/api/testimonies"

  const res = await fetch(POST_API);
  const posts = await res.json();

  const tes_res = await fetch(TESTIMONIAL_API);
  const testimonies = await tes_res.json();


  console.log(`Fetched post: ${posts}`);
  console.log(`Fetched testimonies: ${testimonies}`);



  return { posts: posts, testimonies:testimonies };
};


export default Index
