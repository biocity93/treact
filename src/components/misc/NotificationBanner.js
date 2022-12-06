import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ContentWithPaddingXl, Container } from "components/misc/Layouts";

const PrimaryBackgroundContainer = tw.div`py-12 lg:py-16 bg-yellow-200 rounded-lg relative`
const Row = tw.div`sm:px-16 mx-auto flex justify-center items-center relative z-10 flex-col lg:flex-row text-center lg:text-left`;

const ColumnContainer = tw.div`lg:w-1/2 max-w-lg`
const TextContainer = tw(ColumnContainer)`text-xl sm:text-xl font-bold`;
const Subheading = tw.h6`text-gray-700`;
const Heading = tw.h5`text-sm text-gray-700`;

const LinksContainer = tw(ColumnContainer)`flex justify-center lg:justify-end mt-6 lg:mt-0 flex-col sm:flex-row`;
const Link = tw.a`w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 mt-4 first:mt-0 sm:mt-0 sm:mr-8 sm:last:mr-0 rounded font-bold border border-transparent tracking-wide transition duration-300 focus:outline-none focus:shadow-outline`;
const PrimaryLink = tw(Link)`shadow text-gray-100 hocus:text-gray-300 bg-green-600 hocus:bg-green-900`;

export default ({
  subheading = "If you're in immediate danger, please call 911",
  heading = "",
  primaryLinkText = "For more resources",
  primaryLinkUrl = "https://linktr.ee/uoftmha",
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
      <PrimaryBackgroundContainer>
        <Row>
          <TextContainer>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
          </TextContainer>
          <LinksContainer>
            <PrimaryLink href={primaryLinkUrl}>{primaryLinkText}</PrimaryLink>
          </LinksContainer>
        </Row>
      </PrimaryBackgroundContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};