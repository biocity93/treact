import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { Container, ContentWithPaddingLg } from "components/misc/Layouts.js";
import DoGoodPaper from "images/sponsors/Do Good Paper Co logo_square (1).png";

const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const ThreeColumnContainer = styled.div`
  ${tw`mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto`}
`;
const Column = styled.div`
  ${tw`lg:w-1/3 max-w-xs`}
`;

const Card = styled.a`
  ${tw`flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300`}
  .title {
    ${tw`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`}
  }
  }
`;
export default ({
  cards = [
    {
      title: "Sponsors",
      imageSrc: DoGoodPaper,
    },
  ],
  heading = "",
  subheading = "",
  imageContainerCss = null,
  imageCss = null
}) => {
  /*
   * This componets accepts a prop - `cards` which is an array of object denoting the cards. Each object in the cards array can have the following keys (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   */
  return (
    <Container>
      <ContentWithPaddingLg>
        {subheading && <Subheading>{subheading}</Subheading>}
        {heading && <Heading>{heading}</Heading>}
        <ThreeColumnContainer>
          {cards.map((card, i) => (
            <Column key={i}>
              <Card href={card.url}>
              <span className="title">{card.title}</span>
                <span className="imageContainer" css={imageContainerCss}>
                  <img src={card.imageSrc} alt="" css={imageCss} />
                </span>
              </Card>
            </Column>
          ))}
        </ThreeColumnContainer>
      </ContentWithPaddingLg>
    </Container>
  );
};
