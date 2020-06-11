import Link from 'next/link';
import dateformat from 'dateformat';
import fetch from 'isomorphic-unfetch';



import Layout from '../components/Layout';



const Blog = (props) => {
  console.log("this is the props data: ", props.posts)
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

      <div className="section">
        <div className="content-wrap">
          <div className="container">       

            <div className="row">
              {props.posts.map(item => (
                  <div className="col-sm-12 col-md-12 col-lg-4 mb-5">
                    <div className="rs-news-1">
                      <div className="media-box">
                        <img src={item.image_url} alt="" className="img-fluid" />
                      </div>
                      <div className="body-box">
                        <div className="title">{item.title}</div>
                        <div className="meta-date">{dateformat(item.date_posted, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</div>
                        <div dangerouslySetInnerHTML={{__html: item.content.slice(0, 200)+"..."}}></div>
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

        .body-box{
          text-align: left;
        }

        .body-text{
          max-width: 100% !important;
        }

        .blog-bg{
          background-image: url("images/Blog_Banner.jpg");
        }

        p{
            margin-bottom: .4rem !important;
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
}

// {props.posts.map(item => {
//                   return(
//                       <div className="col-sm-12 col-md-6 col-lg-4 mb-5">
//                         <div className="rs-news-1">
//                           <div className="media-box">
//                             <img src="images/dummy-img-600x400.jpg" alt="" className="img-fluid" />
//                           </div>
//                           <div className="body-box">
//                             <div className="title"><a href={"/p/"+item.title}>{item.title}</a></div>
//                             <div className="meta-date">{dateformat(item.date_posted, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</div>
//                             <p>{item.content.slice(0, 50)}...</p>
//                             <div className="text-center">
//                               <a href="page-events-single.html" className="btn btn-primary">VIEW</a>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     )
//               })}

Blog.getInitialProps = async function() {
  // const res = await fetch('https://0mi6xhcet3.execute-api.us-east-2.amazonaws.com/dev/api/designs');
  const POST_API = `https://gwh3ump9m0.execute-api.us-east-2.amazonaws.com/prod/api/posts?draft=${false}`

  const res = await fetch(POST_API);
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data}`);
  data.map(entry => console.log(entry.id,entry.title))

  return {
    posts: data.map(entry => entry)
  };
};

export default Blog
