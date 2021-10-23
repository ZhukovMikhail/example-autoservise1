import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/NavigationBar/NavigationBar';
// import Hero from './Components/Hero/Hero';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WhoWeAre from './pages/who-we-are';
import OurTeam from './pages/our-team';
import OurPaptners from './pages/partners';
import OurProjects from './pages/our-projects';
import SocialLinks from './pages/social-links';
// import Home from './pages/home';
// import Hero from './Components/Hero/Hero';
import Contacts from './pages/contacts.jsx';
import WhatWeDo from './pages/what-we-do';

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/who-we-are" component={WhoWeAre} />
          <Route path="/what-we-do" component={WhatWeDo} />
          <Route path="/our-team" component={OurTeam} />
          <Route path="/partners" component={OurPaptners} />
          <Route path="/our-projects" component={OurProjects} />
          <Route path="/social-links" component={SocialLinks} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </Router>

      <WhatWeDo />
    </>
  );
}

export default App;
