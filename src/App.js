import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AnalysisListener from "./api/AnalysisListener";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <div className="body-wrapper">
        <AnalysisListener />
        <HelmetProvider>
          <Router>
            <Header />
            <Main />
            <Footer />
          </Router>
        </HelmetProvider>
      </div>
    </>
  );
}

export default App;