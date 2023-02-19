import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Api from './pages/api/Api';
import PhotoDetail from './pages/api/PhotoDetail';
import Game from './pages/game/Game';
import { CssBaseline } from '@mui/material';
import { sidebarItems } from './data/sidebarItems';
import { sxStyles } from './assets/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DropMenu from './components/DropMenu';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [navBtn, setNavBtn] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <BrowserRouter>
      <div>
        <CssBaseline />
        <Navbar
          sxStyles={sxStyles}
          width={width}
          navBtn={navBtn}
          setNavBtn={setNavBtn}
        />
        {navBtn ? (
          <div
            style={{
              position: 'fixed',
              transform: 'translateY(0%)',
              transition: 'all 1s',
              zIndex: 100
            }}
          >
            <DropMenu
              sxStyles={sxStyles}
              setNavBtn={setNavBtn}
              navBtn={navBtn}
            />
          </div>
        ) : (
          <div
            style={{
              position: 'fixed',
              transform: 'translateY(-150%)',
              transition: 'all 1s',
              zIndex: 100
            }}
          >
            <DropMenu
              sxStyles={sxStyles}
              setNavBtn={setNavBtn}
              navBtn={navBtn}
            />
          </div>
        )}
        <Routes>
          <Route
            path='/'
            element={
              <Home
                width={width}
                sidebarItems={sidebarItems}
                sxStyles={sxStyles}
              />
            }
          ></Route>
          <Route path='/api' element={<Api width={width} />}></Route>
          <Route
            path='/api/:id'
            element={<PhotoDetail width={width} />}
          ></Route>

          <Route path='/game' element={<Game wiDth={width} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
