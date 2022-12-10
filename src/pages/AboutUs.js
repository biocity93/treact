import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FooterMain.js";
import MainFeature1 from "components/coloumns/TwoColWithButton.js";
import TeamCardGridHead from "components/cards/ProfileThreeColGridHead.js";
import Logo from "images/MHA-02.png";
import { ReactComponent as LinkedinIcon} from "images/linkedin-icon.svg";
import { ReactComponent as EmailIcon} from "images/icons8-mail.svg";
import VictoriaColaluca from "images/headshots/E909D56D-CA84-412A-AE30-2C70A28B8AB3 - UofT Mental Health Student Association.jpeg";
import AliahJanoudy from "images/headshots/Screen Shot 2022-10-25 at 11.42.12 PM - UofT Mental Health Student Association.png";
import JuliannaGajraj from "images/headshots/a - Julianna Gajraj(1).png";
import MatthewKuo from "images/headshots/20210707_141739 - Matthew Kuo.jpeg";
import JonathanManoon from "images/headshots/MHA Pic 2 - Jonathan Manoon.jpg";






const ContentWithPaddingSm= tw.div`max-w-screen-lg mx-auto py-8 lg:py-12`;
const mailto = "mailto:"

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
      cards ={ [
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
          imageSrc: VictoriaColaluca,
          position: "Co-President",
          name: "Victoria Colaluca (she/her)",
          links: [
            {
              url:mailto+ "Victoria.colaluca@mail.utoronto.ca",
              icon: EmailIcon,
            },
          ],
        },
        {
          imageSrc: AliahJanoudy,
          position: "Vice-President",
          name: "Aliah Janoudy (she/her)",
          links: [
            {
              url:mailto+ "a.janoudy@mail.utoronto.ca",
              icon: EmailIcon,
            },
          ],
        },
        {
          imageSrc: JuliannaGajraj,
          position: "Vice-President",
          name: "Julianna Gajraj (she/they)",
          links: [
            {
              url:mailto+ "julianna.gajraj@mail.utoronto.ca",
              icon: EmailIcon,
            },
            {
              url: "https://www.linkedin.com/in/julianna-gajraj/",
              icon: LinkedinIcon,
            },
          ],
        },
      ]
    }
      />
      <TeamCardGridHead
      cards ={ [
        {
          imageSrc:  MatthewKuo,
          position: "Vice-President",
          name: "Matthew Kuo (he/him)",
          links: [
            {
              url:mailto+"matthew.kuo@mail.utoronto.ca",
              icon: EmailIcon,
            },
            {
              url: "https://www.linkedin.com/in/matthew-kuo-30a892229/",
              icon: LinkedinIcon,
            },
          ],
        },
        {
          imageSrc: "https://i.pinimg.com/474x/20/0d/72/200d72a18492cf3d7adac8a914ef3520.jpg",
          position: "Secretary",
          name: "Hana Wernick (she/he/they)",
          links: [
            {
              url:mailto+ "hanaj.wernick@mail.utoronto.ca",
              icon: EmailIcon,
            },
          ],
        },
        {
          imageSrc: JonathanManoon,
          position: "Secretary",
          name: "Jonathan Manoon (he/him)",
          links: [
            {
              url:mailto+ "jonathan.manoon@mail.utoronto.ca",
              icon: EmailIcon,
            },
            {
              url: "https://www.linkedin.com/in/jonathan-manoon-481b02207/",
              icon: LinkedinIcon,
            },
          ],
        },
        {
          imageSrc: "https://i.pinimg.com/474x/20/0d/72/200d72a18492cf3d7adac8a914ef3520.jpg",
          position: "Secretary",
          name: "Narod Dishosip",
          links:[]
        },
      ]
    }
      />
 <TeamCardGridHead
      cards ={ [
        {
          imageSrc: "https://i.pinimg.com/474x/20/0d/72/200d72a18492cf3d7adac8a914ef3520.jpg",
          position: "Secretary",
          name: "Julia Do (she/her)",
          links: [],
        },
        {
          imageSrc:  "https://i.pinimg.com/474x/20/0d/72/200d72a18492cf3d7adac8a914ef3520.jpg",
          position: "Website Manager",
          name: "Habin Baek",
          links: [],
        },
        {
          imageSrc: "https://i.pinimg.com/474x/20/0d/72/200d72a18492cf3d7adac8a914ef3520.jpg",
          position: "Website Manager",
          name: "Neyla Fidan (she/her)",
          links: [
            {
              url:mailto+ "neyla.fidan@mail.utoronto.ca",
              icon: EmailIcon,
            },
          ],
        },
        {
          imageSrc: "https://media-exp1.licdn.com/dms/image/C5603AQGKy1WqczOA6g/profile-displayphoto-shrink_200_200/0/1657027744531?e=1675900800&v=beta&t=uRqlQenz5CkqKZ0_04jthcM68g6YbpUp_WfbwPjIfUk",
          position: "Website Manager",
          name: "Jesse Raso (he/him)",
          links: [
            {
              url:mailto+ "jesse.raso@mail.utoronto.ca",
              icon: EmailIcon,
            },
            {
              url: "https://www.linkedin.com/in/jessecraso/",
              icon: LinkedinIcon,
            },
          ],
        },
      ]
    }
      />
       {/* <TeamCardGridHead
      cards ={ [
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
          imageSrc: VictoriaColaluca,
          position: "Co-President",
          name: "Victoria Colaluca (she/her)",
          links: [
            {
              url:mailto+ "Victoria.colaluca@mail.utoronto.ca",
              icon: EmailIcon,
            },
          ],
        },
        {
          imageSrc: AliahJanoudy,
          position: "Vice-President",
          name: "Aliah Janoudy (she/her)",
          links: [
            {
              url:mailto+ "a.janoudy@mail.utoronto.ca",
              icon: EmailIcon,
            },
          ],
        },
        {
          imageSrc: JuliannaGajraj,
          position: "Vice-President",
          name: "Julianna Gajraj (she/they)",
          links: [
            {
              url:mailto+ "julianna.gajraj@mail.utoronto.ca",
              icon: EmailIcon,
            },
            {
              url: "https://www.linkedin.com/in/julianna-gajraj/",
              icon: LinkedinIcon,
            },
          ],
        },
      ]
    }
      />
       <TeamCardGridHead
      cards ={ [
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
          imageSrc: VictoriaColaluca,
          position: "Co-President",
          name: "Victoria Colaluca (she/her)",
          links: [
            {
              url:mailto+ "Victoria.colaluca@mail.utoronto.ca",
              icon: EmailIcon,
            },
          ],
        },
        {
          imageSrc: AliahJanoudy,
          position: "Vice-President",
          name: "Aliah Janoudy (she/her)",
          links: [
            {
              url:mailto+ "a.janoudy@mail.utoronto.ca",
              icon: EmailIcon,
            },
          ],
        },
        {
          imageSrc: JuliannaGajraj,
          position: "Vice-President",
          name: "Julianna Gajraj (she/they)",
          links: [
            {
              url:mailto+ "julianna.gajraj@mail.utoronto.ca",
              icon: EmailIcon,
            },
            {
              url: "https://www.linkedin.com/in/julianna-gajraj/",
              icon: LinkedinIcon,
            },
          ],
        },
      ]
    }
      />
       <TeamCardGridHead
      cards ={ [
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
          imageSrc: VictoriaColaluca,
          position: "Co-President",
          name: "Victoria Colaluca (she/her)",
          links: [
            {
              url:mailto+ "Victoria.colaluca@mail.utoronto.ca",
              icon: EmailIcon,
            },
          ],
        },
        {
          imageSrc: AliahJanoudy,
          position: "Vice-President",
          name: "Aliah Janoudy (she/her)",
          links: [
            {
              url:mailto+ "a.janoudy@mail.utoronto.ca",
              icon: EmailIcon,
            },
          ],
        },
        {
          imageSrc: JuliannaGajraj,
          position: "Vice-President",
          name: "Julianna Gajraj (she/they)",
          links: [
            {
              url:mailto+ "julianna.gajraj@mail.utoronto.ca",
              icon: EmailIcon,
            },
            {
              url: "https://www.linkedin.com/in/julianna-gajraj/",
              icon: LinkedinIcon,
            },
          ],
        },
      ]
    }
      />
       <TeamCardGridHead
      cards ={ [
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
          imageSrc: VictoriaColaluca,
          position: "Co-President",
          name: "Victoria Colaluca (she/her)",
          links: [
            {
              url:mailto+ "Victoria.colaluca@mail.utoronto.ca",
              icon: EmailIcon,
            },
          ],
        },
        {
          imageSrc: AliahJanoudy,
          position: "Vice-President",
          name: "Aliah Janoudy (she/her)",
          links: [
            {
              url:mailto+ "a.janoudy@mail.utoronto.ca",
              icon: EmailIcon,
            },
          ],
        },
        {
          imageSrc: JuliannaGajraj,
          position: "Vice-President",
          name: "Julianna Gajraj (she/they)",
          links: [
            {
              url:mailto+ "julianna.gajraj@mail.utoronto.ca",
              icon: EmailIcon,
            },
            {
              url: "https://www.linkedin.com/in/julianna-gajraj/",
              icon: LinkedinIcon,
            },
          ],
        },
      ]
    }
      />
             <TeamCardGridHead
      cards ={ [
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
          imageSrc: VictoriaColaluca,
          position: "Co-President",
          name: "Victoria Colaluca (she/her)",
          links: [
            {
              url:mailto+ "Victoria.colaluca@mail.utoronto.ca",
              icon: EmailIcon,
            },
          ],
        },
        {
          imageSrc: AliahJanoudy,
          position: "Vice-President",
          name: "Aliah Janoudy (she/her)",
          links: [
            {
              url:mailto+ "a.janoudy@mail.utoronto.ca",
              icon: EmailIcon,
            },
          ],
        },
        {
          imageSrc: JuliannaGajraj,
          position: "Vice-President",
          name: "Julianna Gajraj (she/they)",
          links: [
            {
              url:mailto+ "julianna.gajraj@mail.utoronto.ca",
              icon: EmailIcon,
            },
            {
              url: "https://www.linkedin.com/in/julianna-gajraj/",
              icon: LinkedinIcon,
            },
          ],
        },
      ]
    }
      />
             <TeamCardGridHead
      cards ={ [
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
          imageSrc: VictoriaColaluca,
          position: "Co-President",
          name: "Victoria Colaluca (she/her)",
          links: [
            {
              url:mailto+ "Victoria.colaluca@mail.utoronto.ca",
              icon: EmailIcon,
            },
          ],
        },
        {
          imageSrc: AliahJanoudy,
          position: "Vice-President",
          name: "Aliah Janoudy (she/her)",
          links: [
            {
              url:mailto+ "a.janoudy@mail.utoronto.ca",
              icon: EmailIcon,
            },
          ],
        },
        {
          imageSrc: JuliannaGajraj,
          position: "Vice-President",
          name: "Julianna Gajraj (she/they)",
          links: [
            {
              url:mailto+ "julianna.gajraj@mail.utoronto.ca",
              icon: EmailIcon,
            },
            {
              url: "https://www.linkedin.com/in/julianna-gajraj/",
              icon: LinkedinIcon,
            },
          ],
        },
      ]
    }
      />
             <TeamCardGridHead
      cards ={ [
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
          imageSrc: VictoriaColaluca,
          position: "Co-President",
          name: "Victoria Colaluca (she/her)",
          links: [
            {
              url:mailto+ "Victoria.colaluca@mail.utoronto.ca",
              icon: EmailIcon,
            },
          ],
        },
        {
          imageSrc: AliahJanoudy,
          position: "Vice-President",
          name: "Aliah Janoudy (she/her)",
          links: [
            {
              url:mailto+ "a.janoudy@mail.utoronto.ca",
              icon: EmailIcon,
            },
          ],
        },
        {
          imageSrc: JuliannaGajraj,
          position: "Vice-President",
          name: "Julianna Gajraj (she/they)",
          links: [
            {
              url:mailto+ "julianna.gajraj@mail.utoronto.ca",
              icon: EmailIcon,
            },
            {
              url: "https://www.linkedin.com/in/julianna-gajraj/",
              icon: LinkedinIcon,
            },
          ],
        },
      ]
    }
      />
             <TeamCardGridHead
      cards ={ [
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
          imageSrc: VictoriaColaluca,
          position: "Co-President",
          name: "Victoria Colaluca (she/her)",
          links: [
            {
              url:mailto+ "Victoria.colaluca@mail.utoronto.ca",
              icon: EmailIcon,
            },
          ],
        },
        {
          imageSrc: AliahJanoudy,
          position: "Vice-President",
          name: "Aliah Janoudy (she/her)",
          links: [
            {
              url:mailto+ "a.janoudy@mail.utoronto.ca",
              icon: EmailIcon,
            },
          ],
        },
        {
          imageSrc: JuliannaGajraj,
          position: "Vice-President",
          name: "Julianna Gajraj (she/they)",
          links: [
            {
              url:mailto+ "julianna.gajraj@mail.utoronto.ca",
              icon: EmailIcon,
            },
            {
              url: "https://www.linkedin.com/in/julianna-gajraj/",
              icon: LinkedinIcon,
            },
          ],
        },
      ]
    }
      /> */}
      <ContentWithPaddingSm/>
      <Footer />
    </AnimationRevealPage>
  );
};
