import React, { Component } from 'react';
import './App.css';
// import Navbar from './Component/Navbar';
// import Cards from './Component/Cards';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Home from './Pages/Home';
// import LogIn from './Pages/LogIn';
// import SignUp from './Pages/SignUp';
// import Error from './Pages/Error';
// import Navbar from './Components/NavBar';
// import Footer from './Components/Footer';
// import Project from './Pages/Project';
// import Donate from './Pages/Donate';
// import ThankYou from './Pages/ThankYou';
// import PostProject from './Pages/PostProject';

class App extends Component {
  render() {
    return (
      <div className="background">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 jumbotron jumbo jumbo-margin">
              <h1 className="col-md-8 text">Think-Ink</h1>
              <p className="lead text">temporary screen holder - Work in progress</p>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div >
      // <div>
      //   <Router>
      //     <div>
      //       <Navbar />
      //       <Switch>
      //         <Route path="/" component={Home} exact />
      //         <Route path="/account/signup" component={LogIn} />
      //         {/* <Route path="/account/signup" component={SignUp} /> */}
      //         <Route path="/users/:id" component={Project} />
      //         <Route path="/donate/:id" component={Donate} />
      //         {/* <Route path="/thankyou" component={ThankYou} /> */}
      //         <Route path="/post" component={PostProject} />
      //         <Route component={Error} />
      //       </Switch>
      //       <Footer />
      //     </div>
      //   </Router>
      // </div>
    );
  }
}

export default App;
