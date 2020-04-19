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
          <div className="service-content"> 

            <div className="service-item">
              <p className="title">Consultation</p>
              <p className="service-text">
                This involves advice and guidance on speciﬁc learning needs. 
                Discussing programmes and strategies that work to meet your child’s 
                targets as well as strategies to improve behaviour and life skills. 
                We hope that by creating a clear pathway you are able to build conﬁdence
                 for all involved in your child’s developmental journey
              </p>
            </div>

            <div className="service-item">
              <p className="title">Assessments</p>
              <p className="service-text">
                We offer a variety of assessments; including careful screening and observations on communication, academia and social interaction skills. 
                Our consultants will evaluate the milestones of your child’s development in areas such as learning, play, communication, self-help and transitioning. It is important to get an indication of your child’s stage of development in order to implement a programme at an appropriate level. 
              </p>
            </div> 

            <div className="service-item">
              <p className="title">Training Programmes</p>
              <p className="service-text">
                Our interactive training programmes are designed for individuals and teams 
                looking to achieve sustainable results. We cover current issues, hands on training, 
                best practices, tips and tools, with real example cases on ethics. 
              </p>
            </div> 

            <div className="service-item">
              <p className="title">Therapeutic Input/curriculum development</p>
              <p className="service-text">
                Once a detailed assessment has been completed and a referral is made 
                for therapeutic support, we are able to offer a personalised programme 
                  to support all areas of your child’s need in the best way possible. We 
                will work in partnership with external agencies where necessary to ensure 
                optimal and lasting improvements. Continuous advice and updates will be given during the course of therapy. 
              </p>
            </div>  

            <div className="service-note">
              <p className="title service-note-title">Please note:</p>
              <p className="service-note-text">
                We are a private practice and offer our services throughout the UK, 
                Europe, Africa and the Middle-East. We are totally independent of any 
                organisation and have no formal associations with other agencies or 
                consultancies on ABA therapy.
              </p>
              <p className="service-note-text">For information and to discuss further the support we offer, contact us</p>
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

        .service-content{
          padding-left: 20%;
          padding-right: 20%;
        }

        .service-note-text{
          color: #fd008f !important;
          font-size: 0.8rem;
        }

        .service-note-title{
          font-size: 1.2rem !important;
          font-weight: 700;
        }

        .title{
          font-size: 1.3rem;
          font-weight: 500;
          margin-bottom: 0; 
        }


        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
          .service-content{
            padding-left: 5%;
            padding-right: 5%;
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
