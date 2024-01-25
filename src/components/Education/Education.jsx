import React from 'react';

const Education = () => {
  return (
    <div
      id="fw_al_007"
      className="carousel ps_rotate_scale_c ps_indicators_l ps_control_rotate_f swipe_x ps_easeOutQuint text-center dm-sans-font"
      data-ride="carousel"
      data-pause="hover"
      data-interval="5000"
      data-duration="2000"
    >
      <h2
        style={{
          color: 'white',
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '58px',
          textAlign: 'center',
          marginBottom: '0px',
        }}
      >
        Education
      </h2>
      <h2
        style={{
          color: 'white',
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '36px',
          textAlign: 'center',
          marginBottom: '0px',
        }}
      >
        Computer Science, St. Edward&apos;s University, 2024
      </h2>
      <br></br>
      <ol className="carousel-indicators">
        <li
          data-target="#fw_al_007"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#fw_al_007" data-slide-to="1"></li>
        <li data-target="#fw_al_007" data-slide-to="2"></li>
      </ol>
      <div
        className="carousel-inner"
        role="listbox"
        style={{ minHeight: '400px' }}
      >
        <div
          className="carousel-item active"
          style={{ background: 'black' }}
        >
          {/* <img src="assets/img/c-svg.png" alt="fw_al_007_01" /> */}
          <div className="fw_al_007_slide">
            <h3 data-animation="animated flipInX">Austin, Texas</h3>
            <h1 data-animation="animated flipInX">
              <span>2021-2022</span>
            </h1>
            <p data-animation="animated flipInX">
              CS Courses Taken<br></br> Transferred: Machine
              Programming & Organization, Object-Oriented Programming,
              Introduction to Data Structures<br></br>St.
              Edward&apos;s: Computing Concepts I, Web Programming,
              Algorithmic-Problem Solving, Computing Concepts II
            </p>
          </div>
        </div>
        <div
          className="carousel-item"
          style={{ background: 'black' }}
        >
          <img src="assets/img/fw_al_007_02.jpg" alt="fw_al_007_02" />
          <div className="fw_al_007_slide">
            <h3 data-animation="animated flipInX">Austin, Texas</h3>
            <h1 data-animation="animated flipInX">
              <span>2022-2023</span>
            </h1>
            <p data-animation="animated flipInX">
              CS Courses Taken<br></br>Component-Based Programming,
              Programming Languages, Database Theory & Applications,
              Algorithms & Data Structures, Computer Security &
              Privacy, Software Engineering
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="assets/img/fw_al_007_03.jpg" alt="fw_al_007_03" />
          <div className="fw_al_007_slide">
            <h3 data-animation="animated flipInX">Austin, Texas</h3>
            <h1 data-animation="animated flipInX">
              <span>2023-2024</span>
            </h1>
            <p data-animation="animated flipInX">
              CS Courses Taken<br></br>Senior Project, Operating
              Systems, Mobile Programming, Computer Networks
            </p>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#fw_al_007"
        data-slide="prev"
      >
        <span className="fa fa-angle-left" aria-hidden="true"></span>
      </a>
      <a
        className="carousel-control-next"
        href="#fw_al_007"
        data-slide="next"
      >
        <span className="fa fa-angle-right" aria-hidden="true"></span>
      </a>
      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/bootstrap/js/bootstrap.min.js"></script>
      <script src="assets/js/Swipe-Slider-9.js"></script>
    </div>
  );
};

export default Education;
