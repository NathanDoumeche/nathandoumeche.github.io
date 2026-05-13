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
      <div className="bio__content">
        <Title
          style={{ paddingTop: "0.5em", paddingBottom: "0.5em" }}
          order={1}
        >
          Nathan Doumèche
        </Title>
        <img src={Photo} alt="Nathan Doumeche photo" className="image" />
      

          <Title
          style={{ paddingTop: "1em", paddingBottom: "0.5em" }}
          order={1}
        >
          Short bio
        </Title>

        <div className="bio-paragraph">
          I am currently a quantitative researcher at Citadel in London.
          Prior to that, I was a PhD student in Mathematics at Sorbonne University in Paris, under the supervision of{" "}
          <a
            target="_blank"
            href="https://perso.lpsm.paris/~biau/"
            aria-label="Gérard Biau webpage"
          >
            Gérard Biau
          </a>{" "}
          (Professor at Sorbonne University and member of the French Academy of Sciences) and{" "}
          <a
            target="_blank"
            href="https://perso.lpsm.paris/~cboyer/"
            aria-label="Claire Boyer webpage"
          >
            Claire Boyer 
          </a>{" "}
          (Professor at Paris-Saclay University), while working in parallel as a research scientist at EDF Lab Paris
          Saclay with{" "}
          <a
            target="blank"
            href="https://www.imo.universite-paris-saclay.fr/~yannig.goude/about.html"
            aria-label="Yannig Goude webpage"
          >
            Yannig Goude  
          </a>{" "}
           (Senior Researcher Statistical Learning).
        </div>
        <Title
          style={{ paddingTop: "0.5em", paddingBottom: "0.5em" }}
          order={1}
        >
          Research areas
        </Title>
        <div className="bio-paragraph">
          On the applied side, I specialize in applying mathematical methods to energy forecasting and energy markets. 
          On the theoretical side, I have worked on physics-informed neural networks, fast kernel methods, generalized additive models, adaptive time series forecasting, and hierarchical forecasting. 
        </div>
        <div className="bio-paragraph" style={{ paddingTop: "1em" }}>
          In collaboration with Yannig Goude, I worked on forecasting the French
          electricity demand, which helps EDF produce electricity at the right
          time and to act efficiently on the energy markets. 
          At Citadel, I currently work on modelling prices on the European power market.
        </div>
        <div className="bio-paragraph" style={{ paddingTop: "1em" }}>
          Together with Gérard Biau, Claire Boyer, and Francis Bach, I study the theoretical
          properties of physics-informed machine learning (PIML). 
          The goal is to improve the accuracy and reliability of statistical learning methods by incorporating physical knowledge of the underlying phenomena, and to provide theoretical guarantees on the performance of these methods.
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
        .           Due to the reglemented status of my current job, I am unfortunately unable to speak at conferences and seminars.

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
