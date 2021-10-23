import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/NavigationBar/NavigationBar';

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WhoWeAre from './pages/who-we-are';
import OurTeam from './pages/our-team';
import OurPaptners from './pages/partners';
import OurProjects from './pages/our-projects';
import SocialLinks from './pages/social-links';
import Home from './pages/Home';
import Prices from './pages/prices';

import Contacts from './pages/contacts.jsx';
import WhatWeDo from './pages/what-we-do';

// import { useState, useEffect } from 'react';
// import infinityScroll from './intersectionObserver';

export default function App() {
  //   const [nexPage, setNexPage] = useState(false);

  //   setNexPage(() => {});

  //   useEffect(() => {
  //     const options = {
  //       rootMargin: '200px',
  //     };
  //     /**
  //      * Typical Observer's registration
  //      */
  //     const callback = function (entries) {
  //       entries.forEach(entry => {
  //         if (entry.isIntersecting) {
  //           setNexPage(state => !state);
  //         }
  //       });
  //     };
  //     let observer = new IntersectionObserver(callback, options);

  //     // Now we should tell our Observer what to observe

  //     function infinityScroll() {
  //       observer.observe(document.querySelector('.empty-div-for-scrollfetch'));
  //     }
  //     infinityScroll();
  //   }, []);

  return (
    <>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/example-autoservise1" exact component={Home} />
          <Route path="/who-we-are" component={WhoWeAre} />
          <Route path="/what-we-do" component={WhatWeDo} />
          <Route path="/our-team" component={OurTeam} />
          <Route path="/partners" component={OurPaptners} />
          <Route path="/our-projects" component={OurProjects} />
          <Route path="/social-links" component={SocialLinks} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/prices" component={Prices} />
        </Switch>
      </Router>
      {/* {nexPage && <WhoWeAre />} */}
    </>
  );
}
