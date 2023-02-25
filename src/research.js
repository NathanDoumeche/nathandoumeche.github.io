import { ActionIcon, Title } from "@mantine/core";
import { IconDownload, IconLink } from "@tabler/icons-react";
import { SiGithub } from "react-icons/si";

function Research() {
  let articles = [
    {
      title: "Neural networks are actually cool",
      date: "2021",
      journal: "Science",
      authors: ["Nathan Doumèche", "Alexis Thomas"],
      pdf: "https://arxiv.org/pdf/2006.08442.pdf",
      github: "https://www.google.com",
    },
    {
      title: "Katy Perry new album leaks",
      date: "2021",
      journal: "Neurips",
      authors: ["Nathan Doumèche", "Alexis Thomas"],
    },
    {
      title: "Top 10 most horrifying creatures",
      date: "2021",
      journal: "Picsou Magazine",
      authors: ["Nathan Doumèche", "Alexis Thomas"],
    },
  ];

  let talks = [
    {
      title: "Signed Taylor Expansion and applications to machine learning",
      date: "2021",
      conf: "GDR TRAG - Signatures and rough paths for machine learning",
      place: "Institut Henri Poincaré - Paris- France",
      link: "https://young-trag-2021.sciencesconf.org/",
    },
  ];

  let lectures = [
    {
      title: "Partial differential equations in Physics",
      date: "2021",
      place: "Ecole Normale Supérieure Paris (Ulm) - PSL University",
      level: "Highscool TalENS programme",
    },
  ];
  return (
    <div className="research">
      <Title style={{ paddingBottom: "1em" }} order={1}>
        Peer-reviewed articles
      </Title>
      {articles.map((article) => (
        <Article
          title={article.title}
          date={article.date}
          journal={article.journal}
          authors={article.authors}
          lienPdf={article.pdf}
          lienGithub={article.github}
        />
      ))}

      <Title style={{ paddingTop: "1em", paddingBottom: "1em" }} order={1}>
        Talks
      </Title>
      {talks.map((talk) => (
        <Talk
          title={talk.title}
          date={talk.date}
          conf={talk.conf}
          place={talk.place}
          lienPdf={talk.pdf}
          lienConf={talk.link}
        />
      ))}

      <Title style={{ paddingTop: "1em", paddingBottom: "1em" }} order={1}>
        Teaching
      </Title>
      {lectures.map((lecture) => (
        <Teaching
          title={lecture.title}
          date={lecture.date}
          level={lecture.level}
          place={lecture.place}
        />
      ))}
    </div>
  );
}

function Article(props) {
  return (
    <div className="article-container">
      <div className="article-left-side">
        <div className="article-title">{props.title}</div>
        <div className="article-date">
          {"  "}
          {props.authors.join(", ")} ({props.date}) in <i>{props.journal}</i>
        </div>
      </div>
      <div className="article-right-side">
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
    <div className="article-container">
      <div className="article-left-side">
        <div className="article-title">{props.title}</div>
        <div className="article-date">
          {"  "}
          <i>{props.conf}</i> ({props.date}), {props.place}
        </div>
      </div>
      <div className="article-right-side">
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

function Teaching(props) {
  return (
    <div className="article-container">
      <div className="article-left-side">
        <div className="article-title">{props.title}</div>
        <div className="article-date">
          {props.level} ({props.date}), <i>{props.place}</i>
        </div>
      </div>
      <div className="article-right-side">
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
