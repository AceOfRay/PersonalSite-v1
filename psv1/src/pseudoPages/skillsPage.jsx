import "../css/skillsPage.css";
import ProjectBlock from "../components/projectBlock";
import { useEffect, useState } from "react";
import { query, collection, getDocs, orderBy } from "firebase/firestore";
import { db } from "../scripts/firebaseAppInit";
import LoadingSpinner from "../components/loadingSpinner";

export default function SkillsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState([]);
  const [devTechs, setDevTechs] = useState([]);
  const [api, setAPI] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const docs = await getDocs(
        query(collection(db, "Skills"), orderBy("Order"))
      );

      docs.forEach((doc) => {
        const data = doc.data();
        switch (doc.id) {
          case "Languages":
            setLanguage([
              <ProjectBlock
                key={doc.id}
                title={data.title}
                paragraph={data.paragraph}
              />,
            ]);
            break;
          case "Dev Techs":
            setDevTechs([
              <ProjectBlock
                key={doc.id}
                title={data.title}
                paragraph={data.paragraph}
              />,
            ]);
            break;
          case "APIUsage":
            setAPI([
              <ProjectBlock
                key={doc.id}
                title={data.title}
                paragraph={data.paragraph}
              />,
            ]);
            break;
          default: {
            setDevTechs([null]);
            setLanguage([null]);
            setAPI([null]);
          }
        }
      });

      setTimeout(() => {
        setIsLoading(false);
      }, 200);
    };
    fetchData();
  }, []);

  return (
    <main>
      {isLoading ? (
        <div className="spinContainer">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="styleContainer">
          <h1 className="skillsTitle">
            Skills I Have Developed In My 2 Years of Programming
          </h1>
          <div className="skillSection" id="languageSection">
            <h2 className="skillTitle" id="languageTitle">
              Known Programming Languages
            </h2>
            <ul className="skillList" id="languageList">
              <li>
                <a href="https://www.python.org/">Python</a>
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/javascript">
                  Javascript
                </a>
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                  HTML
                </a>
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                  CSS
                </a>
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON">
                  JSON
                </a>
              </li>
              <li>
                <a href="https://www.w3schools.com/cpp/">C++</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/whatis/whatis_sql.asp">
                  SQL
                </a>
              </li>
            </ul>
            <div className="languageContainer">{language}</div>
          </div>

          <div className="skillSection" id="techStack">
            <h2 className="skillTitle">Developer Technologies Used</h2>
            <ul className="skillList">
              <li>
                <a href="https://reactjs.org/">ReactJS</a>
              </li>
              <li>
                <a href="https://firebase.google.com/">Firebase</a>
              </li>
              <li>
                <a href="https://nextjs.org/">NextJS</a>
              </li>
              <li>
                <a href="https://www.mongodb.com/">MongoDB</a>
              </li>
              <li>
                <a href="https://expressjs.com/">ExpressJS</a>
              </li>
              <li>
                <a href="https://cloud.google.com/apis">Google Cloud API's</a>
              </li>
            </ul>
            <ul className="skillList">
              <li>
                <a href="https://console.cloud.google.com/">
                  Google Cloud Console
                </a>
              </li>
              <li>
                <a href="https://www.mysql.com/">MySQL</a>
              </li>
              <li>
                <a href="https://www.arduino.cc/">Arduino</a>
              </li>
              <li>
                <a href="https://platformio.org/">PlatformIO</a>
              </li>
              <li>
                <a href="https://www.xilinx.com/products/design-tools/vivado.html">
                  Xilinx Vivado
                </a>
              </li>
              <li>
                <a href="https://svelte.dev/">Svelte</a>
              </li>
            </ul>
            <div className="languageContainer">{devTechs}</div>
          </div>

          <h1 className="skillsTitle">API Use</h1>
          <div className="skillSection" id="APIsection">
            <ul className="skillList" id="APIList">
              <li>
                <a href="https://cloud.google.com/vision/?hl=en">
                  Google Cloud Vision
                </a>
              </li>
              <li>
                <a href="https://stripe.com/docs">Stripe</a>
              </li>
              <li>
                <a href="https://firebase.google.com/">Firebase</a>
              </li>
              <li>
                <a href="https://developers.google.com/custom-search/">
                  Google Search
                </a>
              </li>
            </ul>

            <ul className="skillList">
              <li>
                <a href="https://scraptik.com/">ScrapTik</a>
              </li>
              <li>
                <a href="https://developers.tiktok.com/">Tik Tok</a>
              </li>
              <li>
                <a href="https://developers.facebook.com/docs/instagram-api/">
                  Instagram Graph
                </a>
              </li>
            </ul>
            <div className="languageContainer">{api}</div>
          </div>
        </div>
      )}
    </main>
  );
}
