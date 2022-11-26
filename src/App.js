import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { css } from "styled-components/macro"; //eslint-disable-line

/* Inner Pages */
import AboutUsPage from "pages/AboutUs.js";
import ContactUsPage from "pages/ContactUs.js";
import BlogIndexPage from "pages/BlogIndex.js";
import ResourcesPage from "pages/Resources.js";
import EventsAndIntiativesPage from "pages/EventsAndIntiatives.js";
import ResoucesPage from "pages/Resources.js";
import Homepage from "pages/Homepage.js";
import SponsorsPage from "pages/SponsorsPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;


  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/newsandupdates" element={<BlogIndexPage />} />
          <Route path="/joinus" element={<AboutUsPage />} />
          <Route path="/eventsandinitiatives" element={<EventsAndIntiativesPage />} />
          <Route path="/resources" element={<ResoucesPage />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
        </Routes>
      </Router>
    </>
  );
}

