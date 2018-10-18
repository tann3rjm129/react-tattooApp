import React, { Component } from 'react';
import './Home.css';
// import Navbar from '../../Components/NavBar';
import Cards from '../../Components/Cards';

import API from '../utils/API';
import { Link } from 'react-router-dom';
// import Container from '../../Components/Container';
// import Row from '../../Components/Row';
// import Title from '../../Components/Title';
// import Project from '../../Pages/Project';
import Jumbotron from '../../Components/Jumbotron';

class Home extends Component {
  state = {
    users: [],
    artistName: '',
    location: '',
    artistNumber: '',
    independent: '',
    shopName: '',
    hourlyRate: '',
    artistMin: '',
    stylePref: '',
    image1: '',
    image2: '',
    image3: '',
    artistInsta: '',
    shopLink: '',
    artistBio: '',
    artistComments: ''

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
            artistName: '',
            location: '',
            artistNumber: '',
            independent: '',
            shopName: '',
            hourlyRate: '',
            artistMin: '',
            stylePref: '',
            image1: '',
            image2: '',
            image3: '',
            artistInsta: '',
            shopLink: '',
            artistBio: '',
            artistComments: ''
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
          <h2>Welcome to Think Ink. A catalog of tattoo artists at your fingertips.</h2>
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
                  artistName={users.artistName}
                  location={users.location}
                  artistNumber={users.artistNumber}
                  independent={users.independent}
                  shopName={users.shopName}
                  hourlyRate={users.hourlyRate}
                  artistMin={users.artistMin}
                  stylePref={users.stylePref}
                  image1={users.image1}
                  image2={users.image1}
                  image3={users.image1}
                  artistInsta={users.artistInsta}
                  shopLink={users.shopLink}
                  artistBio={users.artistBio}
                  artistComments={users.artistComments}

                >

                  <div className="card">
                    <div className="card-body text-center">
                      <p>
                        <img className=" img-fluid" src={users.image1} alt={users.artistName} />
                      </p>
                      <h4 className="card-title">{users.artistName}</h4>
                      <p className="card-text">Preferred Style: {users.stylePref}</p>
                      <p className="card-text">Hourly Rate: ${users.hourlyRate}</p>
                      <p className="card-text">Minimum Rate: ${users.artistMin}</p>
                      <Link to={'/users/' + users._id}>
                        <button
                          className="btn btn-primary btn-sm"
                        > See More
                                      <i className="fa fa-eye" />
                        </button>
                      </Link>

                    </div>
                  </div>
                </Cards>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
