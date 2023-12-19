import ContactPage from "./pseudoPages/contactPage";
import HomePage from "./pseudoPages/homePage";
import ProjectPage from "./pseudoPages/projectPage";
import SkillsPage from "./pseudoPages/skillsPage";

export default function MainPage({ page }) {
  switch (page) {
    case "Home":
      return <HomePage></HomePage>;
    case "Projects":
      return <ProjectPage></ProjectPage>;
    case "Contacts":
      return <ContactPage></ContactPage>;
    case "Skills":
      return <SkillsPage></SkillsPage>
    default:
      return <HomePage></HomePage>;
  }
}
