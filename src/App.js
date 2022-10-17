import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Cart from './pages/Cart';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Plans from './pages/Plans';
import Services from './pages/Services';
import Store from './pages/Store';
import Faqs from './pages/Faqs';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import GetConnection from './pages/GetConnection';
import Semi_AnnualPlans from './pages/Semi_AnnualPlans';
import AnnualPlans from './pages/AnnualPlans';
import Testimonials from './pages/Testimonials';
//dropdown links
import Xstream_fibernet from './pages/XstreamFibernet';
import Airfiber from './pages/AirFiber';
import Leasedline from './pages/Leasedline';
import corporate_line from './pages/Corporate_line';
import Reviews from './pages/Reviews';
//import Voip from './pages/Voip';
import Cloud_Storage from './pages/CloudStorage';
import Iptv_ott from './pages/Ott';
import Voip from './pages/Voip';
import HomeCamera from './pages/Homesecurity';
import Refer from './pages/Refer';
import Support from './pages/Support'
import Enquiry_form from './pages/Enquiry_form';
//error pages
import Error404 from './pages/Error404';
//work from home page 
import work_from_home from './pages/work_from_home';


function App() {
  return (
    <>
      <Router>
        <Navigation/>
          <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/plans" component={Plans}></Route>
            <Route path="/Testimonials" component={Testimonials}></Route>
            <Route path="/services" component={Services}></Route>
            <Route path="/store" component={Store}></Route>
            <Route path="/faqs" component={Faqs}></Route>
            <Route path="/blogs" component={Blogs}></Route>
            <Route path="/Enquiry_form" component={Enquiry_form}></Route>
            <Route path="/Contact" component={Contact}></Route>
            <Route path="/GetConnection" component={GetConnection}></Route>
              {/* dropdown menu */}
            <Route path="/Xstream_fibernet" component={Xstream_fibernet}></Route>
            <Route path="/AirFiber" component={Airfiber}></Route>
            <Route path="/Voip" component={Voip}></Route>
            <Route path="/Reviews" component={Reviews}></Route>
            <Route path="/Cloud_Storage" component={Cloud_Storage}></Route>
            <Route path="/Iptv_ott" component={Iptv_ott}></Route>
            <Route path="/Leasedline" component={Leasedline}></Route>
            <Route path="/Corporate-line" component={corporate_line}></Route>
            <Route path="/HomeCamera" component={HomeCamera}></Route>
            <Route path="/Semi_AnnualPlans" component={Semi_AnnualPlans}></Route>
            <Route path="/AnnualPlans" component={AnnualPlans}></Route>
            <Route path="/Refer" component={Refer}></Route>
            <Route path="/Support" component={Support}></Route>
            
            {/* error links */}
            {/* 400 Bad Request */}

            {/* 404 not found */}
            <Route path="/Error404" component={Error404}></Route>
            {/* 400 Bad Request */}

            {/* 500 internal server error */}

            <Route path="/work-from-home" component={work_from_home}></Route>
            {/* 502 Service Temporarily Overloaded */}

            {/* 503 Service Unavailable */}
            
          </Switch>
      </Router>
    </>
  );
}

export default App;
