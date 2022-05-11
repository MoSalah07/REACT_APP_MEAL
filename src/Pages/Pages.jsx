import React from 'react';
import Home from './Home';
import {Route, Routes, useLocation} from 'react-router-dom'
import Cuisine from './Cuisine';
import {AnimatePresence} from 'framer-motion'
import Searched from './Searched';
import Recipes from './Recipes';

function Pages() {
  const location = useLocation()
  return (
      <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/cuisine/:type' element={<Cuisine />} />
        <Route path='/searched/:search' element={<Searched />} />
        <Route path='/recipes/:name' element={<Recipes />}/>
      </Routes>
    </AnimatePresence>
  )
}

export default Pages