import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import HomePage3 from '../HomePage3/HomePage3';
import BlogPage from '../BlogPage/BlogPage';
import BlogDetails from '../BlogDetails/BlogDetails';
import AboutPage from '../AboutPage/AboutPage';
import ContactPage from '../ContactPage/ContactPage';
import TokenPage from '../TokenPage/TokenPage';
import SigninPage from '../SigninPage/SigninPage';
import SignupPage from '../SignupPage/SignupPage';

const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage3 />} />
          <Route path="home_pepecoin" element={<HomePage3 />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog-single/:slug" element={<BlogDetails />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="token" element={<TokenPage />} />
          <Route path="sign_in" element={<SigninPage />} />
          <Route path="sign_up" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
