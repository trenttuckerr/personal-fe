import React from 'react';

const Contact = () => {
  return (
    <section
      className="card-section-imagia"
      id="contact"
      style={{ background: 'black' }}
    >
      <h2
        className="text-capitalize"
        style={{
          fontSize: '56px',
          fontFamily: 'DM Sans, sans-serif',
          color: 'white',
        }}
      >
        Contact
      </h2>
      <div className="container" style={{ background: 'black' }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-sm-6 col-md-4">
            <div className="card-container-imagia">
              <div className="card-imagia">
                <div className="front-imagia">
                  <div className="cover-imagia cover-gradient"></div>
                  <div className="user-imagia">
                    <img alt="" src="assets/img/IMG_3031-2.jpg" />
                  </div>
                  <div className="content-imagia">
                    <h3
                      className="name-imagia"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      Trent Tucker
                    </h3>
                    <p
                      className="subtitle-imagia"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        color: 'rgb(170, 170, 170)',
                      }}
                    >
                      Backend | Cloud | DevOps
                    </p>
                    <p
                      className="text-center"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      View my socials below.
                    </p>
                  </div>
                  <div className="footer-imagia">
                    <span
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      <i className="fa fa-plus"></i> More info
                    </span>
                  </div>
                </div>
                <div className="back-imagia">
                  <div className="content-imagia content-back-imagia">
                    <div>
                      <h3
                        className="text-center"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        Trent Tucker
                      </h3>
                      <p
                        className="text-center"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        Bachelor of Science, Computer Science, St.
                        Edward&apos;s University (Fall 2021- Spring
                        2024)
                      </p>
                    </div>
                  </div>
                  <div className="footer-imagia">
                    <div className="social-imagia text-center">
                      <a href="mailto:ttucker296@gmail.com">
                        <i
                          className="fa fa-comment"
                          style={{ color: 'black' }}
                        ></i>
                      </a>
                      <a>
                        <i
                          className="fa fa-linkedin"
                          style={{ color: 'black' }}
                        ></i>
                      </a>
                      <a href="#">
                        <i
                          className="fa fa-github"
                          style={{ color: 'black' }}
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
