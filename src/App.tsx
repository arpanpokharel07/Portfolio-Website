import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutMe from "./Pages/AboutMe";
import ProgrammingLanguage from "./Pages/ProgrammingLanguage";
import Projects from "./Pages/Projects";
import Services from "./Pages/Services";
import Testimonials from "./Pages/Testimonials";
import ContactMe from "./Pages/ContactMe";
import Experience from "./Pages/Experience";
import Education from "./Pages/Education";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage></HomePage>}></Route>
        <Route path="/about-me" element={<AboutMe></AboutMe>}></Route>
        <Route
          path="/programming-languages"
          element={<ProgrammingLanguage></ProgrammingLanguage>}
        ></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
        <Route
          path="/experience"
          element={
            <>
              <Experience></Experience>
              <Education></Education>
            </>
          }
        ></Route>
        <Route
          path="/services"
          element={
            <>
              <Services></Services>
              <Testimonials></Testimonials>
            </>
          }
        ></Route>
        <Route path="/contact-me" element={<ContactMe></ContactMe>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
