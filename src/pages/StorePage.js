import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FooterMain";
import Store from "components/coloumns/Store.js";

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <Store
      heading="UofT Store"
      subheading="To purchase: mail@uoftmha.ca"
      />
      <Footer />
    </AnimationRevealPage>
  );
};
