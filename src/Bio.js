import {
  SiGithub,
  SiLinkedin,
  SiResearchgate,
  SiGooglescholar,
} from "react-icons/si";
import Photo from "./assets/nathandoumeche.jpeg";
import { Title } from "@mantine/core";

// React function for biography
function Bio() {
  return (
    <div className="bio">
      <img src={Photo} alt="Nathan Doumeche photo" className="image" />
      <div className="bio__content">
        <Title
          style={{ paddingTop: "0.5em", paddingBottom: "0.5em" }}
          order={1}
        >
          Nathan Doumèche
        </Title>
        <div className="bio-paragraph">
          Hello and welcome to my personal website! Here you can find out more
          about my research and my background. I am currently a PhD student in
          Mathematics under the supervision of{" "}
          <a
            target="_blank"
            href="https://perso.lpsm.paris/~biau/"
            aria-label="Gérard Biau webpage"
          >
            Gérard Biau
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            href="https://perso.lpsm.paris/~cboyer/"
            aria-label="Claire Boyer webpage"
          >
            Claire Boyer
          </a>{" "}
          at Sorbonne University. In parallel, I am working at EDF Lab Paris
          Saclay with Yann Allioux, Sandra Claudel, and{" "}
          <a
            target="blank"
            href="https://www.imo.universite-paris-saclay.fr/~yannig.goude/about.html"
            aria-label="Yannig Goude webpage"
          >
            Yannig Goude
          </a>
          .
        </div>
        <Title
          style={{ paddingTop: "0.5em", paddingBottom: "0.5em" }}
          order={1}
        >
          Research areas
        </Title>
        <div className="bio-paragraph">
          Passionate about the connections between theory and practice in
          science, my research focuses on both the theoretical foundations of
          machine learning and their applications to the energy sector. The aim
          is to improve our understanding of how artificial intelligence works
          so that we can make better use of it in our everyday life.
        </div>
        <div className="bio-paragraph" style={{ paddingTop: "1em" }}>
          Together with Gérard Biau and Claire Boyer, I study the theoretical
          properties of physics-informed neural networks (PINNs). These
          algorithms are very promessing because they combine the powerful
          data-driven techniques of machine learning with the interpretability
          of physics modelling.
        </div>
        <div className="bio-paragraph" style={{ paddingTop: "1em" }}>
          In collaboration with Yann Allioux, Sandra Claudel, and Yannig Goude,
          I work on forecasting the French electricity demand, which helps EDF
          produce electricity at the right time and to act efficiently on the
          energy markets.
        </div>
        <Title
          style={{ paddingTop: "0.5em", paddingBottom: "0.5em" }}
          order={1}
        >
          Contact
        </Title>
        You can contact me at{" "}
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
            aria-label="Visit Nathan Doumèche's LinkedIn account."
          >
            <SiLinkedin size={30} />
          </a>
          <a
            className="app-logo"
            target="_blank"
            rel="noopener noreferrer"
            href="https://scholar.google.com/citations?user=3JoxDxUAAAAJ"
          >
            <SiGooglescholar size={30} />
          </a>
          <a
            className="app-logo"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.researchgate.net/profile/Nathan-Doumeche"
            aria-label="Visit Nathan Doumèche's ResearchGate account."
          >
            <SiResearchgate size={30} />
          </a>
          <a
            className="app-logo"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/NathanDoumeche"
            aria-label="Visit Nathan Doumèche's GitHub account."
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
