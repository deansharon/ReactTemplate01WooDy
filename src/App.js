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
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <div className="App">
      <Topbar />
      <Header />
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/featured' element={<Featured />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/consultation' element={<Consultation />} />
        <Route exact path='/Projects' element={<Projects />} />
        <Route exact path='/information' element={<Information />} />
        <Route exact path='/members' element={<Members />} />
        <Route exact path='/Testimonial' element={<Testimonial />} />
        <Route exact path='/footer' element={<Footer />} />
      </Routes>
      {/* 
      <Main />
      <Featured />
      <About />
      <Services />
      <Consultation />
      <Projects />
      <Information />
      <Members />
      <Testimonial />
      <Footer /> */}
    </div>
    </>
  );
}

export default App;
