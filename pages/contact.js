import Link from 'next/link';

import Layout from '../components/Layout';
import Banner from '../components/Banner';



const Contact = () => (
    <Layout>
      <div className="section banner-page contact-bg">
        <div className="content-wrap pos-relative">
          <div className="d-flex justify-content-center bd-highlight mb-3">
            <div className="title-page">Contact</div>
          </div>
          <div className="d-flex justify-content-center bd-highlight mb-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb ">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Contact</li>
              </ol>
            </nav>
            </div>
        </div>
      </div>

      <div id="contact">
        <div className="content-wrap pb-0">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12">
                
                <form action="#" className="form-contact" id="contactForm" data-toggle="validator" novalidate="true">
                  <div className="row">
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control" id="p_name" placeholder="Enter Name" required="" />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group">
                        <input type="email" className="form-control" id="p_email" placeholder="Enter Email" required="" />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control" id="p_subject" placeholder="Subject" />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control" id="p_phone" placeholder="Enter Phone Number" />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                     <textarea id="p_message" className="form-control" rows="6" placeholder="Enter Your Message"></textarea>
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-group text-center">
                    <div id="success"></div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                  </div>
                </form>
                <div className="spacer-content"></div>

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

        .contact-bg{
          background-image: url("images/Contact_Banner.jpg");
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

export default Contact
