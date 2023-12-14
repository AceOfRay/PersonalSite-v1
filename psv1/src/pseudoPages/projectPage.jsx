import { useEffect, useState } from "react";
import { db } from "../scripts/firebaseAppInit";
import { query, collection, getDocs, orderBy } from "firebase/firestore";
import ProjectBlock from "../components/projectBlock";
import "../css/projectPage.css";

export default function ProjectPage() {
  //states
  const [hardware, setHardware] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [software, setSoftware] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //db queries
      const hardwareDocs = await getDocs(
        query(collection(db, "Hardware"), orderBy("Order"))
      );
      const clubDocs = await getDocs(
        query(collection(db, "Portfolio"), orderBy("Order"))
      );
      const softwareDocs = await getDocs(
        query(collection(db, "Software"), orderBy("Order"))
      );

      // component creation

      // hardware render
      const hardwareArray = [];
      hardwareDocs.forEach((doc) => {
        const data = doc.data();
        hardwareArray.push(
          <ProjectBlock
            key={doc.id}
            title={data.title}
            paragraph={data.paragraph}
          />
        );
      });
      setHardware(hardwareArray);

      // club render
      const clubsArray = [];
      clubDocs.forEach((doc) => {
        const data = doc.data();
        clubsArray.push(
          <ProjectBlock
            key={doc.id}
            title={data.title}
            paragraph={data.paragraph}
          />
        );
      });

      setClubs(clubsArray);

      //software render
      const softwareArray = [];
      softwareDocs.forEach((doc) => {
        const data = doc.data();
        softwareArray.push(
          <ProjectBlock
            key={doc.id}
            title={data.title}
            paragraph={data.paragraph}
          />
        );
      });

      setSoftware(softwareArray);
    };
    fetchData();
  }, []);

  return (
    <main className="mainContainer">
      <div className="softwareSection">
        <h1>Software</h1>
        <div className="softwareContainer">{software}</div>
      </div>
      <div className="clubSection">
        <h1>Clubs</h1>
        <div className="clubContainer">{clubs}</div>
      </div>
      <div className="hardwareSection">
        <h1>Hardware</h1>
        <div className="hardwareContainer">{hardware}</div>
      </div>
    </main>
  );
}
