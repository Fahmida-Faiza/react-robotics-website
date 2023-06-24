import React from "react";
import { Link, NavLink } from "react-router-dom";
// import Herosection from '../components/Herosection'

const Home = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            {/* <a href="#contact">Contact</a> */}
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            {/* <a href="#blog">Blog</a> */}

            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            {/* <a class="active" href="#home">
              Home
            </a> */}

            <NavLink to="/">Home</NavLink>
          </li>
          <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="/">
                <img
                  src="/logo192.png"
                  alt="Logo"
                  width={30}
                  height={24}
                  class="d-inline-block align-text-top"
                />
              </a>
            </div>
          </nav>
        </ul>
      </header>

      {/* <Herosection/> */}
    </>
  );
};

export default Home;
