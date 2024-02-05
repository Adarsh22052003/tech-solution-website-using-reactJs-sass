import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import Contact from "./component/Contact";
import Service from './component/Service';

import "./Styles/App.scss";
import "./Styles/home.scss";
import "./Styles/mediaquery.scss";

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        < Route path='/' element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/' element={<Contact />}/>
      </Routes>
      <Routes>
        <Route path='/' element={<Service />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;