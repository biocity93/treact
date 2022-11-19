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
import MainLandingPage from "pages/MainLandingPage.js";
import ComponentRenderer from "ComponentRenderer.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;


  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
        <Route path="/components/:type/:subtype/:name" element={<ComponentRenderer />} />
          <Route path="/components/:type/:name" element={<ComponentRenderer />} />
          <Route path="/" element={<MainLandingPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/newsandupdates" element={<BlogIndexPage />} />
          <Route path="/joinus" element={<AboutUsPage />} />
          <Route path="/eventsandinitiatives" element={<EventsAndIntiativesPage />} />
          <Route path="/resources" element={<ResoucesPage />} />
        </Routes>
      </Router>
    </>
  );
}

