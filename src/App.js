import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js'
import Content from './components/Content.js'
import Articles from './components/Articles.js'
import Comments from './components/Comments.js'
import Footer from './components/Footer.js'


function App() {
  return (
    <div>
      <Navbar/>
      <div class="container">
        <h1 class="section-title">Recent Photos (6)</h1>
        <ul class="cards">
          <Content/>
          <Content/>
          <Content/>
          <Content/>
          <Content/>
          <Content/>
        </ul>
        <h1 class="section-title">Recent Articles (3)</h1>
        <ul class="cards">
          <Articles
          title="Pop-up gochujang artisan activated charcoal bushwick irony raclette"/>
          <Articles/>
          <Articles/>
        </ul>
        <h1 class="section-title">Recent Comments (5)</h1>
        <ul class="cards">
          <Comments/>
          <Comments/>
          <Comments/>
          <Comments/>
          <Comments/>
        </ul>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
