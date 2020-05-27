import { useRouter } from 'next/router';
import Link from 'next/link';

import Layout from '../../components/Layout';
import dateformat from 'dateformat';
import fetch from 'isomorphic-unfetch';
// import data from '../../components/Data';
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
									<img src={props.post.image_url} alt="" className="img-fluid rounded" /> 

									<div className="meta-date">{dateformat(props.post.date_posted, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</div>
                        			<div dangerouslySetInnerHTML={{__html: props.post.content}}></div>
								</div>
							</div>

							<div className="col-sm-12 col-md-12 col-lg-3">
								<h3 className="title"> Related Blogs </h3>
								{props.related.map(item=>(
										<div className="rs-news-1 mb-2">
						                  <div className="media-box">
						                    <img src={item.image_url} alt="" className="img-fluid" />
						                  </div>
						                  <div className="body-box">
						                    <div className="title">{item.title}</div>
						                    <div className="meta-date">{dateformat(props.post.date_posted, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</div>
						                    <div className="text-center">
						                    	<Link href={`/p/${item.slug}?pd=${item.id}`}>
						                      		<a className="btn btn-secondary">View</a>
						                      	</Link>
						                    </div>
						                  </div>
						                </div>
									)
								)} 
					            
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
  const { slug,pd } = context.query;
  const BASE_POST_API = "https://gwh3ump9m0.execute-api.us-east-2.amazonaws.com/prod/api/posts"
  const POST_API = BASE_POST_API + `/${pd}`

  const res = await fetch(POST_API);
  const post = await res.json();
  // const post  = data[slug];

  const related_res = await fetch(BASE_POST_API);
  const related_post = await related_res.json();

  console.log(`Fetched post: ${post}`);
  console.log(`Fetched related posts: ${related_post}`);


  return { "post": post, "related": related_post.slice(0,2) };
};

export default Detail;