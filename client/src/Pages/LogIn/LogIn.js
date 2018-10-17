import React from 'react';
import { setInStorage, getFromStorage } from '../utils/storage';
import 'whatwg-fetch';
import './LogIn.css';

class LogIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: '',
      signUpError: '',
      signInError: '',
      signInEmail: '',
      signInPassword: '',
      signUpEmail: '',
      signUpPassword: ''
    };

    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(
      this
    );
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(
      this
    );
    this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(
      this
    );
    this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(
      this
    );

    this.onSignIn = this.onSignIn.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    const obj = getFromStorage('projectinfo');
    if (obj && obj.token) {
      const { token } = obj;
      // Verify token
      fetch('/api/account/verify?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token,
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false
            });
          }
        });
    } else {
      this.setState({
        isLoading: false
      });
    }
  }

  onTextboxChangeSignInEmail(event) {
    this.setState({
      signInEmail: event.target.value
    });
  }

  onTextboxChangeSignInPassword(event) {
    this.setState({
      signInPassword: event.target.value
    });
  }

  onTextboxChangeSignUpEmail(event) {
    this.setState({
      signUpEmail: event.target.value
    });
  }

  onTextboxChangeSignUpPassword(event) {
    this.setState({
      signUpPassword: event.target.value
    });
  }

  onSignUp() {
    // Grab state
    const { signUpEmail, signUpPassword } = this.state;

    this.setState({
      isLoading: true
    });

    // Post request to backend
    fetch('/api/account/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: signUpEmail,
        password: signUpPassword
      })
    })
      // .then(res => {
      //   if (res.ok) {
      //     return res.json();
      //   } else {
      //     err => console.log(err);
      //   }
      // })
      .then(json => {
        console.log('json', json);
        if (json.success) {
          this.setState({
            signUpError: json.message,
            isLoading: false,
            signUpEmail: '',
            signUpPassword: ''
          });
        } else {
          this.setState({
            signUpError: json.message,
            isLoading: false
          });
        }
      });
  }

  onSignIn() {
    // Grab state
    const { signInEmail, signInPassword } = this.state;

    this.setState({
      isLoading: true
    });

    // Post request to backend
    fetch('/api/account/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword
      })
    })
      .then(res => res.json())
      .then(json => {
        console.log('json', json);
        if (json.success) {
          setInStorage('projectinfo', { token: json.token });
          this.setState({
            signInError: json.message,
            isLoading: false,
            signInPassword: '',
            signInEmail: '',
            token: json.token
          });
        } else {
          this.setState({
            signInError: json.message,
            isLoading: false
          });
        }
      });
  }

  logout() {
    // this.setState({
    //   isLoading: true
    // });
    // const obj = getFromStorage('devhub');
    // if (obj && obj.token) {
    //   const { token } = obj;
    //   // Verify token
    //   fetch('/api/account/logout?token=' + token)
    //     .then(res => res.json())
    //     .then(json => {
    //       if (json.success) {
    //         this.setState({
    //           token: '',
    //           isLoading: false
    //         });
    //       } else {
    //         this.setState({
    //           isLoading: false
    //         });
    //       }
    //     });
    // } else {
    //   this.setState({
    //     isLoading: false
    //   });
    // }

    localStorage.removeItem('projectinfo');
    document.location.href = '/';
  }

  render() {
    const {
      isLoading,
      token,
      signInError,
      signInEmail,
      signInPassword,
      signUpEmail,
      signUpPassword,
      signUpError
    } = this.state;

    if (isLoading) {
      return (
        <div className="row">
          <div className="col-md-5" />
          <div className="col-md-2">
            <p>Loading...</p>
          </div>
          <div className="col-md-5" />
        </div>
      );
    }
    if (!token) {
      return (
        <div className="container">
          {/* Sign-up form */}
          <div className="jumbotron text-center">
            <h1 className="h1-reponsive mb-3 font">
              <strong>Log-In!</strong>
            </h1>
            <p className="lead-font2">
              Enter your Account information to sign-in!
            </p>

            <form>
              {signInError ? <p>{signInError}</p> : null}
              <label htmlFor="defaultFormContactEmailEx" class="grey-text">
                Your email
              </label>
              <input
                type="email"
                class="form-control"
                value={signInEmail}
                onChange={this.onTextboxChangeSignInEmail}
              />

              <br />

              <label htmlFor="defaultFormContactSubjectEx" class="grey-text">
                password
              </label>
              <input
                type="password"
                class="form-control"
                value={signInPassword}
                onChange={this.onTextboxChangeSignInPassword}
              />

              <br />

              <div className="text-center mt-4">
                <button
                  className="btn btn-primary-post"
                  type="button"
                  onClick={this.onSignIn}
                >
                  <i class="fa fa-paper-plane-o ml-2" />
                </button>
              </div>
            </form>

            <h1 className="h1-reponsive mb-3 font">
              <br />
              <strong>Or Sign-up!</strong>
            </h1>
            <p className="lead-font2">
              Enter an email and password for your account!
            </p>

            <form>
              {signUpError ? <p>{signUpError}</p> : null}
              <label htmlFor="defaultFormContactEmailEx" class="grey-text">
                Your email
              </label>
              <input
                type="email"
                class="form-control"
                value={signUpEmail}
                onChange={this.onTextboxChangeSignUpEmail}
              />

              <br />

              <label htmlFor="defaultFormContactSubjectEx" class="grey-text">
                password
              </label>
              <input
                type="password"
                class="form-control"
                value={signUpPassword}
                onChange={this.onTextboxChangeSignUpPassword}
              />

              <br />

              <div className="text-center mt-4">
                <button
                  className="btn btn-primary-post"
                  type="button"
                  onClick={this.onSignUp}
                >
                  <i class="fa fa-paper-plane-o ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    }

    return (
      <div className="row">
        <div className="col-md-5" />
        <p>Account</p>
        <button onClick={this.logout}>Logout</button>
        <div className="col-md-5" />
      </div>
    );
  }
}

export default LogIn;
