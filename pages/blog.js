import Link from 'next/link';
import dateformat from 'dateformat';
import fetch from 'isomorphic-unfetch';


import Layout from '../components/Layout';



const Blog = (props) => (
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

      <div className="section">
        <div className="content-wrap">
          <div className="container">       

            <div className="row">

              {props.posts.map(item => {
                  return(
                      <div className="col-sm-12 col-md-6 col-lg-4 mb-5">
                        <div className="rs-news-1">
                          <div className="media-box">
                            <img src="images/dummy-img-600x400.jpg" alt="" className="img-fluid" />
                          </div>
                          <div className="body-box">
                            <div className="title"><a href={"/p/"+item.title}>{item.title}</a></div>
                            <div className="meta-date">{dateformat(item.date_posted, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</div>
                            <p>{item.content.slice(0, 50)}...</p>
                            <div className="text-center">
                              <a href="page-events-single.html" className="btn btn-primary">JOIN NOW</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
              })}
              
              <div className="col-sm-12 col-md-6 col-lg-4 mb-5">
                <div className="rs-news-1">
                  <div className="media-box">
                    <img src="images/dummy-img-600x400.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="body-box">
                    <div className="title">English Day on Carfree day</div>
                    <div className="meta-date">March 19, 2016 / 08:00 am - 10:00 am</div>
                    <p>We provide high quality design at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores...</p>
                    <div className="text-center">
                      <a href="page-events-single.html" className="btn btn-primary">JOIN NOW</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4 mb-5">
                <div className="rs-news-1">
                  <div className="media-box">
                    <img src="images/dummy-img-600x400.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="body-box">
                    <div className="title">Play & Study with Mrs. Smith</div>
                    <div className="meta-date">March 19, 2016 / 08:00 am - 10:00 am</div>
                    <p>We provide high quality design at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores...</p>
                    <div className="text-center">
                      <a href="page-events-single.html" className="btn btn-primary">JOIN NOW</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4 mb-5">
                <div className="rs-news-1">
                  <div className="media-box">
                    <img src="images/dummy-img-600x400.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="body-box">
                    <div className="title">Drawing at City Park</div>
                    <div className="meta-date">March 19, 2016 / 08:00 am - 10:00 am</div>
                    <p>We provide high quality design at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores...</p>
                    <div className="text-center">
                      <a href="page-events-single.html" className="btn btn-primary">JOIN NOW</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4 mb-5">
                <div className="rs-news-1">
                  <div className="media-box">
                    <img src="images/dummy-img-600x400.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="body-box">
                    <div className="title">English Day on Carfree day</div>
                    <div className="meta-date">March 19, 2016 / 08:00 am - 10:00 am</div>
                    <p>We provide high quality design at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores...</p>
                    <div className="text-center">
                      <a href="page-events-single.html" className="btn btn-primary">JOIN NOW</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4 mb-5">
                <div className="rs-news-1">
                  <div className="media-box">
                    <img src="images/dummy-img-600x400.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="body-box">
                    <div className="title">Play & Study with Mrs. Smith</div>
                    <div className="meta-date">March 19, 2016 / 08:00 am - 10:00 am</div>
                    <p>We provide high quality design at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores...</p>
                    <div className="text-center">
                      <a href="page-events-single.html" className="btn btn-primary">JOIN NOW</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4 mb-5">
                <div className="rs-news-1">
                  <div className="media-box">
                    <img src="images/dummy-img-600x400.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="body-box">
                    <div className="title">Drawing at City Park</div>
                    <div className="meta-date">March 19, 2016 / 08:00 am - 10:00 am</div>
                    <p>We provide high quality design at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores...</p>
                    <div className="text-center">
                      <a href="page-events-single.html" className="btn btn-primary">JOIN NOW</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>


      <style jsx>{`
        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }



        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }


        .abc-logo{
          width: 3rem;
        }

        .body-text{
          max-width: 100% !important;
        }

        .blog-bg{
          background-image: url("images/Blog_Banner.jpg");
        }

        .services{
          padding-top: 0;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Layout>
)

Blog.getInitialProps = async function() {
  // const res = await fetch('https://0mi6xhcet3.execute-api.us-east-2.amazonaws.com/dev/api/designs');
  const res = await fetch('https://6j0n7kx92c.execute-api.us-east-2.amazonaws.com/dev/api/posts');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    posts: data.map(entry => entry)
  };
};

export default Blog
