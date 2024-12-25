import Header from "./Component/Header";
import HomePage from "./Pages/HomePage";
import AboutMe from "./Pages/AboutMe";
import ProgrammingLanguage from "./Pages/ProgrammingLanguage";
import Projects from "./Pages/Projects";
import Services from "./Pages/Services";
import Testimonials from "./Pages/Testimonials";
import ContactMe from "./Pages/ContactMe";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <HomePage></HomePage>
      <AboutMe></AboutMe>
      <ProgrammingLanguage></ProgrammingLanguage>
      <Projects></Projects>
      <Services></Services>
      <Testimonials></Testimonials>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </>
  );
}

export default App;
