import React, { useState, useEffect } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import MainFeature from "components/coloumns/TwoColWithButton.js";
import Footer from "components/footers/FiveColumnDark.js";
import Hero from "components/hero/BackgroundAsImage.js";
import TeamCard from "components/cards/ProfileThreeColGrid.js"
import Blog from "components/blog/ThreeColSimpleWithImage.js"
import ContactForm from "components/forms/SimpleContactUs"

export default () => {
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
        /*
   * Using gtag like this because we only want to use Google Analytics when Main Landing Page is rendered
   * Remove this part and the the gtag script inside public/index.html if you dont need google analytics
   */
  useEffect(() => {
    window.gtag("js", new Date());
    window.gtag("config", "UA-45799926-9");
  })
  return (

    <AnimationRevealPage>
      <Hero/>
      <MainFeature
      subheading={false}
        heading={
          <>
            About Us
          </>
        }
        //This is the about us description. the br's a breaks in the middle for paragraph structure
        description={
          <Description>
            The University of Toronto Mental Health Association (UOFTMHA) was established in 2016 and works to link students with mental health resources. 
            <br />
            <br />
            We're a student-run club that aims to break the stigma surrounding mental health and empower students through their mental health journeys while also practicing diversity, equity & inclusion. We strive to educate and promote healthy coping mechanisms among students struggling with their mental health and aim to make mental health resources a lot more accessible to students. We aim to do this by hosting events, seminars, workshops, fundraisers, and other initiatives throughout the year to raise awareness and educate UofT students as well as members of the community on various mental health themes. In our approach, we aim to increase representations of various mental health topics and amplify voices of underrepresented groups within the university space online and in-person, while constantly obtaining ongoing feedback from club members and the UofT community to better cater our initiatives towards their needs.
            <br />
            <br />
            ​We try and look at mental health from a different perspective, showcasing more than just the clinical aspect but also healthy mind, healthy body lifestyle and resources. 
          </Description>
        } 
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Join Us"
        imageSrc={"https://images.unsplash.com/photo-1459664018906-085c36f472af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        }
        imageCss={imageCss}
        imageDecoratorBlob={false}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      <Blog />
      <TeamCard />
      <ContactForm />
      <Footer />
    </AnimationRevealPage>
  );
}
