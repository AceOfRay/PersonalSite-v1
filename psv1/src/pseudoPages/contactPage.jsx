import { useEffect, useState, useRef } from "react";
import "../css/contactPage.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../scripts/firebaseAppInit";
import LoadingSpinner from "../components/loadingSpinner";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [validity, setValidity] = useState(true);
  const [sentMessage, setSentMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const contactForm = useRef();

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
      notifyMe();
      setSentMessage(true);
    }
  };

  const handleInvalidInputs = () => {
    setValidity(false);
  };

  const notifyMe = () => {
    const template = "template_4gb3bsp";
    const service = "AceOfRay";

    emailjs
      .sendForm(service, template, contactForm.current, "SXlTSGImhk7zX9YIq")
      .then(() => {
        console.log("Message Sent");
      })
      .catch((error) => {
        console.log("Message Failed", error);
      });
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
            <form ref={contactForm} className="contactForm">
              <h1 className="contactFormTitle">Let's Talk</h1>
              <input
                type="text"
                name="senderName"
                className="formInput"
                placeholder="Your Name"
                autoComplete="off"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="email"
                name="senderEmail"
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
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
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
