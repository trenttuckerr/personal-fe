import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <span
              className="copyright"
              style={{
                color: 'white',
                fontFamily: 'DM Sans, sans-serif',
              }}
            >
              Trent Tucker © 2023
            </span>
          </div>
          <div className="col-md-4">
            <ul className="list-inline quicklinks">
              <li className="list-inline-item"></li>
              <li className="list-inline-item"></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
