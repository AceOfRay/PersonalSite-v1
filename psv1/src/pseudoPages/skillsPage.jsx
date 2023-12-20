import "../css/skillsPage.css";

export default function SkillsPage() {
  return (
    <main className="styleContainer">
      <h1 className="skillsTitle">
        Here You'll Find Skills I Have Developed In My 2 Years of Programming
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
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a>
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
            <a href="https://www.w3schools.com/whatis/whatis_sql.asp">SQL</a>
          </li>
        </ul>
        <h2 className="skillBreakdown">The Breakdown</h2>
        <p className="skillDescription">
          I learned Python as my first Language at Cal Poly. All of my
          programming classes have been instructed in Python. I picked up
          Javascript when learning how to create dynamic websites. Many of my
          projects are built with JS and it's my favorite language so far. HTML
          and CSS came as a pair when I first dove into the basics of static web
          pages. I have plenty of experience writing in these two languages.
          JSON bridges the gap from language to language and it's very easy to
          understand / use. I use c++ in many of the robotics builds I have
          made. It's a super powerful compiled language that is tailored to meet
          the needs for many complex robotics builds. SQL was necessary to learn
          when I built my Python powered Database Retrieval Application. I used
          it to query a mySQL database that held demographic data. All in all
          Python go tme into the tech world, but JS quickly became my native
          language and what I am most confident in.
        </p>
      </div>
    </main>
  );
}
