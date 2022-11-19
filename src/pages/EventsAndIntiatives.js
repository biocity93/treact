import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FooterMain";
import MainFeature1 from "components/coloumns/TwoColWithButton.js";

const Description = tw.span`inline-block mt-8`;
const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>November 27th, 2021</Subheading>}
        heading="Building Bridges, Building Knowledge: A Mental Health Panel"
        descriptionOne={<Description>We hosted a virtual mental health seminar in collaboration with the Seminar Team at the Psychology Students' Association, where we invited clinical psychologists Dr. Babineau, Dr. Goldstein, and Dr. Kohut to discuss topical issues in the discipline of university student mental wellness. The discussion touched upon topics such as how certain factors in childhood & adolescence may contribute to mental health difficulties, how university students can adopt certain strategies to better cope with such struggles, and how we can change the narrative and become more sensitive and inclusive in our approach to talking about mental health-related topics.</Description>}
        buttonRounded={false}
        imageDecoratorBlob={false}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
        primaryButtonText="Become General Member"
        imageSrc="https://uoftmha.weebly.com/uploads/2/5/5/2/25525917/published/img-9653.jpg?1641410970&auto=format&fit=crop&w=768&q=80"
      />
        <MainFeature1
        subheading={<Subheading>March 1st, 2020</Subheading>}
        heading="The UofT Mental Health Conference"
        descriptionOne="We held this informative and resourceful conference to raise awareness about mental health and the issues that surround the topic. Also, the event was a fundraiser as professional speakers came in to discuss the different perspectives of mental health ranging from nutrition, suicide, natural paths, addictions and etc."
        buttonRounded={false}
        primaryButtonText="Become General Member"
        imageSrc="https://uoftmha.weebly.com/uploads/2/5/5/2/25525917/editor/38b11d21-72cb-4037-b081-7136e98fbee5.jpg?1599692484&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
      />
        <MainFeature1
        subheading={<Subheading>February 9th, 2020</Subheading>}
        heading="Ride Cycle Club Charity Ride"
        descriptionOne="The Ride Cycle Club works to promote physical activity and community involvement.  Our team attended this charity ride to raise money and promote physical activity among our University of Toronto students. We always promote a healthy mind, healthy body lifestyle with exercise."
        buttonRounded={false}
        primaryButtonText="Become General Member"
        imageSrc="https://uoftmha.weebly.com/uploads/2/5/5/2/25525917/editor/c255887b-5418-4c1e-96c2-e7628207c70a.jpg?1599350676&auto=format&fit=crop&w=768&q=80"
      />
        <MainFeature1
        subheading={<Subheading>2020</Subheading>}
        heading="Overview"
        descriptionOne="This year we expanded our association to all three campuses; St. George, Scarborough and Mississauga. We redirected our club initiatives and expanded our departments to include diversity and equity, fundraising, a first year mentorship program and etc.  As a team we maneuvered obstacles regarding COVID-19, tome sure support is still available to students."
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Become General Member"
        imageSrc="https://uoftmha.weebly.com/uploads/2/5/5/2/25525917/published/all.png?1603217307&auto=format&fit=crop&w=768&q=80"
      />
        <MainFeature1
        subheading={<Subheading>2019</Subheading>}
        heading="Overview"
        descriptionOne="We attended a Soul Cycle event and also held our Mental Health Conference where we had professionals in specific fields come and discuss the importance of mental health from their fields of expertise. We also made an immense effort to increase our presence on Instagram and Facebook so we can connect with our community."
        buttonRounded={false}
        primaryButtonText="Become General Member"
        imageSrc="https://uoftmha.weebly.com/uploads/2/5/5/2/25525917/published/mha-campus-logos-1-copy-2.png?1599701953&auto=format&fit=crop&w=768&q=80"
      />
        <MainFeature1
        subheading={<Subheading>2018</Subheading>}
        heading="Overview"
        textOnLeft={false}
        descriptionOne="Throughout the year the team did lots of research on how to properly maneuver and overcome mental health issues as well as figure out how to utilize this information to provide resources for the club. The founders also attended the Suicide Survivors Conference which lead the team to expand focuses to add addiction, depression, stress, anxiety and found support. Further, we expanded the team and created various social media platforms to get our community more involved."
        
        imageSrc="https://uoftmha.weebly.com/uploads/2/5/5/2/25525917/published/mha-campus-logos-1-copy-3.png?1599702289&auto=format&fit=crop&w=768&q=80"
      />
        <MainFeature1
        subheading={<Subheading>2017</Subheading>}
        heading="Overview"
        descriptionOne="Our main focus was to reach out to the St. George campus to raise awareness and increase club visibility. We worked to pair with other clubs and groups on campus. An achievement we have is lobbying with the UofT Health and Wellness."
        imageSrc="https://uoftmha.weebly.com/uploads/2/5/5/2/25525917/published/university-of-toronto-st-george.jpg?1599694694&auto=format&fit=crop&w=768&q=80"
      />
        <MainFeature1
        subheading={<Subheading>2016</Subheading>}
        heading="Overview"
        textOnLeft={false}
        primaryButtonText={false}
        primaryButtonUrl={false}
        imageBorder={false}
        descriptionOne="The University of Toronto Mental Health Association was founded in 2016. The association's major focuses through the year consisted of suicide prevention and awareness. We worked to make partnerships with local charities that focused on suicide, promoting them to students and working to improve the resources available outside the campus. Both founder of our association participated and collaborated with the Toronto Distress Centre, who provided insight and resources for both suicide prevention and mental health awareness."
        imageSrc="https://uoftmha.weebly.com/uploads/2/5/5/2/25525917/published/mha-logo-transparent.png?1599694593&fit=crop&w=768&q=80"
      />
      <Footer />
    </AnimationRevealPage>
  );
};
