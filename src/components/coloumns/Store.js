import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { Container, ContentWithPaddingLg } from "components/misc/Layouts.js";

const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3 text-gray-700`;
const ThreeColumnContainer = styled.div`
  ${tw`mt-2 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto`}
`;
const Column = styled.div`
  ${tw`lg:w-1/3 max-w-xs`}
`;

const Card = styled.a`
  ${tw`flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300`}
  .title {
    ${tw`mt-2 tracking-wide font-bold text-2xl leading-none`}
  }
  .description {
    ${tw`mt-2 tracking-wide font-bold text-center leading-none`}
  }
  }
`;
export default ({
  cards = [
    {
      title: "Hoddie",
      imageSrc: "https://i.pinimg.com/originals/f6/f8/d2/f6f8d2c25ec44ee2d3b0008c7b3d5af0.jpg",
      description: "$25",
    },
    {
      title: "T-shirt",
      imageSrc: "https://media.gq.com/photos/5ca7ad6d1656fe4e4c2710d7/master/w_1280%2Cc_limit/GQ-Best-Stuff-T's-lemongrass-3x2.jpg",
      description: "$25",
    },
  ],
  heading = "",
  subheading = "to purchase, inquiry uoftmha@gmail.com",
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
        {heading && <Heading>{heading}</Heading>}
        {subheading && <Subheading>{subheading}</Subheading>}
        <ThreeColumnContainer>
          {cards.map((card, i) => (
            <Column key={i}>
              <Card>
              <span className="title">{card.title}</span>
                <span className="imageContainer" css={imageContainerCss}>
                  <img src={card.imageSrc} alt="" css={imageCss} />
                </span>
                <span className="description">{card.description}</span>
              </Card>
            </Column>
          ))}
        </ThreeColumnContainer>
      </ContentWithPaddingLg>
    </Container>
  );
};
