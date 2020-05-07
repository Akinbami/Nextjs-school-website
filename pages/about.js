import Link from 'next/link';

import Layout from '../components/Layout';
import Banner from '../components/Banner';



const About = () => (
    <Layout>
      <div className="section banner-page about-bg">
        <div className="content-wrap pos-relative">
          <div className="d-flex justify-content-center bd-highlight mb-3">
            <div className="title-page">About Us</div>
          </div>
          <div className="d-flex justify-content-center bd-highlight mb-3">
              <nav aria-label="breadcrumb">
              <ol className="breadcrumb ">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">About Us</li>
              </ol>
            </nav>
            </div>
        </div>
      </div>

      <div className="section">
        <div className="content-wrap pb-0">
          <div className="container">
            <div className="text-center">
              <p className="supheading">Why Choose Us</p>
              <h2 className="section-heading mb-5">
                Best of ABI
              </h2>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-7">
                <div className="text-left">
                  <p className="">
                    School of Academic and Behavioural Interventions (ABI), 
                    offers a consultancy and management service to support 
                    parents and educational providers when working with children 
                    on the autistic spectrum and related disorders.</p>
                  <p className="">
                    Autism is a lifelong diagnosis. Applied Behavioural Analysis (ABA) 
                    is one of many therapeutic interventions used to support the learning 
                    and development of children with autism. After several observations 
                    and discussions held with school professionals, it is clear that 
                    educational providers are concerned about the progress of their pupils 
                    with behavioural and educational diﬃculties.</p>
                  <p className="">
                    The demand for ABA therapy is increasing throughout the UK and around the globe. 
                    The recognition of evidence based practice and effectiveness is now welcomed by 
                    independent schools and health professionals. We at School ABI, believe that 
                    the earlier a child starts on a tailored therapeutic programme, the better the 
                    outcomes will be.</p>
                  <p className="">
                    We understand that in many cases therapeutic interventions should 
                    not be limited to one practice. We encourage working as a multidisciplinary 
                    team to gain different perspectives on the complexity of the disorder and 
                    its characteristics. We recognise that collectively working together we can 
                    produce lasting outcomes at each stage of development.</p>
                  <p className="">
                    Our aim is to support schools and home programmes on their journey towards inclusion 
                    and building relationships with parents and teachers.</p>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-5">
                <img src="images/about_side.jpg" alt="" className="img-fluid pb-2" />
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

        .about-bg{
          background-image: url("images/About_Banner.jpg");
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Layout>
)

export default About
