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

const ALL_VIDEOS = [menuVideo, main1, main2, main3];

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
  const [loadedCount, setLoadedCount] = useState(0);
  const [isFullyLoaded, setIsFullyLoaded] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (loadedCount >= ALL_VIDEOS.length) {
      setIsFullyLoaded(true);
    }
  }, [loadedCount]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsFullyLoaded(true);
    }, 8000); 
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (hasStarted) {
      startBGM();
    }
  }, [hasStarted]);

  useEffect(() => {
    if (isFullyLoaded && !hasStarted) {
      const handleStartKey = (e) => {
        if (e.key === 'Enter' || e.key === ' ') { 
          setHasStarted(true);
        }
      };
      window.addEventListener('keydown', handleStartKey);
      return () => window.removeEventListener('keydown', handleStartKey);
    }
  }, [isFullyLoaded, hasStarted]);


  if (!isFullyLoaded) {
    return (
      <div style={{
        position: 'fixed', inset: 0, background: '#04060f', zIndex: 99999,
        display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', padding: '40px'
      }}>
        <div style={{
          fontFamily: 'Anton, sans-serif', fontSize: '32px', color: '#fff',
          letterSpacing: '4px', animation: 'p3-loading-pulse 1s infinite'
        }}>
          NOW LOADING... {Math.round((loadedCount / ALL_VIDEOS.length) * 100)}%
        </div>

        <style>{`
          @keyframes p3-loading-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        `}</style>

        {ALL_VIDEOS.map((src, index) => (
          <video
            key={index}
            src={src}
            preload="auto"
            muted
            playsInline
            onCanPlayThrough={() => setLoadedCount((prev) => prev + 1)}
            style={{ display: 'none' }}
          />
        ))}
      </div>
    );
  }

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
              font-size: 32px; 
              letter-spacing: 4px;
            }
          }

          @keyframes p3-press-start-blink {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.2; transform: scale(0.98); }
          }
        `}</style>
      </div>
    );
  }

  return <AnimatedRoutes />;
}