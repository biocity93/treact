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
const Link = tw.a`mt-6 text-blue-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-blue-500`;
const Phone = tw.a`mt-8 text-red-800/100 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-red-600`;


const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`
const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-64 h-32 bg-center [background-size: cover] rounded`}
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
    ${tw`mt-4 sm:mt-2`}
  }
  .name {
    ${tw`mt-2 tracking-wide font-bold text-2xl leading-none`}
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
  .description4 {
      ${tw`mt-1 sm:mt-2 font-medium text-secondary-100 leading-loose`}
  }
  .description5 {
        ${tw`mt-1 sm:mt-2 font-medium text-secondary-100 leading-loose`}
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
      description:<p><span>&#8226; </span>  Free and available 24/7 </p>,
      description2:  <p><span>&#8226; </span>  Canadians text "686868" </p>,
      description3:  <p><span>&#8226; </span>  Text HOME to 741741 to connect with a Crisis Counselor </p>,
      url: "www.crisistextline.org/"

    },
    {
      imageSrc: "https://gersteincentre.org/wordpress/wp-content/themes/gersteincentre/img/logo/Gerstein-centre-logo.jpg",
      position: "Position",
      name: "The Gerstein Centre",
      description:  <p><span>&#8226; </span>  Non-medical mental health crisis support </p>,
      phone: "416-929-5200",
      url:"gersteincentre.org",
    },
    {
      imageSrc: "https://www.ffwd.org/wp-content/uploads/Kids-Help-Phone-logo.png",
      position: "Position",
      name: "Kids Help Phone",
      description:  <p><span>&#8226; </span>  Text,  phone, chat and other forms of support for young people 24/7 and in English and French</p>,
      phone: "1-800-668-6868",
      url: "kidshelpphone.ca",
    },
    {
      imageSrc: "https://www.chfi.com/wp-content/uploads/sites/2/2020/05/AWHL_clr-1-e1589411873290-1024x576.jpg",
      position: "Position",
      name: "Assaulted Women's Helpline",
      description: <p><span>&#8226; </span>  #SAFE (#7233) on your Bell, Rogers, Fido or Telus Mobile </p>,
      phone: "1-866-863-0511",
      url: "awhl.org",
    },
    {
      imageSrc: "https://www.thatericalper.com/wp-content/uploads/2018/12/CAMH-Logo-for-SMALL-Open-Graph.jpg",
      position: "Position",
      name: "GTA Crisis Resources",
      description: <p><span>&#8226; </span>  Mental Health Crisis Line (Canada Wide) </p>,
      phone: "1-888-893-8333",
      url: "www.camh.ca/en/health-info/crisis-resources",
    },
    {
      imageSrc: "https://mindyourmind.ca/images/logo.png",
      position: "Position",
      name: "Mind Your Mind",
      description: <p><span>&#8226; </span>  List of places to call in Canada and US </p>,
      description2:  <p><span>&#8226; </span>  List of resources and social media resources </p>,
      url: "mindyourmind.ca/help/where-call",
    },
    {
      imageSrc: "https://static1.squarespace.com/static/5a03516264b05fad2cec401c/t/60e36d59704c791a20ec752d/1668186030396/",
      position: "Position",
      name: "Toronto Distress Centre",
      description: <p><span>&#8226; </span> Emotional support services for those with chronic mental health problems </p>,
      description2:  <p><span>&#8226; </span>  Support & crisis intervention services for those currently experiencing distress or in crisis </p>,
      description3:  <p><span>&#8226; </span>  Family violence responses </p>,
      description4:  <p><span>&#8226; </span>  Suicide prevention services </p>,
      description5:  <p><span>&#8226; </span>  Emergency intervention and response </p>,
      phone: "416-408-4357",
      url: "torontodistresscentre.com/408-help-line",

    },
    {
      imageSrc: "https://images.squarespace-cdn.com/content/v1/5f738ba8104fc0629adf2e86/1601502353270-ZGUT1TKOJ7DH8VC0BFII/NACAFV_logo_English.png",
      position: "Position",
      name: "National Aboriginal Circle Against Family Violence",
      description: <p><span>&#8226; </span> List of shelters across Canada </p>,
      phone: "1-866-299-1011",
      url: "54.186.211.6/shelters/",

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
                <p className="description">
                  {card.description}
                </p>
                 <p className="description2">
                  {card.description2}
                </p>
                <p className="description3">
                  {card.description3}
                </p>
                <p className="description4">
                  {card.description4}
                </p>
                <p className="description5">
                  {card.description5}
                </p>
                <p><Phone href={"tel:+"+card.phone}>{card.phone || ""}</Phone>
                </p>
              <Link href={"http://"+card.url}>{card.url || ""}</Link>
              </span>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
