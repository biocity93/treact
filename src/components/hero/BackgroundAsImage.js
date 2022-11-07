import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";

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

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-75`;
const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-20 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full  sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-5xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;
const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#">
        Resources
      </NavLink>
      <NavLink href="#">
        Blog
      </NavLink>
      <NavLink href="#">
        Events and Intiatives
      </NavLink>
      <NavLink href="#">
        Join Us
      </NavLink>
      <NavLink href="/#">Team</NavLink>
      <NavLink href="#">
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
           <Notification>Here we can add quick news or updates.</Notification>
            <Heading>
              <span>The University of Toronto Mental Health Association</span>
              <br />
            </Heading>
            <center>
            <PrimaryAction>More Information</PrimaryAction></center>
          </LeftColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
