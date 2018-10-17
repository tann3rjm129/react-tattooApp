
import React, { Component } from 'react';
import './CommentForm.css';
// made a utils folder in Components originally because it wouldnt work with the pages Utils folder
import API from '../../Pages/utils/API';


class CommentForm extends React.Component {

    state = {
        comment: {},
        author: "",
        text: '',
    };

    handleAuthorChange = (event) => {
        this.setState({ author: event.target.value });
    }

    handleTextChange = (event) => {
        this.setState({ text: event.target.value });
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state.author, this.state.text);
        this.setState({ author: '', text: '' });
    }



    render = () => {
        return (

            <div className="container">
                <form className="commentForm" onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Anonymous Username</label>
                        <input
                            type="text"
                            name="author"
                            placeholder="Your Username"
                            value={this.state.author}
                            onChange={this.handleAuthorChange}
                        />
                        <label for="exampleFormControlTextarea1">Comments</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Say something..." rows="3" name="text" value={this.state.text}
                            onChange={this.handleTextChange}></textarea>
                    </div>
                    <button type="submit" value="Post" className="btn btn-primary">Submit<i class="fa fa-paper-plane-o ml-2" /></button>
                </form>
            </div>

            // <form className="commentForm" onSubmit={this.handleSubmit}>
            //     <input
            //         type="text"
            //         placeholder="Your name"
            //         value={this.state.author}
            //         onChange={this.handleAuthorChange}
            //     />
            //     <input
            //         type="text"
            //         placeholder="Say something..."
            //         value={this.state.text}
            //         onChange={this.handleTextChange}
            //     />
            //     <input type="submit" value="Post" />
            // </form>
        )
    }
};

export default CommentForm;