import { useState, useEffect } from 'react' 
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { startBGM } from './soundManager' 

import menuVideo from './assets/Mainn.mp4'
import main1 from './assets/main1.mp4'
import main2 from './assets/main2.mp4'
import main3 from './assets/main3.mp4'
import P3Menu from './P3Menu'
import VideoPage from './VideoPage'
import ResumePage from './ResumePage'
import PageTransition from './PageTransition'
import Socials from './Socials'
import AboutMe from './AboutMe'
import './App.css'


function MenuScreen() {
  const navigate = useNavigate()
  return (
    <div id="menu-screen">
      <video src={menuVideo} autoPlay loop muted playsInline />
      <P3Menu onNavigate={(page) => navigate(`/${page}`)} />
    </div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition><MenuScreen /></PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition variant="about"><AboutMe /></PageTransition>
        } />
        <Route path="/resume" element={
          <PageTransition><ResumePage src={main2} /></PageTransition>
        } />
        <Route path="/socials" element={
          <PageTransition variant="socials"><Socials /></PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  const [hasStarted, setHasStarted] = useState(false);
  
  useEffect(() => {
    if (hasStarted) {
      startBGM();
    }
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) {
      const handleStartKey = (e) => {
        if (e.key === 'Enter' || e.key === ' ') { 
          setHasStarted(true);
        }
      };
      
      window.addEventListener('keydown', handleStartKey);
      
      return () => {
        window.removeEventListener('keydown', handleStartKey);
      };
    }
  }, [hasStarted]);

  if (!hasStarted) {
    return (
<div 
        id="menu-screen"
        style={{ cursor: 'pointer' }}
        onClick={() => setHasStarted(true)}
      >
        <video src={menuVideo} autoPlay loop muted playsInline />
        
  <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(4, 6, 15, 0.3)',
          zIndex: 9999
        }}>
          <div className="p3-start-text">
            CLICK TO START
          </div>
        </div>

        <style>{`
          /* Estilo padrão (Computador) */
          .p3-start-text {
            font-family: 'Anton', sans-serif;
            font-size: 54px;
            color: #ffffff;
            letter-spacing: 6px;
            text-shadow: 3px 3px 0px #c4001a;
            animation: p3-press-start-blink 1.4s infinite;
            text-align: center;
          }

          /* Estilo para Celular (Telas menores que 768px) */
          @media (max-width: 768px) {
            .p3-start-text {
              font-size: 32px; /* Deixa o texto bem menor */
              letter-spacing: 4px;
            }
          }

          @keyframes p3-press-start-blink {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.2; transform: scale(0.98); }
          }
        `}</style>
      </div>
  )};

  return <AnimatedRoutes />
}