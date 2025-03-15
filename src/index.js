import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList skilldata={skills} />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img src="./bleh.jpg" className="avatar" alt="Falseparfait" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Falseparfait</h1>
      <p>
        Frontend Developer and Tech lover. When I'm not coding, I like to watch
        some football (COYG btw lol🤣). I'm from NIgeria.
      </p>
    </div>
  );
}

function SkillList({ skilldata }) {
  return (
    <div className="skill-list">
      {skilldata.map((skill) => (
        <Skill Skillobj={skill} />
      ))}
      {/* <Skill skill="React" color="lightblue" />
      <Skill skill="HTML+CSS" color="orange" />
      <Skill skill="JavaScript" color="yellow" />
      <Skill skill="Angular" color="orangered" /> */}
    </div>
  );
}

// 💪🏽 👶🏽 😁

function Skill({ Skillobj }) {
  return (
    <div className="skill" style={{ backgroundColor: Skillobj.color }}>
      <span>{Skillobj.skill}</span>
      <span>
        {Skillobj.level === "advanced"
          ? "💪🏽"
          : Skillobj.level === "beginner"
          ? "👶🏽"
          : Skillobj.level === "intermediate"
          ? "😁"
          : ""}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
