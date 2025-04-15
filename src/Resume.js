import { Timeline, Text, Title, Spoiler } from "@mantine/core";

/*import { ReactComponent as Python } from "./assets/python.svg";
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
];*/

var w = document.documentElement.clientWidth || window.innerWidth;

/*function Skill(props) {
  const Icon = icons[props.id];
  return (
    <div className="skill">
      <Icon height={40} width={40} />
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
}*/

function Resume() {
  let experiences = [
    {
      name: "EDF R&D",
      job: "Research scientist in machine learning",
      date: "sept. 2022 - sept. 2025",
      logo: "edf.png",
      description: [
        "Research and development of forecasting algorithms for the French electricity demand.",
        "Intensive use of Python, R, Bash, Git, and Docker to build and deploy machine learning based programs.",
        "Supervised by Yannig Goude and co-supervised by Yann Allioux and Sandra Claudel.",
        "Participation in the Smarter Mobility Data Challenge.",
      ],
      steps: [
        {
          date: "march. 2022 - sept. 2022 (6 months)",
          job: "Research scientist trainee in machine learning",
          description: [],
        },
      ],
    },
    {
      name: "Sorbonne University",
      job: "Teaching assistant",
      date: "2023 - 2024",
      logo: "su.jpeg",
      description: [
        "Teaching assistant for the third-year lecture of Mathematical foundations of Statistics (L3)",
        "given by Assistant Professor Charlotte Dion-Blanc.",
      ],
    },
    {
      name: "French Ministry of Ecological Transition",
      job: "Internship in modelling the electricity sector",
      date: "oct. 2021 - march 2022 (5 months)",
      description: [
        "Modelling the best investment strategy to reduce carbon emissions.",
        "Specialised in the electricity sector.",
        "Linear programming in Python (CBC).",
        "Supervisor: Olivier de Guibert.",
      ],
      logo: "mte.jpeg",
    },
    {
      name: "Sorbonne University",
      job: "Research internship in Probability and Machine Learning",
      date: "april 2021 - aug. 2021 (4 months)",
      description: [
        " Applying stochastic calculus to machine learning.",
        "Supervised by Gérard Biau and co-supervised by Adeline Fermanian and Pierre Marion.",
      ],
      logo: "su.jpeg",
    },
    {
      name: "Princeton University",
      job: "Visiting student-research collaborator in Statistical Physics and Machine Learning",
      date: "june 2020 - dec. 2020 (4 months)",
      description: [
        "Study of machine learning kernels (NNGP and NTK for self-attention).",
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
        " Research team: Quantum fluctuations and special relativity.",
        "Measuring the gravitational mass of antihydrogen atoms (GBAR project).",
        "Programming statistical models in Python.",
        "Supervised by Serge Reynaud.",
      ],

      logo: "lkb.jpeg",
    },
  ];

  let formations = [
    {
      name: "PhD in Mathematics at Sorbonne University",
      date: "2022 - 2025",
      description:
        "Physics-informed machine learning for time series forecasting in atypical periods",
      logo: "su.jpeg",
    },
    {
      name: "BFC at INSEAD",
      date: "2023 - 2024",
      description: "",
      logo: "insead.jpeg",
    },
    {
      name: "Double degree Mines Paris - ENS Ulm",
      date: " 2021 - 2022",
      description: "",
      logo: "mines.png",
    },
    {
      name: "Master's degree in Mathematics at ENS Ulm (PSL University)",
      date: "2018 - 2022",
      description: "Ranked 15th in the ENS Ulm entrance exam.",
      logo: "ulm.jpg",
    },
    {
      name: "Master's degree in Physics at ENS Ulm (PSL University)",
      date: "2018 - 2022",
      description: "",
      logo: "ulm.jpg",
    },
    {
      name: "Master's degree in Probability and Random Models at Sorbonne Université",
      date: "2020 - 2021",
      description: "",
      logo: "su.jpeg",
    },
    {
      name: "Prep school (MPSI-MP*) at Lycée Louis-Le-Grand",
      date: "2016 - 2018",
      description: "",
      logo: "llg.jpg",
    },
  ];

  let certificates = [
    {
      name: "Certificate of Professional Aptitude in Music Theory",
      date: "june 2023",
      description: [
        "Most advanced certificate in music theory from Conservatoire régional de Paris (part of the Diploma of Musical Studies - DEM in French).",
      ],
      logo: "dem.jpeg",
    },
    {
      name: "Diploma de Español como Lengua Extranjera - C1 in Spanish",
      date: "aug. 2022",
      description: [
        "Lifelong certificate of advanced proficiency in Spanish.",
        "Reference 39RXGZSS2IYYIV3IHSJUPMW8H2.",
      ],
      logo: "dele.jpeg",
    },
    {
      name: "Cambridge Advanced Exam - C2 in English",
      date: "aug. 2019",
      description: [
        "The most advanced lifelong certificate in English.",
        "Reference FR585 6026.",
      ],
      logo: "cae.jpeg",
    },
  ];

  let experiences_timelines = experiences.map((experience) =>
    experience.steps ? (
      [
        <Timeline.Item
          bulletSize={w > 480 ? 60 : 50}
          bullet={<Logo src={experience.logo} />}
          title={<CustomTitle text={experience.name} />}
          key={experience.description}
        >
          <ItemText
            title={experience.job}
            date={experience.date}
            description={experience.description}
            spoilerSize={21}
          />
        </Timeline.Item>,

        experience.steps.map((step) => (
          <Timeline.Item lineVariant="dotted" bulletSize={25} key={step.job}>
            <ItemText
              title={step.job}
              date={step.date}
              description={step.description}
              spoilerSize={21}
            />
          </Timeline.Item>
        )),
      ]
    ) : (
      <Timeline.Item
        lineVariant="dotted"
        bulletSize={w > 480 ? 60 : 50}
        bullet={<Logo src={experience.logo} />}
        title={<CustomTitle text={experience.name} />}
        key={experience.name}
      >
        <ItemText
          title={experience.job}
          date={experience.date}
          description={experience.description}
          spoilerSize={21}
        />
      </Timeline.Item>
    )
  );

  let formation_timelines = formations.map((formation) => (
    <Timeline.Item
      lineVariant="dotted"
      bullet={<Logo src={formation.logo} />}
      bulletSize={w > 480 ? 60 : 50}
      title={<CustomTitle text={formation.name} key={formation.name} />}
    >
      <ItemText
        title={formation.job}
        date={formation.date}
        description={formation.description}
        spoilerSize={1000}
      />
    </Timeline.Item>
  ));

  let certificates_timelines = certificates.map((certificate) => (
    <Timeline.Item
      lineVariant="dotted"
      bullet={<Logo src={certificate.logo} />}
      bulletSize={w > 480 ? 60 : 50}
      title={<CustomTitle text={certificate.name} key={certificate.name} />}
    >
      <ItemText
        title={certificate.job}
        date={certificate.date}
        description={certificate.description}
        spoilerSize={21}
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
          aria-label="Company logo"
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
        Professional background
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
        maxHeight={props.spoiler && w < 480 ? 0 : props.spoilerSize}
        showLabel="Show more"
        hideLabel="Hide"
      >
        {Array.isArray(props.description) ? (
          <div className="descriptions">
            {props.description.map((item, index) => (
              <div key={index}>{item}</div>
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
      <Title order={4}>{props.text}</Title>
      {/*<Text fw={700}>{props.text}</Text>*/}
    </div>
  );
}

export default Resume;
