import React, { Component } from 'react';
import './Home.css';
// import Navbar from '../../Components/NavBar';
import Cards from '../../Components/Cards';

import API from '../utils/API';
import { Link } from 'react-router-dom';
// import Carousel from ".././Components/Carousel";
// import Container from '../../Components/Container';
// import Row from '../../Components/Row';
// import cards from '../../cards.json';
// import Title from '../../Components/Title';
// import Project from '../../Pages/Project';
// import Footer from '../../Components/Footer';
import Jumbotron from '../../Components/Jumbotron';

class Home extends Component {
  state = {
    users: [],
    name: '',
    projectName: '',
    githubLink: '',
    email: '',
    synopsis: '',
    image1: '',
    image2: '',
    image3: '',
    donationGoal: '',
    reasonForDonation: '',
    donationUsedFor: '',
    donationCurrent: '',
    donationAdded: ''
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    API.getUsers()
      .then(
        res =>
          this.setState({
            users: res.data,
            name: '',
            projectName: '',
            githubLink: '',
            email: '',
            synopsis: '',
            image1: '',
            image2: '',
            image3: '',
            donationGoal: '',
            reasonForDonation: '',
            donationUsedFor: '',
            donationCurrent: ''
          })
        // console.log(users);
      )

      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="App">
        <Jumbotron />
        <div className="container">
          <h2>MARKETPLACE</h2>
        </div>
        {/* } // Map over this.state.friends and render a FriendCard component for each friend object
        {/* <Container> */}
        {/* <div className="container"> commented out container to expand cards, make them bigger for the moment*/}
        <div className="container">
          <div className="row">
            {this.state.users.map(users => (
              <div className="col-md-4">
                <Cards
                  id={users.id}
                  key={users.id}
                  image1={users.image1}
                  projectName={users.projectName}
                  synopsis={users.synopsis}
                  githubLink={users.githubLink}
                  name={users.name}
                  email={users.email}
                >
                  <div
                    className="image-flip"
                    ontouchstart="this.classList.toggle('hover');"
                  >
                    <div className="mainflip">
                      <div className="frontside">
                        <div className="card">
                          <div className="card-body text-center">
                            <p>
                              <img className=" img-fluid" src={users.image1} />
                            </p>
                            <h4 className="card-title">{users.name}</h4>
                            <p className="card-text">
                              View the project and fund it your liking.
                            </p>
                            <a href="#" className="btn btn-primary btn-sm">
                              <i className="fa fa-plus" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="backside">
                        <div className="card">
                          <div className="card-body text-center mt-4">
                            <h4 className="card-title">{users.projectName}</h4>
                            <p className="card-text">{users.synopsis}</p>
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <a
                                  href={users.githubLink}
                                  target="blank"
                                  className="btn btn-primary btn-sm"
                                >
                                  <i className="fa fa-github" />
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <Link to={'/users/' + users._id}>
                                  <a
                                    href="#"
                                    className="btn btn-primary btn-sm"
                                  >
                                    <i className="fa fa-eye" />
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Cards>
              </div>
            ))}
          </div>
        </div>
        {/* </ div> */}
      </div>
    );
  }
}

export default Home;
