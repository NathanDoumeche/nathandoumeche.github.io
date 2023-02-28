import { Timeline, Text, Title, Avatar, List, Spoiler } from "@mantine/core";
import { ReactComponent as Python } from "./assets/python.svg";
import { ReactComponent as React } from "./assets/react.svg";
import { ReactComponent as AWS } from "./assets/aws.svg";
import { ReactComponent as Docker } from "./assets/docker.svg";
import { ReactComponent as Git } from "./assets/git.svg";
import { ReactComponent as Linux } from "./assets/linux.svg";
import { ReactComponent as SQL } from "./assets/sql.svg";
import { ReactComponent as TypeScript } from "./assets/typescript.svg";
import { ReactComponent as Java } from "./assets/java.svg";

const icons = [Python, React, AWS, Docker, Git, Linux, SQL, TypeScript, Java];

let skills = [
  {
    name: "Python",
  },
  {
    name: "react.js",
  },
  {
    name: "AWS",
  },
  {
    name: "Docker",
  },
  {
    name: "Git",
  },
  {
    name: "Linux",
  },
  {
    name: "SQL",
  },
  {
    name: "TypeScript",
  },
  {
    name: "Java",
  },
];

var w = document.documentElement.clientWidth || window.innerWidth;

function Skill(props) {
  const Icon = icons[props.id];
  return (
    <div className="skill">
      <Icon height={40} width={40} />
      {/* <div className="skill-name">{props.name}</div> */}
      <Text
        fz="sm"
        c="dimmed"
        variant="gradient"
        gradient={{ from: "indigo.4", to: "cyan.2", deg: 45 }}
      >
        {props.name}
      </Text>
    </div>
  );
}

function Resume() {
  let experiences = [
    {
      name: "EDF R&D",
      job: "Research Scientist in machine learning",
      date: "sept. 2022 - dec. 2025",
      logo: "edf.png",
      description: [
        "Research and developpment of forecasting algorithms for the French electricity load.",
        "Intensive use of Python, R, Bash, Git, and Docker to build and deploy machine learning based programs.",
        "Supervised by Yannig Goude and co-supervised by Yann Allioux and Sandra Claudel.",
        "Participation to the Smarter Mobility Data Challenge (see Awards).",
      ],
      steps: [
        {
          date: "march. 2022 - sept. 2022 (6 months)",
          job: "Research Scientist trainee in machine learning",
          description: [],
        },
      ],
    },
    {
      name: "French Ministry of the Ecological Transition",
      job: "Internship in the French administration : modelling the electricity sector",
      date: "oct. 2021 - march 2022 (5 months)",
      description: [
        "Modelling of the best investments strategy to reduce carbone emissions.",
        "Specialised in the electricity sector.",
        "Linear Programming in Python (CBC).",
        "Supervisor : Olivier de Guibert.",
      ],
      logo: "mte.jpeg",
    },
    {
      name: "Sorbonne Université",
      job: "Research Internship in Probability and machine learning",
      date: "april 2021 - aug. 2021 (4 months)",
      description: [
        "Research scientist in Machine Learning applied to forecasting the French electricity load",
        "Supervised by Gérard Biau and co-supervised by Adeline Fermanian and Pierre Marion.",
      ],
      logo: "su.jpeg",
    },
    {
      name: "Princeton University",
      job: "Visiting Student Research Collaborator in Statistical Physics and machine learning",
      date: "june 2020 - dec. 2020 (4 months)",
      description: [
        "Study of Machine Learning kernels (NNGP and NTK for Self-Attention).",
        "Programming in Python (Keras).",
        "Supervised by Tankut Can and Kamesh Krishnamurthy.",
      ],

      logo: "princeton.jpeg",
    },
    {
      name: "Laboratory Kastler Brossel",
      job: "Research Internship in statistics applied to quantum physics",
      date: "feb. 2019 - jul. 2020 (4 months)",
      description: [
        " Research team: Quantum fluctuations and special relativity",
        "Measure of the gravitationnal mass of anti-hydrogen atoms (GBAR Project)",
        "Programming statistical models in Python.",
        "Advisor : Serge Reynaud",
      ],

      logo: "lkb.jpeg",
    },
  ];

  let formations = [
    {
      name: "PhD in Statistics at Sorbonne Université",
      date: "sept. 2022 - dec. 2025",
      description: "",
      logo: "su.jpeg",
    },
    {
      name: "Mines Paris graduate degree (Double degree)",
      date: "sept. 2021 - sept. 2022",
      description: "",
      logo: "mines.png",
    },
    {
      name: "ENS Ulm (PSL University) graduate degree in Mathematics",
      date: "sept. 2018 - sept. 2022",
      description: "",
      logo: "ulm.jpg",
    },
    {
      name: "ENS Ulm (PSL University) graduate degree in Physics",
      date: "sept. 2018 - sept. 2022",
      description: "",
      logo: "ulm.jpg",
    },
    {
      name: "Sorbonne Université Master's Degree in Probability",
      date: "sept. 2020 - sept. 2021",
      description: "",
      logo: "su.jpeg",
    },
    {
      name: "Prep school (MPSI-MP*) at Lycée Louis-Le-Grand",
      date: "sept. 2016 - sept. 2018",
      description: "",
      logo: "llg.jpg",
    },
  ];

  let certificates = [
    {
      name: "DELE C1 in Spanish",
      date: "aug. 2022",
      description: "Lifelong certificate of advanced proficiency in Spanish.",
      logo: "dele.jpeg",
    },
    {
      name: "Cambridge Advanced Exam, C2 in English",
      date: "aug. 2022",
      description: "The most advanced lifelong certificate in English.",
      logo: "cae.jpeg",
    },
  ];

  let experiences_timelines = experiences.map((experience) =>
    experience.steps ? (
      [
        <Timeline.Item
          bulletSize={w > 480 ? 70 : 60}
          radius="md"
          bullet={<Logo src={experience.logo} />}
          title={<CustomTitle text={experience.name} />}
        >
          <ItemText
            title={experience.job}
            date={experience.date}
            description={experience.description}
            spoiler={true}
          />
        </Timeline.Item>,

        experience.steps.map((step) => (
          <Timeline.Item lineVariant="dotted" bulletSize={25}>
            <ItemText
              title={step.job}
              date={step.date}
              description={step.description}
              spoiler={true}
            />
          </Timeline.Item>
        )),
      ]
    ) : (
      <Timeline.Item
        lineVariant="dotted"
        bulletSize={w > 480 ? 70 : 60}
        radius="md"
        bullet={<Logo src={experience.logo} />}
        title={<CustomTitle text={experience.name} />}
      >
        <ItemText
          title={experience.job}
          date={experience.date}
          description={experience.description}
          spoiler={true}
        />
      </Timeline.Item>
    )
  );

  let formation_timelines = formations.map((formation) => (
    <Timeline.Item
      bullet={<Logo src={formation.logo} />}
      bulletSize={w > 480 ? 70 : 60}
      title={<CustomTitle text={formation.name} />}
    >
      <ItemText
        title={formation.job}
        date={formation.date}
        description={formation.description}
      />
    </Timeline.Item>
  ));

  let certificates_timelines = certificates.map((certificate) => (
    <Timeline.Item
      bullet={<Logo src={certificate.logo} />}
      bulletSize={w > 480 ? 70 : 60}
      title={<CustomTitle text={certificate.name} />}
    >
      <ItemText
        title={certificate.job}
        date={certificate.date}
        description={certificate.description}
      />
    </Timeline.Item>
  ));

  function Logo(props) {
    return (
      <div className="resume-img-container" style={{}}>
        <img
          src={props.src}
          style={{
            width: `${w > 480 ? "4.5em" : "4em"}`,
            height: `${w > 480 ? "4.5em" : "4em"}`,
          }}
          className="resume-img"
        />
      </div>
    );
  }

  return (
    <div className="resume">
      <Title
        style={{ paddingBottom: "0.5em" }}
        order={1}
        className="section-container"
      >
        Work experience
      </Title>
      <Timeline
        color="gray"
        active={4}
        lineWidth={4}
        bulletSize={w > 480 ? 70 : 60}
      >
        {experiences_timelines}
      </Timeline>
      <Title
        style={{ paddingTop: "0.5em", paddingBottom: "0.5em" }}
        order={1}
        className="section-container"
      >
        Education
      </Title>
      <Timeline
        color="gray"
        active={4}
        lineWidth={4}
        bulletSize={w > 480 ? 70 : 60}
      >
        {formation_timelines}
      </Timeline>
      <div style={{}}></div>
      <Title
        style={{ paddingTop: "0.5em", paddingBottom: "0.5em" }}
        order={1}
        className="section-container"
      >
        Certificates
      </Title>
      <Timeline
        color="gray"
        active={4}
        lineWidth={4}
        bulletSize={w > 480 ? 70 : 60}
      >
        {certificates_timelines}
      </Timeline>
      {/*<div className="skills-container">
        <div className="skills-title">Skills</div>

        <div class="skills">
          {skills.map((skill) => (
            <Skill
              name={skill.name}
              logo={skill.logo}
              id={skills.indexOf(skill)}
            />
          ))}
        </div>
          </div>*/}
    </div>
  );
}

function ItemText(props) {
  return (
    <div
      style={{
        paddingLeft: "2em",
        paddingBottom: "1em",
        boxSizing: "border-box",
      }}
    >
      <Title order={5}>{props.title}</Title>
      <Text color="dimmed" size="sm">
        {props.date}
      </Text>
      <Spoiler
        maxHeight={props.spoiler && w < 480 ? 0 : 60}
        showLabel="Show more"
        hideLabel="Hide"
      >
        {Array.isArray(props.description) ? (
          <div className="descriptions">
            {props.description.map((item) => (
              <div>{item}</div>
            ))}
          </div>
        ) : (
          <Text>{props.description}</Text>
        )}
      </Spoiler>
    </div>
  );
}

function CustomTitle(props) {
  return (
    <div className="title-container">
      <Text fw={700}>{props.text}</Text>
    </div>
  );
}

export default Resume;
