import { SiGithub, SiLinkedin, SiResearchgate } from "react-icons/si";
import Photo from "./assets/nathou.jpeg";
import { Text, Title } from "@mantine/core";

// React function for biography
function Bio() {
  return (
    <div className="bio">
      <img src={Photo} alt="Nathan Doumèche's photo" className="image" />
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
            aria-label="Gérard Biau's webpage"
          >
            Gérard Biau
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            href="https://perso.lpsm.paris/~cboyer/"
            aria-label="Claire Boyer's webpage"
          >
            Claire Boyer
          </a>{" "}
          at Sorbonne Université. In the meantime, I am working at EDF Lab Paris
          Saclay with Yann Allioux, Yannig Goude, and Sandra Claudel.
        </div>
        <Title
          style={{ paddingTop: "0.5em", paddingBottom: "0.5em" }}
          order={1}
        >
          Research interests
        </Title>
        <div className="bio-paragraph">
          Passionate about the connections between theory and practice in
          science, my research focuses on both the theoretical foundations of
          machine learning and its applications to the energy sector. Hopefully,
          this will be a small step towards understanding artificial
          intelligence and improving our daily lives.
        </div>
        <div className="bio-paragraph" style={{ paddingTop: "1em" }}>
          Together with Gérard Biau and Claire Boyer, I study the theoretical
          properties of physics-informed neural networks (PINNs). These
          algorithms are very exciting because they combine the powerful
          data-driven technologies of machine learning with the interpretability
          of modelling.
        </div>
        <div className="bio-paragraph" style={{ paddingTop: "1em" }}>
          In collaboration with Yann Allioux, Yannig Goude, and Sandra Claudel,
          I am working on forecasting the French electricity demand. This will
          help EDF to produce electricity at the right time and to act
          efficiently on the energy markets.
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
