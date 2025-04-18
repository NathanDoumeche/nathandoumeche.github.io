import { Title } from "@mantine/core";
import { IconDownload, IconLink } from "@tabler/icons-react";
import { SiGithub } from "react-icons/si";

var w = document.documentElement.clientWidth || window.innerWidth;

function Research() {
  let articlesPublished = [
    {
      title: "On the convergence of PINNs (Bernoulli)",
      date: "2025",
      authors: ["Nathan Doumèche", "Gérard Biau", "Claire Boyer"],
      pdf: "https://arxiv.org/abs/2305.01240",
      github:
        "https://github.com/NathanDoumeche/Convergence_and_error_analysis_of_PINNs",
    },
    {
      title:
        "Forecasting Electric Vehicle Charging Station Occupancy: Smarter Mobility Data Challenge (DMLR)",
      date: "2024",
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
      pdf: "https://data.mlr.press/volumes/01",
      github: "https://github.com/NathanDoumeche/Smart_mobility_challenge",
    },
    {
      title: "Physics-informed machine learning as a kernel method (COLT 2024)",
      date: "2024",
      authors: [
        "Nathan Doumèche",
        "Francis Bach",
        "Gérard Biau",
        "Claire Boyer",
      ],
      pdf: "https://proceedings.mlr.press/v247/doumeche24a",
      github: "https://github.com/NathanDoumeche/PIML_as_a_kernel_method",
    },
  ];

  let articles = [
    {
      title: "Forecasting time series with constraints",
      date: "2025",
      authors: [
        "Nathan Doumèche",
        "Francis Bach",
        "Eloi Bedek",
        "Gérard Biau",
        "Claire Boyer",
        "Yannig Goude",
      ],
      pdf: "https://arxiv.org/abs/2502.10485",
      github: "https://github.com/NathanDoumeche/WeaKL",
    },
    {
      title: "Physics-informed kernel learning",
      date: "2024",
      authors: [
        "Nathan Doumèche",
        "Francis Bach",
        "Gérard Biau",
        "Claire Boyer",
      ],
      pdf: "https://arxiv.org/abs/2409.13786",
      github: "https://github.com/NathanDoumeche/numerical_PIML_kernel",
    },

    {
      title:
        "Human spatial dynamics for electricity demand forecasting: the case of France during the 2022 energy crisis",
      date: "2023",
      authors: [
        "Nathan Doumèche",
        "Yann Allioux",
        "Yannig Goude",
        "Stefania Rubrichi",
      ],
      pdf: "https://arxiv.org/abs/2309.16238",
      github: "https://github.com/NathanDoumeche/Mobility_data_assimilation",
    },
  ];

  let talks = [
    {
      title: "A statistical tour of physics-informed machine learning",
      date: "(2025),",
      conf: "Summer school: Mathematical foundations of data science",
      place: "Montreal University - Montreal - Canada",
      link: "https://www.crmath.ca/en/activities/#/type/activity/id/3993",
    },
    {
      title: "Prévision de séries temporelles sous contraintes linéaires",
      date: "(2025),",
      conf: "56ème journées de statistiques de la SFdS",
      place: "Université Aix-Marseille - Marseille - France",
      link: "https://jds2025.sciencesconf.org/",
    },
    {
      title: "Efficient learning with physical priors",
      date: "(2025),",
      conf: "CELESTE seminar",
      place: "LMO - Orsay - France",
      link: "https://www.inria.fr/en/celeste",
    },
    {
      title: "Efficient learning with physical priors",
      date: "(2025),",
      conf: "Séminaire parisien de statistique",
      place: "Institut Henri Poincaré - Paris - France",
      link: "https://sites.google.com/site/semstats/ann%C3%A9e-2024-2025/s%C3%A9ance-du-10-f%C3%A9vrier-2025?pli=1",
    },
    {
      title: "Physics-informed machine learning as a kernel method",
      date: "(2024),",
      conf: "Combining AI and physical modeling for contemporary simulations",
      place:
        "CECAM - École Polytechnique Fédérale de Lausanne - Lausanne - Switzerland",
      link: "https://www.cecam.org/workshop-details/combining-ai-and-physical-modeling-for-contemporary-simulations-1364",
    },
    {
      title: "Statistical insights into physics-informed machine learning",
      date: "(2024),",
      conf: "MILES (Dauphine-PSL) seminar",
      place: "Paris Dauphine-PSL University - Paris - France",
      link: "https://www.lamsade.dauphine.fr/wp/miles/",
    },
    {
      title: "PIML as a kernel method",
      date: "(2024),",
      conf: "Conference On Learning Theory (COLT 2024)",
      place: "Edmonton - Canada",
      link: "https://learningtheory.org/colt2024/",
    },
    {
      title: "On the convergence rate of PIML",
      date: "(2024),",
      conf: "Workshop on Hybrid Modelling in Earth and Environmental Sciences",
      place: "Jena - Germany",
    },
    {
      title: "Physics-informed machine learning and time series",
      date: "(2024),",
      conf: "Session ENBIS - 55ème Journées de Statistique de la SFdS ",
      place: "University of Bordeaux - Bordeaux - France",
      link: "https://jds2024.sciencesconf.org/",
    },
    {
      title: "PIML as a kernel method",
      date: "(2024),",
      conf: "Machine Learning and Dynamical Systems Seminar",
      place: "Alan Turing Institute - London - United Kingdom",
      pdf: "https://drive.google.com/file/d/1YXF-udnjU7fsshJa8o8EM477iL5_-1SU/view?usp=sharing",
      link: "https://www.turing.ac.uk/research/interest-groups/machine-learning-and-dynamical-systems",
    },
    {
      title: "Some statistical insight into PINNs",
      date: "(2024),",
      conf: "IDEFIX seminar",
      place:
        "Unit of Applied Mathematics (UMA) - ENSTA - Polytechnique Institute of Paris - Palaiseau - France",
      link: "https://uma.ensta-paris.fr/idefix/",
      pdf: "https://drive.google.com/file/d/1tlBAeNFTqQQUcxJ4-FksOCKR_xYvIA2Q/view?usp=sharing",
    },
    {
      title: "Some statistical insight into PINNs",
      date: "(2024),",
      conf: "Weekly seminar of MIA",
      place:
        "Agro Campus Paris-Saclay - Paris-Saclay University - Paris - France",
      link: "https://mia-ps.inrae.fr/seminaires-miaps",
      pdf: "https://drive.google.com/file/d/1tlBAeNFTqQQUcxJ4-FksOCKR_xYvIA2Q/view?usp=sharing",
    },
    {
      title:
        "Physics-Informed Machine Learning and electricity-demand forecasting",
      date: "(2024),",
      conf: "Seminar of Paris Santé Campus",
      place: "Laboratoire HeKA - Paris City University - Paris - France",
      pdf: "https://drive.google.com/file/d/1tlBAeNFTqQQUcxJ4-FksOCKR_xYvIA2Q/view?usp=sharing",
    },
    {
      title: "Some statistical insight into PINNs",
      date: "(2023),",
      conf: "Seminar of Modeling and Scientific computing",
      place:
        "Laboratoire Analyse, Géométrie et Applications - Paris 13 - France",
      link: "https://www.math.univ-paris13.fr/laga/index.php/fr/mcs/seminaires/20-seminaires/65-seminaire-d-analyse-appliquee",
      pdf: "https://drive.google.com/file/d/1tlBAeNFTqQQUcxJ4-FksOCKR_xYvIA2Q/view?usp=sharing",
    },
    {
      title: "Convergence and error analysis of PINNs",
      date: "(2023),",
      conf: "Workshop on Physics Informed Learning",
      place: "IMT - Toulouse - France",
      link: "https://www.gdr-mascotnum.fr/dec23.html",
      pdf: "https://drive.google.com/file/d/1tlBAeNFTqQQUcxJ4-FksOCKR_xYvIA2Q/view?usp=sharing",
    },
    {
      title: "Convergence and error analysis of PINNs",
      date: "(2023),",
      conf: "PGMODays",
      place: "EDF Lab Paris-Saclay - Palaiseau - France",
      link: "https://www.fondation-hadamard.fr/fr/programmes/les-programmes-thematiques/home/pgmo-days/?edit&language=fr",
      pdf: "https://drive.google.com/file/d/1tlBAeNFTqQQUcxJ4-FksOCKR_xYvIA2Q/view?usp=sharing",
    },
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
      title: "On the convergence rate of Physics-Informed Machine Learning",
      date: "(2024),",
      conf: "Workshop: Latest Developments in Physics-Informed Machine Learning",
      place: " Imperial College - London - UK",
      link: "https://www.imperial.ac.uk/events/172489/workshop-latest-developments-in-physics-informed-machine-learning/",
      pdf: "https://drive.google.com/file/d/1RqeNB1bLTz8ALYXG5XxPKx8UvBprhOMG/view?usp=sharing",
    },
    {
      title: "Human spatial dynamics for electricity demand forecasting",
      date: "(2023),",
      conf: "NetMob 2023",
      place: " Universidad Carlos III de Madrid - Madrid - Spain",
      link: "https://netmob.org/",
      pdf: "https://drive.google.com/file/d/1MIAfjyQfaLOGQ3tImeJUqCJegIbyjk3U/view?usp=share_link",
    },
    {
      title: "Some statistical insights into PINNs",
      date: "(2023),",
      conf: "Foundations of Computational Mathematics 2023",
      place: "Sorbonne University - Paris - France",
      link: "https://focm2023.org/",
      pdf: "https://drive.google.com/file/d/1U--WqgSOhi0RZefBJEQ4zNYUPOWRrhiU/view?usp=share_link",
    },
  ];

  let lectures = [
    {
      title: "Introduction to Statistics",
      date: "(2023-2024),",
      place: "Sorbonne University",
      level: "Undergraduate level (3rd year)",
    },
    {
      title: "Partial differential equations in Physics",
      date: "(2021-2022),",
      place: "École Normale Supérieure de Paris (Ulm) - PSL University",
      level: "TalENS programme for secondary school students",
    },
  ];

  let students = [
    {
      name: "Guillhem Artis",
      date: "March 2024 - October 2024,",
      place: "Sorbonne University",
      level: "Master 2 research internship",
      topic: "Optimization of PINNs",
      cosupervision: "Claire Boyer and Gérard Biau",
    },
    {
      name: "Eloi Bedek",
      date: "May 2024 - March 2025,",
      place: "EDF Lab",
      level: "3rd-year ENSTA internship",
      topic: "Using remote working data for electricity load forecasting",
      cosupervision: "Yannig Goude and Stefania Rubrichi",
    },
  ];

  let activities = [
    {
      conf: "Reviewer for IEEE Transactions on Signal Processing, JASA, and Annals of Statistics",
      date: "(2024)",
      place: "",
      level: "",
    },
    {
      conf: "Reviewer for Biometrika",
      date: "(2023)",
      place: "",
      level: "",
    },
    {
      conf: "Organizer of NeurIPS in Paris 2023",
      title: "",
      date: "(2022),",
      place: "Sorbonne University",
      level: "TalENS programme for secondary school students",
      link: "https://neuripsinparis.github.io/neurips2023paris/",
    },
  ];
  return (
    <div className="research">
      <Title style={{ paddingBottom: "1em" }} order={1}>
        Published articles
      </Title>
      {articlesPublished.map((article) => (
        <Article
          title={article.title}
          date={article.date}
          authors={article.authors}
          lienPdf={article.pdf}
          lienGithub={article.github}
          key={article.title}
        />
      ))}
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
        Supervision
      </Title>
      {students.map((student) => (
        <Supervision
          name={student.name}
          date={student.date}
          level={student.level}
          place={student.place}
          topic={student.topic}
          cosupervision={student.cosupervision}
          key={student.title}
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

      <Title style={{ paddingTop: "0.5em", paddingBottom: "0.5em" }} order={1}>
        Academic activities
      </Title>
      {activities.map((talk) => (
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

function Supervision(props) {
  return (
    <div className="research-container">
      <div className="research-left-side">
        <div className="research-title">{props.name + " - " + props.level}</div>
        <div className="research-date">
          <i>{props.topic}</i>, {props.date}{" "}
          {props.cosupervision
            ? "cosupervised with " + props.cosupervision + ","
            : null}{" "}
          {props.place}
        </div>
      </div>
    </div>
  );
}

export default Research;
