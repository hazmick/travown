import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useLayoutEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Agent from "./pages/Agent";
import Visa from "./pages/Visa";
import Immigration from "./pages/Immigration";
import Tourist from "./pages/1Tourist";
import Visitor from "./pages/2Visitor";
import Business from "./pages/3Business";
import Student from "./pages/4Student";
import Work from "./pages/5Work";
import Express from "./pages/0Immigration";
import Fswv from "./pages/1Immigration";
import Fstp from "./pages/2Immigration";
import Provincial from "./pages/3Immigration";
import Qwsp from "./pages/4Immigration";
import Apply from "./pages/apply";
import Faq from "./pages/Faq";

function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/agent-list" element={<Agent />} />
          <Route exact path="/visa-services" element={<Visa />} />
          <Route exact path="/immigration-services" element={<Immigration />} />
          <Route
            exact
            path="/visa-services/tourist-visa"
            element={<Tourist />}
          />
          <Route
            exact
            path="/visa-services/visitor-visa"
            element={<Visitor />}
          />
          <Route
            exact
            path="/visa-services/business-visa"
            element={<Business />}
          />
          <Route
            exact
            path="/visa-services/student-visa"
            element={<Student />}
          />
          <Route exact path="/visa-services/work-visa" element={<Work />} />
          <Route
            exact
            path="/immigration-services/express-entry-services"
            element={<Express />}
          />
          <Route
            exact
            path="/immigration-services/federal-skilled-worker-visa"
            element={<Fswv />}
          />
          <Route
            exact
            path="/immigration-services/federal-skilled-trades-program"
            element={<Fstp />}
          />
          <Route
            exact
            path="/immigration-services/provincial-nomination-programs"
            element={<Provincial />}
          />
          <Route
            exact
            path="/immigration-services/quebec-selected-skilled-worker-qsw-program"
            element={<Qwsp />}
          />
          <Route exact path="/apply" element={<Apply />} />
          <Route exact path="/frequently-asked-questions" element={<Faq />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
