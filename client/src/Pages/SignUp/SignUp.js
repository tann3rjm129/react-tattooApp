import React from 'react';

const SignUp = () => (
  <div>
    {/* Sign-up form */}
    <div className="jumbotron text-center">
      <div className="card">
        <h1 className="h1-reponsive mb-3 font">
          <strong>Sign-up!</strong>
        </h1>
        <p className="lead font2">
          Enter the information below to sign-up for an account!
        </p>

        <form>
          <label htmlFor="defaultFormContactNameEx" class="grey-text">
            Your name
          </label>
          <input
            type="text"
            id="defaultFormContactNameEx"
            class="form-control"
          />

          <br />

          <label htmlFor="defaultFormContactEmailEx" class="grey-text">
            Your email
          </label>
          <input
            type="email"
            id="defaultFormContactEmailEx"
            class="form-control"
          />

          <br />

          <label htmlFor="defaultFormContactSubjectEx" class="grey-text">
            password
          </label>
          <input
            type="text"
            id="defaultFormContactSubjectEx"
            class="form-control"
          />

          <br />

          <div className="text-center mt-4">
            <button class="btn btn-outline-warning" type="submit">
              Submit<i class="fa fa-paper-plane-o ml-2" />
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default SignUp;
