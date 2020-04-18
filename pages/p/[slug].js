import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import fetch from 'isomorphic-unfetch';
// import Markdown from 'react-markdown';

const Detail = props => {
	const router = useRouter();
  return (
  		<Layout>
		    <div className="section banner-page" data-background="/images/dummy-img-1920x300.jpg">
				<div className="content-wrap pos-relative">
					<div className="d-flex justify-content-center bd-highlight mb-3">
						<div className="title-page">Events</div>
					</div>
					<div className="d-flex justify-content-center bd-highlight mb-3">
					    <nav aria-label="breadcrumb">
						  <ol className="breadcrumb ">
						    <li className="breadcrumb-item"><a href="/">Home</a></li>
						    <li className="breadcrumb-item active" aria-current="page">Events</li>
						  </ol>
						</nav>
				  	</div>
				</div>
			</div>

			<div className="section ">
				<div className="content-wrap">
					<div className="container">
						<div className="row">
							
							<div className="col-sm-12 col-md-12 col-lg-9">
								<div className="single-news">
									<img src="images/dummy-img-900x600.jpg" alt="" className="img-fluid rounded" /> 
									<div className="spacer-30"></div>

									<h2 className="title"> {props.post.title} </h2> 
									<div className="meta-date">{props.post.date_posted}</div>
									<div className="spacer-30"></div>
									<p>{props.post.content}</p>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
									<blockquote>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</blockquote>
									<div className="spacer-50"></div>
									
									<p className="uk24 text-primary">
										<strong>Research Beyond The Business Plan</strong>
									</p>
									<p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> 
									
									<div className="accordion rs-accordion" id="accordionExample">
									   <div className="card">
									      <div className="card-header" id="headingOne">
									         <h3 className="title">
									            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
									            How do children learn?
									            </button>
									         </h3>
									      </div>
									      <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
									         <div className="card-body">
									            Create and publilsh dynamic websites for desktop, tablet, and mobile devices that meet the latest web standards- without writing code. Design freely using familiar tools and hundreds of web fonts. easily add interactivity, including slide shows, forms, and more.
									         </div>
									      </div>
									   </div>
									   <div className="card">
									      <div className="card-header" id="headingTwo">
									         <h3 className="title">
									            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
									            When can I enroll?
									            </button>
									         </h3>
									      </div>
									      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
									         <div className="card-body">
									            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
									         </div>
									      </div>
									   </div>
									   <div className="card">
									      <div className="card-header" id="headingThree">
									         <h3 className="title">
									            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
									            How successful are children when they graduate from Kids?
									            </button>
									         </h3>
									      </div>
									      <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
									         <div className="card-body">
									            <p>Unzip the file, locate Html file and double click the file and you will directly to adobe Html. Next step you can modifications our template, you can customize color, text, font, content, logo and image with your need using familiar tools on adobe Html without writing any code.</p>
									            <p>You can't re-distribute the Item as stock, in a tool or template, or with source files. You can't re-distribute or make available the Item as-is or with superficial modifications. These things are not allowed even if the re-distribution is for Free.</p>
									         </div>
									      </div>
									   </div>
									   <div className="card">
									      <div className="card-header" id="headingFour">
									         <h3 className="title">
									            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
									            What security measures are in place at Kids?
									            </button>
									         </h3>
									      </div>
									      <div id="collapseFour" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
									         <div className="card-body">
									            <p>Unzip the file, locate Html file and double click the file and you will directly to adobe Html. Next step you can modifications our template, you can customize color, text, font, content, logo and image with your need using familiar tools on adobe Html without writing any code.</p>
									            <p>You can't re-distribute the Item as stock, in a tool or template, or with source files. You can't re-distribute or make available the Item as-is or with superficial modifications. These things are not allowed even if the re-distribution is for Free.</p>
									         </div>
									      </div>
									   </div>
									</div>

								</div>
							</div>
							
							<div className="col-sm-12 col-md-12 col-lg-3">
								<div className="events-widget">
									<div className="widget-title">Venue</div>
									<dl>
										<dt>99 S.t Jomblo Park Pekanbaru 28292. Indonesia</dt> 
										<dt>Phone:</dt>
										<dd>074574217447</dd>
										<dt>Website:</dt>
										<dd><a href="#">http://www.website.com</a></dd>
									</dl>

									<div className="widget-title">Detail</div>
									<dl>
										<dt>Start:</dt>
										<dd>July 16 @ 11:00 am</dd>
										<dt>End:</dt>
										<dd>July 29 @ 4:00 pm</dd>
									</dl>

									<div className="widget-title">Organizer</div>
									<dl>
										<dt>Max Organizer</dt>
										<dt>Phone:</dt>
										<dd>074574217447</dd>
										<dt>Website:</dt>
										<dd><a href="#">http://www.website.com</a></dd>
									</dl>
									<div className="spacer-30"></div>
									<a href="#" className="btn btn-primary btn-block">JOIN</a>
									<div className="spacer-30"></div>
								</div>
							</div>
							

						</div>
					</div>
				</div>
			</div>
		    <style jsx global>{`
	        .markdown {
	          font-family: 'Arial';
	          color: red;
	        }

	        .markdown a {
	          text-decoration: none;
	          color: blue;
	        }

	        .markdown a:hover {
	          opacity: 0.6;
	        }

	        .markdown h3 {
	          margin: 0;
	          padding: 0;
	          text-transform: uppercase;
	        }
	      `}</style>
		</Layout>
	)
};

Detail.getInitialProps = async function(context) {
  const { slug } = context.query;
  const res = await fetch(`https://6j0n7kx92c.execute-api.us-east-2.amazonaws.com/dev/api/posts/${slug}`);
  const post = await res.json();

  console.log(`Fetched post: ${post}`);

  return { post };
};

export default Detail;