import Link from 'next/link';
import dateformat from 'dateformat';
import fetch from 'isomorphic-unfetch';


import Layout from '../components/Layout';



const Service = (props) => (
    <Layout>
      <div className="section banner-page services-bg">
        <div className="content-wrap pos-relative">
          <div className="d-flex justify-content-center bd-highlight mb-3">
            <div className="title-page">Services</div>
          </div>
          <div className="d-flex justify-content-center bd-highlight mb-3">
              <nav aria-label="breadcrumb">
              <ol className="breadcrumb ">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Services</li>
              </ol>
            </nav>
            </div>
        </div>
      </div>

      <div className="section">
        <div className="content-wrap">
          <div className="container">       

            <div className="row">

              

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
                      <p><a className="btn btn-lg btn-primary" href="#" role="button">More</a></p>
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
                      <p><a className="btn btn-lg btn-primary" href="#" role="button">More</a></p>
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
                    <p><a className="btn btn-lg btn-primary" href="#" role="button">More</a></p>
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

        .services{
          padding-top: 0;
        }

        .services-bg{
          background-image: url("images/Services_Banner.jpg");
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Layout>
)


export default Service
