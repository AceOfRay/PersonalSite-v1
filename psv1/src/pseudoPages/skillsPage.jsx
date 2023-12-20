import "../css/skillsPage.css";
import ProjectBlock from "../components/projectBlock";
import { useEffect, useState } from "react";
import { query, collection, getDocs, orderBy } from "firebase/firestore";
import { db } from "../scripts/firebaseAppInit";
import LoadingSpinner from "../components/loadingSpinner";

export default function SkillsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const docs = await getDocs(
        query(collection(db, "Skills"), orderBy("Order"))
      );
      const languageArray = [];
      docs.forEach((doc) => {
        const data = doc.data();
        languageArray.push(
          <ProjectBlock
            key={doc.id}
            title={data.title}
            paragraph={data.paragraph}
          />
        );
      });
      setLanguage(languageArray);

      setTimeout(() => {
        setIsLoading(false);
      }, 200);
    };
    fetchData();
  }, []);

  return (
    <main className="styleContainer">
      {isLoading ? (
        <div className="spinContainer">
          <LoadingSpinner />
        </div>
        
      ) : (
        <div className="styleContainer">
          <h1 className="skillsTitle">
            Skills I Have Developed In My 2 Years of
            Programming
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
            <div className="softwareContainer">{language}</div>
          </div>
        </div>
      )}
    </main>
  );
}
