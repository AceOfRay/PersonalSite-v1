import "../css/socials.css";

export default function Socials() {
  return (
    <footer className="footer">
      <ul className="list">
        <li>
          <a href="https://www.instagram.com/calls1gn_ray/">
            <img className="insta" src="InstaLogo.png" alt="Instagram Link" />
          </a>
        </li>
        <li>
          <a href="https://github.com/AceOfRay">
            <img className="github" src="githubLogo.png" alt="GitHub Link" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ramon-valenzuela-ab1511253/">
            <img
              className="linkedin"
              src="LinkedInLogo.png"
              alt="Linked In Link"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}
