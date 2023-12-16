import React, { useState, useEffect } from "react";
import NoteCard from "../components/noteCard";
import "../css/homepage.css";
import Modal from "../components/modal";
import LoadingSpinner from "../components/loadingSpinner";
import { query, collection, getDocs, orderBy } from "firebase/firestore";
import { db } from "../scripts/firebaseAppInit";

const HomePage = () => {
  const [notecards, setNoteCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalParagraph, setModalParagraph] = useState('');

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      const homepageDocs = await getDocs(
        query(collection(db, "Components"), orderBy("Order"))
      );
      const homePageArray = [];

      homepageDocs.forEach((doc) => {
        const data = doc.data();
        homePageArray.push(
          <NoteCard
            key={doc.id}
            title={data.title}
            paragraph={data.sentence}
            onClick={() => { openModal(data.title, data.paragraph) }}
          />
        );
      });
      setNoteCards(homePageArray);
    };
    fetchData();

    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  const openModal = (title, paragraph) => {
    setModalTitle(title);
    setModalParagraph(paragraph);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main>
      {isLoading ? (
        <div className="spinContainer">
          <LoadingSpinner></LoadingSpinner>
        </div>
      ) : (
        <div>
          <div className="headerContainer">
            <div className="outerAbout">
              <img src="me.jpg" alt="A picture of Ray" className="ray" />
              <div className="aboutBar">
                <h1 className="helloTitle">Hi, I'm Ray Valenzuela</h1>
                <h3 className="myDescription">
                  Computer Engineer - Web Developer - Cal Poly
                </h3>
                <p className="welcome">Welcome To My Website</p>
                <p className="introPara">
                  Here, you'll find information about my professional and
                  personal life
                </p>
              </div>
            </div>
          </div>
          <div className="noteCardContainer">{notecards}</div>
          <Modal title={modalTitle} paragraph={modalParagraph} isOpen={isModalOpen} closeModal={closeModal}></Modal>
        </div>
      )}
    </main>
  );
};

export default HomePage;
