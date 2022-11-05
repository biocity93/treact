import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { ReactComponent as TwitterIcon} from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon} from "images/linkedin-icon.svg";

const Container = tw.div`relative bg-primary-800 text-gray-100 -mx-8 -mb-8 px-8`;
const Content = tw.div`max-w-screen-xl mx-auto pt-16 pb-8`
const FiveColumns = tw.div`flex flex-wrap justify-between`;

const Column = tw.div`w-1/2 md:w-1/5 mb-8 md:mb-0 text-sm sm:text-base text-center md:text-left`;
const CompanyColumn = tw.div`text-center md:text-left mb-16 lg:mb-0 w-full lg:w-1/5`;

const ColumnHeading = tw.h5`font-bold uppercase`;

const LinkList = tw.ul`mt-4 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300`;

const LogoContainer = tw.div`flex items-center justify-center lg:justify-start`;
const LogoText = tw.h5`ml-2 text-xl font-black`;

const CompanyAddress = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto lg:mx-0 lg:mr-4 leading-loose text-center lg:text-left`;

const SocialLinksContainer = tw.div`mt-4 text-center lg:text-left`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-100 text-primary-600 hover:bg-gray-500 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

const CopyrightAndCompanyInfoRow = tw.div`pb-0 text-sm font-normal flex flex-col sm:flex-row justify-between items-center`
const CopyrightNotice = tw.div``
const CompanyInfo = tw.div``

const Divider = tw.div`my-8 border-b border-white`
export default () => {
  return (
    <Container>
      <Content>
        <FiveColumns>
        <CompanyColumn>
            <LogoContainer>
              {/* <LogoImg src={LogoImage} /> */}
              <LogoText>UOFTMHA</LogoText>
            </LogoContainer>
            <CompanyAddress>
            Room 500L, 40 Willcocks Street, Toronto, ON M5S1C6
            </CompanyAddress>
            <SocialLinksContainer>
              <SocialLink href="https://www.facebook.com/groups/923127621744217">
              </SocialLink>
              <SocialLink href="https://twitter.com/uoftmha">
              <TwitterIcon />
              </SocialLink>
              <SocialLink href="https://www.instagram.com/uoftmha">
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/company/university-of-toronto-mental-health-assoociation/">
              <LinkedinIcon />
              </SocialLink>
            </SocialLinksContainer>
          </CompanyColumn>
          <Column>
            <ColumnHeading>Site Navigation</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">Resources</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Events & initiatives</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Team</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Blog</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Join Us</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Sponsorship & Donation Inquiries</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="uoftmhasponsorship@gmail.com"> uoftmhasponsorship@gmail.com</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Collaboration & Event Inquiries</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="mailto:uoftmha.events@gmail.com"> uoftmha.events@gmail.com</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Main Contact</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="mailto:uoftmha@gmail.com">uoftmha@gmail.com</Link>
              </LinkListItem>
            </LinkList>
          </Column>
        </FiveColumns>
        <Divider/>
        <CopyrightAndCompanyInfoRow>
          <CopyrightNotice>&copy; Copyright 2022, University of Toronto Mental Health Association.</CopyrightNotice>
          <CompanyInfo>Student-run (St. George & Scarborough)</CompanyInfo>
        </CopyrightAndCompanyInfoRow>
      </Content>
    </Container>
  );
};
