import React, { Component } from 'react';
import './CommentWindow.css';
import API from '../../Pages/utils/API';


class CommentWindow extends React.Component {

    render = () => {
        return (

            <div className="container-com">
                <h1>Comments</h1>
                <br />
                {this.props.comments.map(comment => (
                    <div>
                        <div className="commentBox"
                            id={comment.id}
                            key={comment.id}
                            author={comment.author}
                            text={comment.text}
                            date={comment.date}>
                            <div className="row">
                                <h5>{comment.author}</h5>
                                <h5>{comment.date}</h5>
                            </div>
                            <div className="row">
                                <p>{comment.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        )
    }
};

export default CommentWindow;