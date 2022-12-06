import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FooterMain";
import MainFeature1 from "components/coloumns/TwoColWithButton.js";
import TeamCardGridHead from "components/cards/ProfileThreeColGridHead.js";
import TeamCardGridBody from "components/cards/ProfileThreeColGridBody.js";
import Logo from "images/MHA-02.png";

import user1 from "images/headshots/1C7DA609-401C-446C-9D67-7C73E3B85B20 - Amania Abid.jpeg";

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading=""
        heading="About UoftMHA"
        descriptionOne="We have now chosen the 2021-2022 UofTMHA Executive & Committee Team! Congratulations to everyone who received a position, and thank you to everyone who took the time to apply!"
        descriptionTwo="​***However, we always welcome and appreciate new general members anytime of the year!"
        descriptionThree="​As a valued member of the UofTMHA, general members will be added to our mailing list, be able to provide the club with feedback, and help keep our leadership team in check. By joining our mailing list, you will receive a monthly newsletter from us that will keep you in the know about what's going on in our club! You will be the first to hear about opportunities to get involved with the UofTMHA, upcoming events and activities, and different mental health resources. Simply fill out this Google Form to become a general member (:"
        descriptionFour="​If you have any questions regarding the application process or timeline for the upcoming semester, questions about a role, or want to learn about opportunities to get involved with our club, feel free to DM us on our Instagram @uoftmha or email us at uoftmha@gmail.com. Thank you so much!"
        buttonRounded={false}
        primaryButtonText="Become General Member"
        imageSrc={Logo}
      />
      <TeamCardGridHead
      heading= "2022-2023"
      description="Executive Team"
      />
      <TeamCardGridBody/>
      <TeamCardGridBody/>
      <TeamCardGridBody/>
      <TeamCardGridBody/>
      <TeamCardGridBody/>
      <TeamCardGridBody/>
      <Footer />
    </AnimationRevealPage>
  );
};
