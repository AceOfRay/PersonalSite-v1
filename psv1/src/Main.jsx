import ContactPage from "./pseudoPages/contactPage";
import HomePage from "./pseudoPages/homePage";
import ProjectPage from "./pseudoPages/projectPage";

export default function MainPage({ page }) {
  switch (page) {
    case "Home":
      return <HomePage></HomePage>;
    case "Projects":
      return <ProjectPage></ProjectPage>;
    case "Contacts":
      return <ContactPage></ContactPage>;
    default:
      return <HomePage></HomePage>;
  }
}
