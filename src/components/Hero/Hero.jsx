import React from 'react';

const Hero = () => {
  return (
    <section
      className="d-xxl-flex justify-content-xxl-center"
      id="hero"
      style={{
        height: '1068px',
        paddingRight: '50px',
        paddingLeft: '50px',
        paddingTop: '170px',
      }}
    >
      <div
        data-bss-disabled-mobile="true"
        data-bss-parallax-bg="true"
        style={{
          height: '862px',
          background:
            'url("assets/img/jeremy-doddridge-Ui_7PiqnNbs-unsplash.jpg") center / cover',
          width: '100%',
        }}
      >
        <div className="container">
          <div className="row d-lg-flex d-xxl-flex justify-content-center justify-content-xxl-center">
            <div className="col-sm-6 col-md-4 d-xxl-flex">
              <div
                className="card-container-imagia"
                style={{ paddingTop: '10px' }}
              >
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
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        Cloud | DevOps | Backend
                      </p>
                      <p
                        className="text-center"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        Computer Science @ St. Edward&apos;s
                        University
                      </p>
                    </div>
                    <div className="footer-imagia">
                      <span>
                        <i className="fa fa-plus"></i> More info
                      </span>
                    </div>
                  </div>
                  <div className="d-xxl-flex justify-content-xxl-center back-imagia">
                    <div className="content-imagia content-back-imagia">
                      <div>
                        <h3
                          className="text-center"
                          style={{
                            fontFamily: 'DM Sans, sans-serif',
                          }}
                        >
                          Trent Tucker
                        </h3>
                        <p
                          className="text-center"
                          style={{
                            fontFamily: 'DM Sans, sans-serif',
                          }}
                        >
                          View my socials below.
                        </p>
                      </div>
                    </div>
                    <div className="footer-imagia">
                      <div className="social-imagia text-center">
                        <a
                          href="https://github.com/trenttuckerr"
                          data-testid="github-link"
                        >
                          <i
                            className="fa fa-github"
                            style={{ color: 'black' }}
                          ></i>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/-trent-tucker/"
                          data-testid="linkedin-link"
                        >
                          <i
                            className="fa fa-linkedin"
                            style={{ color: 'black' }}
                          ></i>
                        </a>
                        <a
                          href="mailto:ttucker296@gmail.com"
                          data-testid="email-link"
                        >
                          <i
                            className="fa fa-envelope-o"
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
      </div>
    </section>
  );
};

export default Hero;
