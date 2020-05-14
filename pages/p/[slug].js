import { useRouter } from 'next/router';
import Link from 'next/link';

import Layout from '../../components/Layout';
import fetch from 'isomorphic-unfetch';
import data from '../../components/Data';
// import Markdown from 'react-markdown';

const Detail = props => {
	const router = useRouter();
  return (
  		<Layout>
		    <div className="section banner-page blog-bg">
		        <div className="content-wrap pos-relative">
		          <div className="d-flex justify-content-center bd-highlight mb-3">
		            <div className="title-page">Blogs</div>
		          </div>
		          <div className="d-flex justify-content-center bd-highlight mb-3">
		              <nav aria-label="breadcrumb">
		              <ol className="breadcrumb ">
		                <li className="breadcrumb-item"><a href="/">Home</a></li>
		                <li className="breadcrumb-item active" aria-current="page">Blogs</li>
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
									
									<h2 className="title"> {props.post.title} </h2> 
									<img src={props.post.image} alt="" className="img-fluid rounded" /> 

									<div className="meta-date">{props.post.date_posted}</div>
									{props.post.content.map(item =><p>{item}</p>) }
	                    			<div className="meta-date">{props.post.date}</div>
								</div>
							</div>
							
							<div className="col-sm-12 col-md-12 col-lg-3">
								<h3 className="title"> Related Blogs </h3> 
				                <div className="rs-news-1 mb-2">
				                  <div className="media-box">
				                    <img src="/images/blog1.jpg" alt="" className="img-fluid" />
				                  </div>
				                  <div className="body-box">
				                    <div className="title">Talk Bilingual</div>
				                    <div className="meta-date">March 19, 2016 / 08:00 am - 10:00 am</div>
				                    <div className="text-center">
				                    	<Link href="/p/Talk-Bilingual">
				                      		<a className="btn btn-secondary">View</a>
				                      	</Link>
				                    </div>
				                  </div>
				                </div>

				                <div className="rs-news-1 mb-2">
				                  <div className="media-box">
				                    <img src="/images/blog2.jpg" alt="" className="img-fluid" />
				                  </div>
				                  <div className="body-box">
				                    <div className="title">10 Basic Program Must Haves</div>
				                    <div className="meta-date">March 19, 2016 / 08:00 am - 10:00 am</div>
				                   <div className="text-center">
				                    	<Link href="/p/10-Basic-Program-Must-Haves">
				                      		<a className="btn btn-secondary">View</a>
				                      	</Link>
				                    </div>
				                  </div>
				                </div>

							</div>
							

						</div>
					</div>
				</div>
			</div>
		    <style jsx global>{`

		    	.blog-bg{
		          background-image: url("/images/Blog_Banner.jpg");
		        }

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

		        .title{
		        	text-align: center;
		        }
	      `}</style>
		</Layout>
	)
};

Detail.getInitialProps = async function(context) {
  const { slug } = context.query;
  // const res = await fetch(`https://6j0n7kx92c.execute-api.us-east-2.amazonaws.com/dev/api/posts/${slug}`);
  // const post = await res.json();
  const post  = data[slug];

  console.log(`Fetched post: ${post}`);

  return { post };
};

export default Detail;