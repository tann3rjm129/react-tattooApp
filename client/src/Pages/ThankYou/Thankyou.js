import React from 'react';
import { Link } from "react-router-dom";


const ThankYou = () => (
  <div>
    {/* Sign-up form */}
    <div className="jumbotron text-center">
      <div className="card">
        <h1 className="h1-reponsive mb-3 font">
          <strong>Thank you for your Support!</strong>
        </h1>
        <p className="lead font2">Click below to go back to searching!</p>

        <a href="/">
          <button className="btn btn-outline-warning" type="submit" value="Post">
            Home<i className="fa fa-paper-plane-o ml-2" />
          </button>
        </a>
      </div>
    </div>
  </div>
);

export default ThankYou;
