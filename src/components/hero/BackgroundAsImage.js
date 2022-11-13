import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line



import Header, { NavLink, NavLinks, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url("https://nowtoronto.com/wp-content/uploads/2020/07/University-of-Toronto-ferenz-980x618.jpg");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-blue-800 opacity-75`;
const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-20 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-5xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;
const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/components/innerPages/Resources">
        Resources
      </NavLink>
      <NavLink href="/components/innerPages/BlogIndexPage">
        News and Updates
      </NavLink>
      <NavLink href="/components/innerPages/EventsAndIntiatives">
        Events and Intiatives
      </NavLink>
      <NavLink href="/components/innerPages/AboutUsPage">
        Join Us
      </NavLink>
      <NavLink href="/components/innerPages/ContactUsPage">
      Contact
    </NavLink>
    </NavLinks>,
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <TwoColumn>
          <LeftColumn>
           <Notification>"Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.”
​- Dennis Gates</Notification>
            <Heading>
              <span>The University of Toronto Mental Health Association</span>
              <br />
            </Heading>
          </LeftColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
