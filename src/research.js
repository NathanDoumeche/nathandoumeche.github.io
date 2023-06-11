import { Title } from "@mantine/core";
import { IconDownload, IconLink } from "@tabler/icons-react";
import { SiGithub } from "react-icons/si";

var w = document.documentElement.clientWidth || window.innerWidth;

function Research() {
  let articles = [
    {
      title:
        "Forecasting Electric Vehicle Charging Station Occupancy: Smarter Mobility Data Challenge",
      date: "2023",
      authors: [
        "Yvenn Amara-Ouali",
        "Yannig Goude",
        "Nathan Doumèche",
        "Pascal Veyret",
        "Alexis Thomas",
        "Daniel Hebenstreit",
        "Thomas Wedenig",
        "Arthur Satouf",
        "Aymeric Jan",
        "Yannick Deleuze",
        "Paul Berhaut",
        "Sébastien Treguer",
        "Tiphaine Phe-Neau",
      ],
      pdf: "https://hal.sorbonne-universite.fr/hal-04119408v1",
      github: "https://github.com/NathanDoumeche/Smart_mobility_challenge",
    },
    {
      title: "Convergence and error analysis of PINNs",
      date: "2023",
      authors: ["Nathan Doumèche", "Gérard Biau", "Claire Boyer"],
      pdf: "https://arxiv.org/abs/2305.01240",
      github:
        "https://github.com/NathanDoumeche/Convergence_and_error_analysis_of_PINNs",
    },
  ];

  let talks = [
    {
      title:
        "Prévision court-terme de la consommation électrique française à l'aide de données de présence",
      date: "(2023),",
      conf: "54ème Journées de Statistique - Séries temporelles",
      place: "ULB - Brussels - Belgium",
      link: "https://jds2023.sciencesconf.org/",
    },
    {
      title: " Convergence des réseaux neuronaux avec a priori physique",
      date: "(2023),",
      conf: "54ème Journées de Statistique - Apprentissage statistique",
      place: "ULB - Brussels - Belgium",
      link: "https://jds2023.sciencesconf.org/",
      pdf: "https://drive.google.com/file/d/1tlBAeNFTqQQUcxJ4-FksOCKR_xYvIA2Q/view?usp=sharing",
    },
    {
      title: "Some theoretical properties of physics-informed neural networks",
      date: "(2023),",
      conf: "Inaugural CAMDA Conference",
      place: "Texas A&M - College Station - USA",
      link: "https://sites.google.com/tamu.edu/camda-conference/",
      pdf: "https://drive.google.com/file/d/1tlBAeNFTqQQUcxJ4-FksOCKR_xYvIA2Q/view?usp=sharing",
    },
    {
      title: "Convergence and error analysis of PINNs",
      date: "(2023),",
      conf: "LPSM PhD seminar",
      place: "Sorbonne University - Paris - France",
      link: "https://www.lpsm.paris/seminaires/gtt/index",
      pdf: "https://drive.google.com/file/d/1tlBAeNFTqQQUcxJ4-FksOCKR_xYvIA2Q/view?usp=sharing",
    },
    {
      title:
        "Taylor expansion with signature and applications to machine learning",
      date: "(2021),",
      conf: "GDR TRAG - Signatures and rough paths for machine learning",
      place: "Institut Henri Poincaré - Paris - France",
      link: "https://young-trag-2021.sciencesconf.org/",
      pdf: "https://drive.google.com/file/d/1EeZUqUpXRPFzwyK3KVJh4o4DW2O65XHc/view?usp=sharing",
    },
  ];

  let posters = [
    {
      title: "Some statistical insights into PINNs",
      date: "(2023),",
      conf: "Foundations of Computational Mathematics 2023",
      place: "Sorbonne Université - Paris - France",
      link: "https://focm2023.org/",
      pdf: "https://drive.google.com/file/d/1lLlqYBM23qzh95ZPSKW1H9R53ULPUBN6/view?usp=sharing",
    },
  ];

  let lectures = [
    {
      title: "Partial differential equations in Physics",
      date: "(2021),",
      place: "École Normale Supérieure de Paris (Ulm) - PSL University",
      level: "TalENS programme for secondary school students",
    },
  ];
  return (
    <div className="research">
      <Title style={{ paddingBottom: "1em" }} order={1}>
        Preprints
      </Title>
      {articles.map((article) => (
        <Article
          title={article.title}
          date={article.date}
          authors={article.authors}
          lienPdf={article.pdf}
          lienGithub={article.github}
          key={article.title}
        />
      ))}

      <Title style={{ paddingTop: "0.5em", paddingBottom: "0.5em" }} order={1}>
        Research talks
      </Title>
      {talks.map((talk) => (
        <Talk
          title={talk.title}
          date={talk.date}
          conf={talk.conf}
          place={talk.place}
          lienPdf={talk.pdf}
          lienConf={talk.link}
          key={talk.title}
        />
      ))}

      <Title style={{ paddingTop: "0.5em", paddingBottom: "0.5em" }} order={1}>
        Research posters
      </Title>
      {posters.map((talk) => (
        <Talk
          title={talk.title}
          date={talk.date}
          conf={talk.conf}
          place={talk.place}
          lienPdf={talk.pdf}
          lienConf={talk.link}
          key={talk.title}
        />
      ))}

      <Title style={{ paddingTop: "0.5em", paddingBottom: "0.5em" }} order={1}>
        Teaching
      </Title>
      {lectures.map((lecture) => (
        <Teaching
          title={lecture.title}
          date={lecture.date}
          level={lecture.level}
          place={lecture.place}
          key={lecture.title}
        />
      ))}
    </div>
  );
}

function Article(props) {
  return (
    <div className="research-container">
      <div className="research-left-side">
        <div className="research-title">{props.title}</div>
        <div className="research-date">
          {"  "}
          {props.authors.join(", ")} ({props.date})
        </div>
      </div>
      <div
        className="research-right-side"
        style={{
          flexDirection: `${w > 480 ? "row" : "column"}`,
        }}
      >
        {props.lienGithub ? (
          <a target="_blank" href={props.lienGithub}>
            <SiGithub size={30} />
          </a>
        ) : null}
        {props.lienPdf ? (
          <a target="_blank" href={props.lienPdf}>
            <IconDownload size={30} />
          </a>
        ) : null}
      </div>
    </div>
  );
}

function Talk(props) {
  return (
    <div className="research-container">
      <div className="research-left-side">
        <div className="research-title">{props.conf}</div>
        <div className="research-date">
          {"  "}
          <i>{props.title}</i> {props.date} {props.place}
        </div>
      </div>
      <div
        className="research-right-side"
        style={{
          flexDirection: `${w > 480 ? "row" : "column"}`,
        }}
      >
        {props.lienConf ? (
          <a
            target="_blank"
            href={props.lienConf}
            aria-label="Link to the talk webpage."
          >
            <IconLink size={30} />
          </a>
        ) : null}
        {props.lienPdf ? (
          <a target="_blank" href={props.lienPdf} aria-label="Download slides.">
            <IconDownload size={30} />
          </a>
        ) : null}
      </div>
    </div>
  );
}

function Teaching(props) {
  return (
    <div className="research-container">
      <div className="research-left-side">
        <div className="research-title">{props.title}</div>
        <div className="research-date">
          <i>{props.level}</i> {props.date} {props.place}
        </div>
      </div>
      <div
        className="research-right-side"
        style={{
          flexDirection: `${w > 480 ? "row" : "column"}`,
        }}
      >
        {props.lienConf ? (
          <a target="_blank" href={props.lienConf}>
            <IconLink size={30} />
          </a>
        ) : null}
        {props.lienPdf ? (
          <a target="_blank" href={props.lienPdf}>
            <IconDownload size={30} />
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default Research;
