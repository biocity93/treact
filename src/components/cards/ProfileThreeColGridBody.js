import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingSm } from "components/misc/Layouts.js";
import { ReactComponent as InstagramIcon} from "images/instagram-icon.svg";
import { ReactComponent as LinkedinIcon} from "images/linkedin-icon.svg";
import user1 from "images/headshots/1C7DA609-401C-446C-9D67-7C73E3B85B20 - Amania Abid.jpeg";

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`
const Card = tw.div`w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`
const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-64 h-64 bg-contain bg-center rounded`}
`
const CardContent = styled.div`
  ${tw`flex flex-col items-center`}
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
  cards = [
    {
      imageSrc: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
      position: "Position",
      name: "Name",
      links: [
        {
          url: "",
          icon: InstagramIcon,
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
          url: "https://twitter.com",
          icon: InstagramIcon,
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
          icon: InstagramIcon,
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
      <ContentWithPaddingSm></ContentWithPaddingSm>
    </Container>
  );
};
