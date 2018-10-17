import React from 'react';
import API from '../utils/API';
import './PostProject.css';


class PostProject extends React.Component {

  state = {
    users: {},
    name: "",
    projectName: '',
    githubLink: "",
    email: "",
    synopsis: "",
    image1: "",
    image2: "",
    image3: "",
    donationGoal: "",
    reasonForDonation: '',
    donationUsedFor: '',
    donationCurrent: '',
  };

  componentDidMount() {
    // console.log("~~~~compoenet mounted~~~~")
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  }

  handleGithubLinkChange = (event) => {
    this.setState({ githubLink: event.target.value });
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handleProjectNameChange = (event) => {
    this.setState({ projectName: event.target.value });
  }

  handleSynopsisChange = (event) => {
    this.setState({ synopsis: event.target.value });
  }

  handleImage1Change = (event) => {
    this.setState({ image1: event.target.value });
  }

  handleImage2Change = (event) => {
    this.setState({ image2: event.target.value });
  }

  handleImage3Change = (event) => {
    this.setState({ image3: event.target.value });
  }

  handleDonationGoalChange = (event) => {
    this.setState({ donationGoal: event.target.value });
  }
  handleReasonForDonationChange = (event) => {
    this.setState({ reasonForDonation: event.target.value });
  }
  handleDonationUsedForChange = (event) => {
    this.setState({ donationUsedFor: event.target.value });
  }


  handleFormSubmit = event => {
    event.preventDefault();

    let name = this.state.name.trim();
    let githubLink = this.state.githubLink.trim();
    let email = this.state.email.trim();
    let projectName = this.state.projectName.trim();
    let synopsis = this.state.synopsis.trim();
    let image1 = this.state.image1.trim();
    let image2 = this.state.image2.trim();
    let image3 = this.state.image3.trim();
    let donationGoal = this.state.donationGoal.trim();
    let reasonForDonation = this.state.reasonForDonation.trim();
    let donationUsedFor = this.state.donationUsedFor.trim();

    if (!name || !githubLink || !email || !projectName || !synopsis || !image1 || !image2 || !image3 || !donationGoal || !reasonForDonation || !donationUsedFor) {
      return alert("Must fill out all fields before proceeding.");
    }

    API.newUser({

      name: name,
      projectName: projectName,
      githubLink: githubLink,
      email: email,
      synopsis: synopsis,
      image1: image1,
      image2: image2,
      image3: image3,
      donationGoal: donationGoal,
      reasonForDonation: reasonForDonation,
      donationUsedFor: donationUsedFor,
      donationCurrent: 0

    })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => console.log(err));

    this.setState({
      name: "",
      projectName: '',
      githubLink: "",
      email: "",
      synopsis: "",
      image1: "",
      image2: "",
      image3: "",
      donationGoal: "",
      reasonForDonation: '',
      donationUsedFor: '',
      donationCurrent: '',
    });

  };


  render() {
    return (
      <div className="container">
        {/* Sign-up form */}
        <div className="jumbotron text-center">
          {/* <div className="card"> */}
          <h1 className="h1-reponsive mb-3 font">
            <strong>Project Post</strong>
          </h1>
          <p className="lead-font2">
            To Post a project to our page fill out the information below.
        </p>

          <form onSubmit={this.handleFormSubmit}>
            <label htmlFor="defaultFormContactNameEx" class="grey-text">
              Your name
          </label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
              id="defaultFormContactNameEx"
              class="form-control"
            />

            <br />

            <label htmlFor="defaultFormContactNameEx" class="grey-text">
              Email
          </label>
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
              id="defaultFormContactNameEx"
              class="form-control"
            />

            <br />

            <label htmlFor="defaultFormContactNameEx" class="grey-text">
              Github link (if applic)
          </label>
            <input
              type="text"
              value={this.state.githubLink}
              onChange={this.handleGithubLinkChange}
              id="defaultFormContactNameEx"
              class="form-control"
            />

            <br />

            <label htmlFor="defaultFormContactEmailEx" class="grey-text">
              Image link 1
          </label>
            <input
              type="text"
              value={this.state.image1}
              onChange={this.handleImage1Change}
              id="defaultFormContactEmailEx"
              class="form-control"
            />

            <br />

            <label htmlFor="defaultFormContactEmailEx" class="grey-text">
              Image link 2
          </label>
            <input
              type="text"
              value={this.state.image2}
              onChange={this.handleImage2Change}
              id="defaultFormContactEmailEx"
              class="form-control"
            />

            <br />

            <label htmlFor="defaultFormContactEmailEx" class="grey-text">
              Image link 3
          </label>
            <input
              type="text"
              value={this.state.image3}
              onChange={this.handleImage3Change}
              id="defaultFormContactEmailEx"
              class="form-control"
            />

            <br />

            <label htmlFor="defaultFormContactNameEx" class="grey-text">
              Project/App name
          </label>
            <input
              type="text"
              value={this.state.projectName}
              onChange={this.handleProjectNameChange}
              id="defaultFormContactNameEx"
              class="form-control"
            />

            <br />

            <label htmlFor="defaultFormContactNameEx" class="grey-text">
              Summary of Project
          </label>
            <input
              type="text"
              value={this.state.synopsis}
              onChange={this.handleSynopsisChange}
              id="defaultFormContactNameEx"
              class="form-control"
            />

            <br />

            <label htmlFor="defaultFormContactNameEx" class="grey-text">
              requested Funding amount
          </label>
            <input
              type="number"
              value={this.state.donationGoal}
              onChange={this.handleDonationGoalChange}
              id="defaultFormContactNameEx"
              class="form-control"
            />

            <br />

            <label htmlFor="defaultFormContactNameEx" class="grey-text">
              Describe Why you are requesting funding
          </label>
            <input
              type="text"
              value={this.state.reasonForDonation}
              onChange={this.handleReasonForDonationChange}
              id="defaultFormContactNameEx"
              class="form-control"
            />

            <br />

            <label htmlFor="defaultFormContactNameEx" class="grey-text">
              Describe what funding is for
          </label>
            <input
              type="text"
              value={this.state.donationUsedFor}
              onChange={this.handleDonationUsedForChange}
              id="defaultFormContactNameEx"
              class="form-control"
            />

            <br />

            <div className="text-center">
              <button class="btn btn-outline btn-primary-home2" type="submit" value="Post" data-toggle="modal" data-target="#exampleModal">
                Submit Project
              </button>

            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="false">
              <div class="modal-dialog modal-center" role="document">
                <div class="modal-content">
                  {/* <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel"></h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div> */}
                  <div class="modal-body">
                    Thank you for your project submission. Please feel free to explore more projects.
                              </div>
                  <div class="modal-footer">
                    <a href="/">
                      <button type="button" class="btn btn-primary-home2">Home</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };

};

export default PostProject;
