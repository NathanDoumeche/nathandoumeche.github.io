import { Title } from "@mantine/core";
import { IconLink } from "@tabler/icons-react";
import { SiGithub } from "react-icons/si";

var w = document.documentElement.clientWidth || window.innerWidth;

function Awards() {
  let awards = [
    {
      name: "Smarter Mobility Data Challenge",
      linkName: "https://codalab.lisn.upsaclay.fr/competitions/7192",
      date: "2022",
      rank: "Rank 3",
      description:
        "I teamed up with Alexis Thomas for this international data challenge on electric vehicle load forecasting organised by the Manifeste IA network of 16 industrial companies and the TAILOR European project on the scientific foundations for trustworthy AI.",
      github: "https://github.com/NathanDoumeche/Smart_mobility_challenge",
    },
    {
      name: "International Physics Olympiads",
      linkName: "https://ipho-unofficial.org/countries/FRA/individual",
      date: "2017",
      rank: "Bronze medal",
      description:
        "International challenge in both theoretical and experimental physics for undergraduate students which held in Yogyakarta, Indonesia.",
    },
    {
      name: "Concours Général des Lycées",
      linkName:
        "https://www.education.gouv.fr/le-concours-general-des-lycees-et-des-metiers-un-prix-d-excellence-10022",
      date: "2016",
      rank: "Mention in Physics and Chemistry",
      description:
        "National competition in theoretical physics and chemistry  for secondary school students, organised by the French Ministry of National Education.",
    },
    {
      name: "Local Mathematics Olympiads",
      date: "2015",
      rank: "Rank 1",
      description:
        "Mathematics competition for secondary school students,  organised by the French Ministry of National Education and by the Animath association, on the scale of the Académie de Nice.",
      linkName:
        "https://www.pedagogie.ac-nice.fr/mathematiques/category/culture-mathematique/rallyes-et-concours/olympiades/",
    },
  ];

  return (
    <div className="research">
      <Title style={{ paddingBottom: "0.5em" }} order={1}>
        Awards
      </Title>
      {awards.map((article) => (
        <Article
          name={article.name}
          date={article.date}
          rank={article.rank}
          description={article.description}
          lienPdf={article.linkName}
          lienGithub={article.github}
          key={article.name}
        />
      ))}
    </div>
  );
}

function Article(props) {
  return (
    <div className="research-container">
      {console.log(w)}
      <div className="research-left-side">
        <div className="research-title">{props.name}</div>
        <div className="research-date">
          <b>{props.rank}</b> {"(" + props.date + ") - "}{" "}
          <i>{props.description}</i>
        </div>
      </div>
      <div
        className="research-right-side"
        style={{
          flexDirection: `${w > 480 ? "row" : "column"}`,
        }}
      >
        {props.lienGithub ? (
          <a target="_blank" href={props.lienGithub} aria-label="GitHub page.">
            <SiGithub size={30} />
          </a>
        ) : null}
        {props.lienPdf ? (
          <a target="_blank" href={props.lienPdf} aria-label="Award page.">
            <IconLink size={30} />
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default Awards;
