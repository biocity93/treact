import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import {SectionDescription} from "components/misc/Typography";


const HeadingContainer = tw.div``
const Heading = tw(SectionHeading)``
const Subheading = tw(SubheadingBase)`text-center mb-3`
const Description = tw(SectionDescription)`mx-auto text-center`
const Link = tw.a`w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 mt-4 first:mt-0 sm:mt-0 sm:mr-8 sm:last:mr-0 rounded font-bold border border-transparent tracking-wide transition duration-300 focus:outline-none focus:shadow-outline`;
const PrimaryLink = tw(Link)`shadow text-gray-100 hocus:text-gray-300 bg-gray-700 hocus:bg-gray-400`;


const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`
const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-64 h-20 bg-center rounded`}
`
const CardContent = styled.div`{
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }
  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }
  .name {
    ${tw`mt-2 text-center ml-6 tracking-wide font-bold text-2xl leading-none`}
  }
  .description {
    ${tw`mt-1 sm:mt-2 font-medium text-secondary-100 leading-loose`}
  }
  .description2 {
    ${tw`mt-1 sm:mt-2 font-medium text-secondary-100 leading-loose`}
  }
  .description3 {
    ${tw`mt-1 sm:mt-2 font-medium text-secondary-100 leading-loose`}
  }
  link{w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 mt-4 first:mt-0 sm:mt-0 sm:mr-8 sm:last:mr-0 rounded font-bold border border-transparent tracking-wide transition duration-300 focus:outline-none focus:shadow-outline

  }
  link_text{shadow text-gray-100 hocus:text-gray-300 bg-gray-700 hocus:bg-gray-400

  }
`


export default ({
  subheading = "" ,
  heading = "Community Resources",
  description = "",
  cards = [
    {
      imageSrc: "https://www.co.benton.or.us/sites/default/files/styles/full_node_primary/public/imageattachments/boc/page/5851/crisis_text_line_logo.jpg?itok=Sxr_wqpz9",
      position: "Position",
      name: "Crisis Text Line",
      description: "Free and available 24/7",
      description2:  "Canadians text 686868",
      description3:  "Text HOME to 741741 to connect with a Crisis Counselor",

    },
    {
      imageSrc: "https://gersteincentre.org/wordpress/wp-content/themes/gersteincentre/img/logo/Gerstein-centre-logo.jpg",
      position: "Position",
      name: "The Gerstein Centre",
      description: "Non-medical mental health crisis support",
      description2: "Phone: 416-929-5200",
      description3:  "gersteincentre.org",

    },
    {
      imageSrc: "https://media2.zuza.com/7/f/7f30f42b-7225-4665-b8df-e9bc7daf99b1/logo.png",
      position: "Position",
      name: "Assaulted Women's Helpline",
      description: "Phone: 1-866-863-0511",
      description2:  "TTY: 1-866-863-7868",
      description3:  "#SAFE (#7233) on your Bell, Rogers, Fido or Telus Mobile",
      description3:  "www.awhl.org",
    },
    {
      imageSrc: "",
      position: "Position",
      name: "Crisis Text Line",
      description: "Free and available 24/7",
      description2:  "Canadians text 686868",
      description3:  "Text HOME to 741741 to connect with a Crisis Counselor",
    },
    {
      imageSrc: "",
      position: "Position",
      name: "Crisis Text Line",
      description: "Free and available 24/7",
      description2:  "Canadians text 686868",
      description3:  "Text HOME to 741741 to connect with a Crisis Counselor",
    },
    {
      imageSrc: "",
      position: "Position",
      name: "Crisis Text Line",
      description: "Free and available 24/7",
      description2:  "Canadians text 686868",
      description3:  "Text HOME to 741741 to connect with a Crisis Counselor",
    },
    {
      imageSrc: "",
      position: "Position",
      name: "Crisis Text Line",
      description: "Free and available 24/7",
      description2:  "Canadians text 686868",
      description3:  "Text HOME to 741741 to connect with a Crisis Counselor",
    },
    {
      imageSrc: "",
      position: "Position",
      name: "Crisis Text Line",
      description: "Free and available 24/7",
      description2:  "Canadians text 686868",
      description3:  "Text HOME to 741741 to connect with a Crisis Counselor",

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
              <span className="textContainer">
                <span className="name">{card.name}</span>
                <p className="description"> <span>&#8226; </span>
                  {card.description}
                </p>
                <p className="description2"> <span>&#8226;   </span>
                  {card.description2}
                </p>
              <p className="description3"> <span>&#8226;   </span>
                  {card.description3}
                </p>
              </span>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
