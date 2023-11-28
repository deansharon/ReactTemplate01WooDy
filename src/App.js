import './App.css';
import Header from './components/Header/header';
import Topbar from './components/Topbar/topbar';
import Main from './components/Main/main';
import Featured from './components/Featured/featured';
import About from './components/About/about';
import Services from './components/Services/services';
import Consultation from './components/Consultation/consultation';
import Projects from './components/Projects/projects';
import Information from './components/Information/information';
import Members from './components/Members/members';
import Testimonial from './components/Testimonial/testimonial';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Header />
      <Main />
      <Featured />
      <About />
      <Services />
      <Consultation />
      <Projects />
      <Information />
      <Members />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
