import React from "react";

const TopNav = () => {
  return (
    <div>
      <title>Responsive Navigation bar</title>
      <header className="head-area">
        <div class="header-container">
          <div class="logo">
            <h1>
              <span>Cricket</span> API integiration
            </h1>
          </div>
          <div className="mobile-nav">
            <i class="fas fa-bars"></i>
          </div>
          <div className="menu">
            <ul className="menu1">
              <li>
                <a href="#" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Works
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Services
                </a>
              </li>
              <li>
                <a href="#" class="">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <section>{/* <Outlet/> */}</section>
    </div>
  );
};

export default TopNav;
