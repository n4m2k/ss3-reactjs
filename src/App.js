import { Routes, Route } from 'react-router-dom';
import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import About from './About'
import Contact from './Contact'
import MainContent from './MainContent'
import Post from './Post'
const App = () => {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<MainContent />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/post" element={<Post />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App