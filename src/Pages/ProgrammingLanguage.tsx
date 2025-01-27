import Program from "../Component/Program";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import "./ProgrammingLanguage.css";

const ProgrammingLanguage = () => {
  return (
    <>
      <Header></Header>
      <div className="programming-language" id="programming-language">
        <h1>Programming Skills I Have Experience In</h1>
        <div className="program-list">
          <div className="program-wrap">
            <ul className="program">
              <Program src="\media\logos\html5.png" text="HTML" label="HTML" />
              <Program src="\media\logos\css3.png" text="CSS" label="CSS" />
              <Program
                src="\media\logos\javascript.png"
                text="JavaScript"
                label="JavaScript"
              />
              <Program
                src="\media\logos\jquery.png"
                text="jQuery"
                label="jQuery"
              />
              <Program
                src="\media\logos\tailwindcss.png"
                text="Tailwind CSS"
                label="Tailwind CSS"
              />
              <Program
                src="\media\logos\typescript.png"
                text="TypeScript"
                label="TypeScript"
              />
              <Program
                src="\media\logos\bootstrap.png"
                text="Bootstrap"
                label="Bootstrap"
              />
              <Program
                src="\media\logos\postgresql.png"
                text="PostgreSQL"
                label="PostgreSQL"
              />
              <Program
                src="\media\logos\mysql.png"
                text="MySQL"
                label="MySQL"
              />

              <Program
                src="\media\logos\mongodb.png"
                text="MongoDB"
                label="MongoDB"
              />
              <Program
                src="\media\logos\express.png"
                text="Express.js"
                label="Express.js"
              />
              <Program
                src="\media\logos\react.png"
                text="React"
                label="React"
              />
              <Program
                src="\media\logos\nodejs.png"
                text="Node.js"
                label="Node.js"
              />
              <Program src="\media\logos\git.png" text="Git" label="Git" />

              <Program src="\media\logos\c.png" text="C" label="C" />
              <Program
                src="\media\logos\cplusplus.png"
                text="C++"
                label="C++"
              />
              <Program src="\media\logos\csharp.png" text="C#" label="C#" />
              <Program
                src="\media\logos\dot-net.png"
                text=".NET"
                label=".NET"
              />
              <Program
                src="\media\logos\androidstudio.png"
                text="Android Studio"
                label="Android Studio"
              />
              <Program
                src="\media\logos\azure.png"
                text="Azure"
                label="Azure"
              />
              <Program
                src="\media\logos\github.png"
                text="GitHub"
                label="GitHub"
              />

              <Program src="\media\logos\java.png" text="Java" label="Java" />
              <Program
                src="\media\logos\python.png"
                text="Python"
                label="Python"
              />
              <Program src="\media\logos\php.png" text="PHP" label="PHP" />
              <Program src="\media\logos\jira.png" text="JIRA" label="JIRA" />
            </ul>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ProgrammingLanguage;
