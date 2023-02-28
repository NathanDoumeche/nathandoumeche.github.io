import {
  SiGithub,
  SiGitlab,
  SiGooglescholar,
  SiLinkedin,
  SiResearchgate,
} from "react-icons/si";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import Photo from "./assets/nathou.jpeg";
import { Text, Title } from "@mantine/core";

// React function for biography
function Bio() {
  return (
    <div className="bio">
      <img src={Photo} alt="nathou" className="image" />
      <div className="bio__content">
        <Title
          style={{ paddingTop: "0.5em", paddingBottom: "0.5em" }}
          order={1}
        >
          Nathan Doumèche
        </Title>
        <div className="bio-paragraph">
          Hello and welcome to my personal website! Here you will find out more
          about my research and my background. I am currently a PhD student in
          statistics applied to machine learning under the supervision of Gérard
          Biau at Sorbonne Université and Yannig Goude at EDF Lab Paris Saclay.
          I am also co-supervised by Yann Allioux, Claire Boyer and Sandra
          Claudel.
        </div>
        <Title
          style={{ paddingTop: "0.5em", paddingBottom: "0.5em" }}
          order={1}
        >
          Research interests
        </Title>
        <div className="bio-paragraph">
          Passionate about the links between theory and practice in science, my
          research focuses both on both the theoretical foundations of machine
          learning and its applications to the energy sector. Hopefully, it will
          be a small step towards understanding artificial intelligence and
          improving our daily lives.
        </div>
        <div className="bio-paragraph" style={{ paddingTop: "1em" }}>
          With Gérard Biau and Claire Boyer, I investigate the theoretical
          properties of Physics-Informed Neural Networks (PINNs). These
          algorithms are very exciting because they combine the powerful
          data-driven technologies of machine learning with the interpretability
          of physics modeling.
        </div>
        <div className="bio-paragraph" style={{ paddingTop: "1em" }}>
          With Yann Allioux, Yannig Goude, and Sandra Claudel, I am working to
          develop new forecasting algorithms to predict the French electricity
          demand. This helps the EDF company to produce electricity at the right
          time and to act efficiently on the energy markets.
        </div>
        <Title
          style={{ paddingTop: "0.5em", paddingBottom: "0.5em" }}
          order={1}
        >
          Contact
        </Title>
        You can join me at{" "}
        <a href="mailto: nathan.doumeche@gmail.com" className="details-value">
          nathan.doumeche@gmail.com
        </a>
        .
        <div className="app-logos">
          <a
            className="app-logo"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/nathan-doumeche/"
          >
            <SiLinkedin size={30} />
          </a>
          {/*<a
            className="app-logo"
            target="_blank"
            rel="noopener noreferrer"
            href=""
          >
            <SiGooglescholar size={30} />
  </a>*/}
          <a
            className="app-logo"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.researchgate.net/profile/Nathan-Doumeche"
          >
            <SiResearchgate size={30} />
          </a>
          <a
            className="app-logo"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/NathanDoumeche"
          >
            <SiGithub size={30} />
          </a>

          {/*<a
            className="app-logo"
            target="_blank"
            rel="noopener noreferrer"
            href=""
          >
            <SiGitlab size={30} />
</a>*/}
        </div>
      </div>
    </div>
  );
}

export default Bio;
