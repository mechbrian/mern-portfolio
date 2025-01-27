// import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './src/about';
import Education from './src/education';
import Contact from './src/contact';
import Project from './src/project';
import Service from './src/service';
import Layout from './components/Layout';

// Routes is used as a container for defining multiple Route components
// The Route component is used to define a route and its corresponding component
const MainRouter = () => {
    return(<div>
        <Layout/>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
            <Route path="/service" element={<Service />} />
        </Routes>
    </div>)
}
// The MainRouter component is exported to be used in the App component
// default keyword is used to export a single value
export default MainRouter;