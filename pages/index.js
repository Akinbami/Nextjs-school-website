import Link from 'next/link';

import Layout from '../components/Layout';
import Banner from '../components/Banner';




const Index = () => (
    <Layout>
      
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="bd-placeholder-img" width="100%" height="100%"  src="images/banner1.jpg" alt="Slider" />
            <div class="container">
              <div class="carousel-caption">
                <h1>Consultation</h1>
                <p>This involves advice and guidance on speciﬁc learning needs. Discussing programmes and strategies
                    that work to meet your child’s targets as well as strategies to improve behaviour and life skills. We
                    hope that by creating a clear pathway you are able to build conﬁdence for all involved in your child’s
                    developmental journey.</p>
                <p><a class="btn btn-lg btn-primary" href="#" role="button">Learn More</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img class="bd-placeholder-img" width="100%" height="100%"  src="images/banner2.jpg" alt="Slider" />
            <div class="container">
              <div class="carousel-caption">
                <h1>Assessments</h1>
                <p>We offer a variety of assessments; including careful screening and observations on communication,
                  academia and social interaction skills.
                  Our consultants will evaluate the milestones of your child’s development in areas such as learning,
                  play, communication, self-help and transitioning. It is important to get an indication of your child’s
                  stage of development in order to implement a programme at an appropriate level.</p>
                <p><a class="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img class="bd-placeholder-img" width="100%" height="100%"  src="images/banner3.jpeg" alt="Slider" />
            <div class="container">
              <div class="carousel-caption">
                <h1>Training Programmes</h1>
                <p>Our interactive training programmes are designed for individuals and teams looking to achieve
                  sustainable results. We cover current issues, hands on training, best practices, tips and tools, with
                  real example cases on ethics.</p>
                <p><a class="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <div class="section">
        <div class="content-wrap">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-6">
                <img src="images/welcome_pic.jpg" alt="" class="img-fluid img-border" />
              </div>
              <div class="col-sm-12 col-md-12 col-lg-6">
                <h2 class="section-heading">
                  About Us
                </h2>
                <p>School of Academic and Behavioural Interventions (ABI), offers a consultancy and
                management service to support parents and educational providers when working with
                children on the autistic spectrum and related disorders. </p>

                <p>Autism is a lifelong diagnosis. Applied Behavioural Analysis (ABA) is one of many therapeutic
                interventions used to support the learning, development of children with autism and related
                conditions. After several observations and discussions held with school professionals it is
                clear that educational providers are concerned about the progress of their pupils with
                behavioural and educational diﬃculties.</p>
                <div class="spacer-10"></div>
                <a href="#" class="btn btn-secondary">DISCOVER MORE</a>
                <div class="spacer-30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="">
        <div class="content-wrap services">
          <div class="container">

            <div class="row">
              <div class="col-sm-12 col-md-12">
                <p class="supheading text-center">Our Services</p>
                <h2 class="section-heading text-center mb-5">
                  Top Services
                </h2>
              </div>
            </div>

            <div class="row mt-4">
              
              <div class="col-sm-12 col-md-12 col-lg-4">
                <div class="rs-class-box mb-5">
                  <div class="media-box">
                    <img src="images/consultation.jpg" alt="" class="img-fluid" />
                  </div>
                  <div class="body-box">
                    <div class="class-name">
                      <div class="title">Consultation</div>
                    </div>
                    <p>This involves advice and guidance on speciﬁc learning needs. Discussing programmes and strategies
                      that work to meet your child’s targets as well as strategies to improve behaviour and life skills. </p>
                      <p><a class="btn btn-lg btn-primary" href="#" role="button">More</a></p>
                  </div>
                </div>
              </div>

              <div class="col-sm-12 col-md-12 col-lg-4">
                <div class="rs-class-box mb-5">
                  <div class="media-box">
                    <img src="images/assessment.jpg" alt="" class="img-fluid" />
                  </div>
                  <div class="body-box">
                    <div class="class-name">
                      <div class="title">Assessments</div>
                    </div>
                    <p>We offer a variety of assessments; including careful screening and observations on communication,
                      academia and social interaction skills.Our consultants will evaluate the milestones of your child’s </p>
                      <p><a class="btn btn-lg btn-primary" href="#" role="button">More</a></p>
                  </div>
                </div>
              </div>

              <div class="col-sm-12 col-md-12 col-lg-4">
                <div class="rs-class-box mb-5">
                  <div class="media-box">
                    <img src="images/training.jpg" alt="" class="img-fluid" />
                  </div>
                  <div class="body-box">
                    <div class="class-name">
                      <div class="title">Training Programmes</div>
                    </div>
                    <p>Our interactive training programmes are designed for individuals and teams looking to achieve
                      sustainable results. We cover current issues, hands on training, best practices, tips and tools,</p>
                    <p><a class="btn btn-lg btn-primary" href="#" role="button">More</a></p>
                  </div>
                </div>
              </div>

            </div>

            <div class="row">
              <div class="col-sm-12 col-md-12">
                <div class="text-center">
                  <a href="#" class="btn btn-primary">SEE MORE SERVICES</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="section bgi-cover-center" data-background="images/blog_bg.jpeg">
        <div class="content-wrap">
          <div class="container">

            <div class="row">
              <div class="col-sm-12 col-md-12">
                <p class="supheading text-center">Blogs</p>
                <h2 class="section-heading text-center mb-5">
                  Don't miss our Contents
                </h2>
              </div>
            </div>

            <div class="row mt-4">
              
              <div class="col-sm-12 col-md-12 col-lg-4 mb-5">
                <div class="rs-news-1">
                  <div class="media-box">
                    <img src="images/dummy-img-600x400.jpg" alt="" class="img-fluid" />
                  </div>
                  <div class="body-box">
                    <div class="title">TALK BILINGUAL</div>
                    <div class="meta-date">March 19, 2016 / 08:00 am - 10:00 am</div>
                    <p>In the U.K we are known for our vast multi-cultural society; having more than two languages
                      being spoken in a home for a number of families is now seen as the norm. The question I
                      pose today </p>
                    <div class="text-center">
                      <a href="page-events-single.html" class="btn btn-secondary">JOIN NOW</a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm-12 col-md-12 col-lg-4 mb-5">
                <div class="rs-news-1">
                  <div class="media-box">
                    <img src="images/dummy-img-600x400.jpg" alt="" class="img-fluid" />
                  </div>
                  <div class="body-box">
                    <div class="title">10 BASIC PROGRAMME MUST HAVES</div>
                    <div class="meta-date">March 19, 2016 / 08:00 am - 10:00 am</div>
                  <p>Running an ABA programme can be very time-consuming and costly. There are a few
                    valuable ‘must haves’, which can potentially affect the outcomes of your programme.</p>
                    <div class="text-center">
                      <a href="page-events-single.html" class="btn btn-secondary">JOIN NOW</a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm-12 col-md-12 col-lg-4 mb-5">
                <div class="rs-news-1">
                  <div class="media-box">
                    <img src="images/dummy-img-600x400.jpg" alt="" class="img-fluid" />
                  </div>
                  <div class="body-box">
                    <div class="title">Drawing at City Park</div>
                    <div class="meta-date">March 19, 2016 / 08:00 am - 10:00 am</div>
                    <p>We provide high quality design at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores...</p>
                    <div class="text-center">
                      <a href="page-events-single.html" class="btn btn-secondary">JOIN NOW</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div class="row">
              <div class="col-sm-12 col-md-12">
                <div class="text-center">
                  <Link href="/blogs">
                    <a  class="btn btn-secondary">SEE MORE BLOGS</a>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      

      

      <style jsx>{`
        .container {
          min-height: 100vh;
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

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
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
          font-size: 4rem;
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



        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      
    </Layout>
)

export default Index
