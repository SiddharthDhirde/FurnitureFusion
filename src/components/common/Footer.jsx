import * as Route from '@/constants/routes';
// import logo from '@/images/logo-full.png';
import FF43 from '@/images/furnitureLogo/FF43.png';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const { pathname } = useLocation();

  const visibleOnlyPath = [
    Route.HOME,
    Route.SHOP
  ];

  return !visibleOnlyPath.includes(pathname) ? null : (
    <footer className="footer">
      <div className="footer-col-1">
        <strong>
          <span>
            Developed by
            {' '}
            <a href="https://github.com/SiddharthDhirde">SIDDHARTH DHIRDE</a>
          </span>
        </strong>
      </div>
      <div className="footer-col-2">
        <img alt="Footer logo" className="footer-logo" src={FF43} />
        <h5>
          &copy;&nbsp;
          {new Date().getFullYear()}
        </h5>
      </div>
      <div className="footer-col-3">
        {/* <strong>
          <span>
            Fork this project &nbsp;
            <a href="">HERE</a>
          </span>
        </strong> */}
      </div>
    </footer>
  );
};

export default Footer;
