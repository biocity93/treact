import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as TwitterIcon} from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon} from "images/linkedin-icon.svg";

const Container = tw.div`relative bg-primary-800 text-gray-100 -mx-8 -mb-8 px-8`;
const Content = tw.div`max-w-screen-xl mx-auto pt-16 pb-8 text-center `
const FiveColumns = tw.div`flex flex-wrap justify-between`;
const Column = tw.div`w-1/2 md:w-1/5 mb-8 md:mb-0 text-sm sm:text-base text-center md:text-left`;
const CompanyColumn = tw.div`text-center md:text-left mb-16 lg:mb-0 w-full lg:w-1/5`;
const TextContent = tw.div`lg:py-8 text-center md:text-left`;
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
              <LogoText>University of Toronto Mental Health Association</LogoText>
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
        <Content>
          <ColumnHeading>Statement of Land Acknowledgement</ColumnHeading>
          <TextContent>
          The University of Toronto Mental Health Student Association would like to acknowledge this sacred land on which the University of Toronto operates. For thousands of years, it has been the traditional land of the Huron-Wendat, the Seneca, and the Mississaugas of the Credit. Today, this meeting place is still the home to many Indigenous people, including First Nations, Inuit and Métis peoples, from across Turtle Island and we are grateful to have the opportunity to work on this land. The territory consists of ceded land, covered under the Toronto Treaty 13 of the Upper Canada Land Surrenders, and the Williams Treaties, as well as unceded land that continues to be contested. To learn more about why we acknowledge the land, please visit: <a href="url">https://indigenous.utoronto.ca/about/land-acknowledgement/</a>. 

          </TextContent>
We can never work to end systemic and institutional violence if we do not centre the narratives of Aboriginal peoples in our collective decision-making for social justice and equity. As settlers on this territory, we directly benefit from a colonial culture that has overseen the genocide, systematic oppression, and exploitation of Aboriginal peoples. In order to engage in resistance and solidarity against the injustices inflicted on the Aboriginal people of this land, it is imperative we constantly engage in acts of awareness and decolonization. We would also like to pay our respects to Aboriginal leaders and traditional teachers both past and present, and to any of those who may be here with us today: physically, emotionally, and spiritually.
        </Content>
        <Divider/>
        <CopyrightAndCompanyInfoRow>
          <CopyrightNotice>&copy; Copyright 2022, University of Toronto Mental Health Association.</CopyrightNotice>
          <CompanyInfo>Student-run (St. George & Scarborough)</CompanyInfo>
        </CopyrightAndCompanyInfoRow>
      </Content>
    </Container>
  );
};
