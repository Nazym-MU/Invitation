import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './App.css';
import Invitation from './components/Invitation';
import LocationInfo from './components/LocationInfo';
import ProgramDetails from './components/ProgramDetails';
import RSVPForm from './components/RSVPForm';
import CountdownTimer from './components/CountdownTimer';
import ContactLinks from './components/ContactLinks';
import Footer from './components/Footer';

function App() {
    return (
      <div>
        <Parallax pages={5} style={{ top: '0', left: '0' }}>
            <ParallaxLayer offset={0} speed={1} factor={7.5} 
                style={{ backgroundImage: `url('/images/background.png')`, backgroundSize: 'cover' }}>
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={0.5}>
                <div className="invitation-section">
                    <div style={{ width: "50%" }}>
                        <img 
                            src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzMxZzkyc2tobnEzd2E2enh0bng1M2RnYTNneXMxeHY3bWdncTVwNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MDa6dnB0CABmv9N1X4/giphy-downsized-large.gif" 
                            alt="Animated GIF"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                    <div className="invitation-text">
                        <Invitation />
                    </div>
                </div>
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={1}>
                <div className="App">
                    <LocationInfo />
                </div>
            </ParallaxLayer>

            <ParallaxLayer offset={2} speed={0.5}> 
                <div className="App">
                    <ProgramDetails />
                </div>
            </ParallaxLayer>

            <ParallaxLayer offset={3} speed={0.5}>
                <div className="App">
                    <RSVPForm />
                </div>  
            </ParallaxLayer>

            <ParallaxLayer offset={4} speed={0.5} style={{ backgroundColor: 'black' }}>
                <div className="App">
                  <CountdownTimer birthday="2024-06-20T00:00:00" />
                  <ContactLinks />
                  <Footer />
                </div>
            </ParallaxLayer>
        </Parallax>
        </div>
    );
}

export default App;
