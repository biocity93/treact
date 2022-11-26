import React from 'react';
import { useParams } from 'react-router-dom';
import AnimationRevealPage from "helpers/AnimationRevealPage.js"
import AboutUsPage from "pages/AboutUs.js";
import ContactUsPage from "pages/ContactUs.js";
import BlogIndexPage from "pages/BlogIndex.js";
import EventsAndIntiatives from "pages/EventsAndIntiatives.js";
import Resources from "pages/Resources.js";
import BackgroundAsImageHero from "components/hero/BackgroundAsImage.js";
import TwoColWithButtonFeatures from "components/coloumns/TwoColWithButton.js";
import ThreeColSimpleFeatures from "components/coloumns/Sponsors.js";
import SliderCards from "components/cards/ThreeColSlider.js";
import ProfileThreeColGridCards from "components/cards/ProfileThreeColGridHead.js"
import ThreeColContactDetailsCards from "components/cards/ThreeColContactDetails.js"
import PopularAndRecentPostsBlog from "components/blog/PopularAndRecentBlogPosts.js";

import SimpleContactUsForm from "components/forms/SimpleContactUs.js";
import MainFooter from "components/footers/FooterMain.js";

//May have to change this in future
export const components = {
  innerPages: {
    AboutUsPage: {
      component: AboutUsPage,
      url: `/components/innerPages/AboutUsPage`,
    },
    ContactUsPage: {
      component: ContactUsPage,
      url: `/components/innerPages/ContactUsPage`,
    },
    BlogIndexPage: {
      component: BlogIndexPage,
      url: `/components/innerPages/BlogIndexPage`,
    },
    EventsAndIntiatives: {
      component: EventsAndIntiatives,
      url: "/components/innerPages/EventsAndIntiatives",
    },
    Resources: {
      component: Resources,
      url: "/components/innerPages/Resources",
    },
  },
  blocks: {
    Hero: {
      type: "Hero Section",
      elements: {
        BackgroundAsImage: {
          name: "With Background Image",
          component: BackgroundAsImageHero,
          url: "/components/blocks/Hero/BackgroundAsImage",
        },
      }
    },
    Features: {
      type: "Features Section",
      elements: {
         TwoColWithButton: {
          name: "Two Column With Image and Action Button",
          component: TwoColWithButtonFeatures,
          url: "/components/blocks/Features/TwoColWithButton",
        },
        ThreeColSimple: {
          name: "Three Column Simple",
          component: ThreeColSimpleFeatures,
          url: "/components/blocks/Features/ThreeColSimple",
        },
      }
    },
    Cards: {
      type: "Cards",
      elements: {
        Slider: {
          name: "Three Column Slider",
          component: SliderCards,
          url: "/components/blocks/Cards/Slider",
        },
        ProfileThreeColGrid: {
          name: "Three Column Grid Cards For Profile",
          component: ProfileThreeColGridCards,
          url: "/components/blocks/Cards/ProfileThreeColGrid",
        },
        ThreeColContactDetails: {
          name: "Three Column Contact Details Cards",
          component: ThreeColContactDetailsCards,
          url: "/components/blocks/Cards/ThreeColContactDetails",
        },
      }
    },
    Blog: {
      type: "Blog Section",
      elements: {
        PopularAndRecentPosts: {
          name: "Popular And Recent Posts",
          component: PopularAndRecentPostsBlog,
          url: "/components/blocks/Blog/PopularAndRecentPosts",
        },
      } 
    },

    Form: {
      type: "Forms Section",
      elements: {
        SimpleContactUs: {
          name: "Simple Contact Us",
          component: SimpleContactUsForm,
          url: "/components/blocks/Form/SimpleContactUs",
        },
        TwoColContactUsFull: {
          name: "Two Column Contact Us - Full Form",
          url: "/components/blocks/Form/TwoColContactUsFull",
        },
      }
    },
    Footer: {
      type: "Footers Section",
      elements: {
        MainFooter: {
          name: "Five Column Dark",
          component: MainFooter,
          url: "/components/blocks/Footer/FooterMain",
        },
      }
    }
  }
}
export default () => {
  const { type, subtype, name } = useParams()
  try {
    let Component = null;
    if(type === "blocks" && subtype) {
      Component= components[type][subtype]["elements"][name].component
      return <AnimationRevealPage disabled>
          <Component/>
        </AnimationRevealPage>
    }
    else
      Component= components[type][name].component
    if(Component)
      return <Component/>
    throw new Error("Component Not Found")
  }
  catch (e) {
    console.log(e)
    return <div>Error: Component Not Found</div>
  }
}