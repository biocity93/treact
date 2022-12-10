import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import {SectionDescription} from "components/misc/Typography";
import { ReactComponent as LinkedinIcon} from "images/linkedin-icon.svg";
import { ReactComponent as EmailIcon} from "images/icons8-mail.svg";

import user1 from "images/headshots/IMG - UofT Mental Health Student Association.HEIC";


const HeadingContainer = tw.div``
const Heading = tw(SectionHeading)``
const Subheading = tw(SubheadingBase)`text-center mb-3`
const Description = tw(SectionDescription)`mx-auto text-center`
const mailto = "mailto:"

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`
const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`bg-contain h-56 w-56 bg-center rounded-full`}
`
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-blue-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`

export default ({
  subheading = "" ,
  heading = "",
  description = "",
  cards = [
    {
      imageSrc:  "https://media-exp1.licdn.com/dms/image/C4D03AQFwAz-Dml9AQA/profile-displayphoto-shrink_200_200/0/1615482358118?e=1675900800&v=beta&t=GDn-wKLKviq-0rNJzkn84uddXKgnXjBPh1rxYJLseEM",
      position: "Co-President",
      name: "Rohina Kumar (she/her)",
      links: [
        {
          url:mailto+"rohina.kumar@mail.utoronto.ca",
          icon: EmailIcon,
        },
        {
          url: " https://www.linkedin.com/in/rohina-kumar-she-her-a377a4141",
          icon: LinkedinIcon,
        },
      ],
    },
    {
      imageSrc: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
      position: "Position",
      name: "Name",
      links: [
        {
          url: "https://twitter.com",
          icon: EmailIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
      ],
    },
    {
      imageSrc: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
      position: "Position",
      name: "Name",
      links: [
        {
          url: "https://twitter.com",
          icon: EmailIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
      ],
    },
  ]
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading> }
          {description && <Description>{description}</Description> }
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                <CardLinks>
                  {card.links.map((link, linkIndex) => (
                    <a key={linkIndex} className="link" href={link.url}>
                      <link.icon className="icon" />
                    </a>
                  ))}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
