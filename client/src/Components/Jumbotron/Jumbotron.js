import React, { Component } from "react";
import Carousel from "../Carousel"
import "./Jumbotron.css"
class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className='row devHub-carousel'>
                        <div className='carousel col-sm-7'>
                            <Carousel />
                        </div>
                        <h1 className="display-4 col-sm-4 tagline">Welcome to DevHub!</h1>
                        <p className="lead">Create or fund your next dream app</p>
                        <div className="container-1">
                            <a className="btn btn-primary btn-md butt" href="" role="button">Explore</a>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}


export default Jumbotron;