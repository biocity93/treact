import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container} from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import {SectionDescription} from "components/misc/Typography";
import { ReactComponent as LinkedinIcon} from "images/linkedin-icon.svg";
import { ReactComponent as EmailIcon} from "images/icons8-mail.svg";


const HeadingContainer = tw.div``
const Heading = tw(SectionHeading)``
const Subheading = tw(SubheadingBase)`text-center mb-3`
const Description = tw(SectionDescription)`mx-auto text-center`

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-3xl lg:max-w-6xl mx-auto`
const Card = tw.div`mt-12 w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center`
const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`bg-cover h-56 w-56 bg-center rounded-full`}
`
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-blue-700`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-700`}
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
      imageSrc: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
      position: "Position",
      name: "Name",
      links: [
        {
          url: "",
          icon: EmailIcon,
        },
        {
          url: "",
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
          url: "",
          icon: EmailIcon,
        },
        {
          url: "",
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
          url: "",
          icon: EmailIcon,
        },
        {
          url: "",
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
          url: "",
          icon: EmailIcon,
        },
        {
          url: "",
          icon: LinkedinIcon,
        },
      ],
    },
  ]
}) => {
  return (
    <Container>
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
    </Container>
  );
};
