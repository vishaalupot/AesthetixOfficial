import './App.css';
import Navbar from './components/navbar';
import LandingPage from './components/LandingPage';
import OurProcess from './components/OurProcess';
import Market from './components/Market';
import CounterComponent from './components/Counter';
import Footer from './components/footer';
import { ParallaxProvider } from 'react-scroll-parallax';
import Room from './components/Room';

function App() {
  return (
    <div className="">
      <ParallaxProvider>
        <Navbar />
        <LandingPage />
        <Market />
        <Room />
        <OurProcess />
        <CounterComponent />
        <Footer />

      </ParallaxProvider>
    </div>
  );
}

export default App;
