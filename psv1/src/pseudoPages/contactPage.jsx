import { useEffect, useState } from "react";
import "../css/contactPage.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../scripts/firebaseAppInit";
import LoadingSpinner from "../components/loadingSpinner";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [validity, setValidity] = useState(true);
  const [sentMessage, setSentMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  const sendMessage = async () => {
    if (!name || !email || !message) {
      handleInvalidInputs();
    } else {
      setValidity(true);
      const messageCollection = collection(db, "Messages");
      const data = {
        from: name,
        email: email,
        message: message,
        received: new Date(Date.now()),
      };
      await addDoc(messageCollection, data);
      setSentMessage(true);
    }
  };

  const handleInvalidInputs = () => {
    setValidity(false);
  };

  return (
    <div>
      {isLoading ? (
        <div className="spinContainer">
          <LoadingSpinner></LoadingSpinner>
        </div>
      ) : (
        <main className="contactPageContainer">
          {sentMessage ? (
            <div className="contactForm">
              <h1 className="contactFormTitle">Thank You For Reaching Out!</h1>
              <p>I will get back to you with an email soon</p>
            </div>
          ) : (
            <form className="contactForm">
              <h1 className="contactFormTitle">Let's Talk</h1>
              <input
                type="text"
                name="name"
                className="formInput"
                placeholder="Your Name"
                autoComplete="off"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="email"
                name="email"
                className="formInput"
                placeholder="Your Email"
                autoComplete="off"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="text"
                name="message"
                className="formInput"
                placeholder="Your Message"
                autoComplete="off"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
              <button
                className="sendButton"
                type="button"
                onClick={sendMessage}
              >
                Send Message
              </button>
              <div className="valid">
                {validity ? (
                  <div></div>
                ) : (
                  <div>Please Ensure All Inputs Are Filled Out</div>
                )}
              </div>
            </form>
          )}
        </main>
      )}
    </div>
  );
}
