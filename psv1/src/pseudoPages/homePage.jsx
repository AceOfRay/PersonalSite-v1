import React, { useState, useEffect } from "react";
import NoteCard from "../components/noteCard";
import "../css/homepage.css";
import Modal from "../components/modal";
import LoadingSpinner from "../components/loadingSpinner";

const HomePage = () => {
  const sectionArray = [
    {
      title: "My Story",
      sentence:
        "My real name is Ramon Valenzuela, but everyone's been calling me Ray since...",
      paragraph:
        "My real name is Ramon Valenzuela, but everyone's been calling me Ray since I was a kid. I'm in my second year studying Computer Engineering at Cal Poly, and I'm pretty active on campus. I'm fascinated in things like Full Stack Web Development and Embedded Systems Engineering. Outside of classes, I love playing baseball and volleyball—it's a good way to unwind. I'm also part of some student clubs at Cal Poly, where I hang out and work with other students who share similar interests. Besides all the school and activities, I make sure to spend time with my friends and family. That's what matters the most to me.",
    },
    {
      title: "My Family",
      sentence:
        "Growing up as the youngest in my family, it felt like being part of a...",
      paragraph:
        "Growing up as the youngest in my family, it felt like being part of a modern-day Brady Bunch. I have four half-sisters and a half-brother, which means I don't have any full-blood siblings. As the baby of the bunch, I wear the title of uncle proudly, as I'm the uncle to seven adorable kids who belong to my half-sisters and half-brother. Navigating the dynamics of a blended family has shaped my perspective on relationships, and being the youngest has given me a unique role that I cherish. The laughter, the shared memories, and the love that permeate our family gatherings are a testament to the bonds that go beyond blood, making my experience as the youngest in this diverse family truly special.",
    },
    {
      title: "Habits",
      sentence:
        "In my free time, I keep it simple and laid-back. Hanging out with...",
      paragraph:
        "In my free time, I keep it simple and laid-back. Hanging out with friends and family is a big part of my routine, just enjoying good company. I'm into web development, always trying to pick up new skills. Video games are a fun way to unwind, especially when I'm playing with friends. Sports-wise, I like baseball and volleyball to stay active. Italian food is my go-to when I want something tasty. Overall, I'm just about making the most of whatever comes my way and keeping things easygoing.",
    },
    {
      title: "Hometown",
      sentence:
        "Salinas, located in the heart of California's fertile Salinas...",
      paragraph:
        "Salinas, located in the heart of California's fertile Salinas Valley, is a vibrant town known for its rich agricultural heritage. Often referred to as the 'Salad Bowl of the World,' the region produces a significant portion of the nation's lettuce, broccoli, and strawberries. The town is surrounded by picturesque farmland and enjoys a mild climate, making it an ideal environment for agriculture. Salinas gained literary fame as the birthplace and setting for many of John Steinbeck's novels, including 'The Grapes of Wrath' and 'East of Eden.' Beyond agriculture and literature, Salinas offers a diverse community, with a mix of cultural events, outdoor activities, and a welcoming atmosphere that reflects its Californian charm.",
    },
  ];

  const [notecards, setNoteCards] = useState([]);
  const [modal, setModal] = useState(false);
  const [index, setCardIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    setIsLoading(true)
    const notesArray = sectionArray.map((note, index) => (
      <NoteCard
        key={index}
        title={note.title}
        paragraph={note.sentence}
        onClick={() => {
          setCardIndex(index);
          setModal(!modal);
        }} // why does this line not get run on click
      />
    ));
    setNoteCards(notesArray);
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);

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
          <Modal
            title={sectionArray[index].title}
            paragraph={sectionArray[index].paragraph}
            isOpen={modal}
            onClose={closeModal}
            className={modal}
          ></Modal>
        </div>
      )}
    </main>
  );
};

export default HomePage;
