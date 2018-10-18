import React, { Component } from "react";
import "./Jumbotron.css"


class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className='row'>
                        <div className='col-md-2'></div>
                        <div className='col-md-8'>
                            <img className="logo-size" src={require("../../Assets/images/ThinkInkLogo.png")} alt="Second slide" />
                            <h1 className="display-4 col-md-4 tagline">Other words...</h1>
                            <p className="lead">Find your next tattoo</p>
                        </div>
                        <div className='col-md-2'></div>
                    </div>
                    <div className="row">
                        <form>
                            <div className='col-md-2'></div>
                            <div class="form-group col-md-4">
                                <label for="inputCity">City</label>
                                <input type="text" class="form-control" id="inputCity" placeholder="Sacramento" />
                            </div>
                            <div class="col-md-4">
                                <button type="submit" class="btn btn-primary btn-md">Search</button>
                            </div>
                            <div className='col-md-2'></div>
                        </form>
                    </div>

                </div>
            </div>
        )
    }

}


export default Jumbotron;