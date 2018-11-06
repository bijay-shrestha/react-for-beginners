import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

const propTypes = {};

const defaultProps = {};

export default class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };
    }

    handleChange = (e) => (this.setState({
        [e.target.name]: e.target.value
    }))

    handleSubmit = e => {
        e.preventDefault();
        const post = {
            ...this.state
        };
        Axios
            .post('https://jsonplaceholder.typicode.com/posts', {post})
            .then(response => {
                this.setState({title: '', body: ''});
                console.log('++-', response);
            });
    }

    render() {
        return (
            <React.Fragment>
                <h1>Add Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title:
                        </label><br/>
                        <input
                            type="text"
                            name="title"
                            onChange={this.handleChange}
                            value={this.state.title}/>
                    </div>
                    <br/>
                    <div>
                        <label>Body:
                        </label><br/>
                        <input
                            type="text"
                            name="body"
                            onChange={this.handleChange}
                            value={this.state.body}/>
                    </div>
                    <br/>
                    <button type="submit">Save</button>
                </form>
            </React.Fragment>
        );
    }
}

PostForm.propTypes = propTypes;
PostForm.defaultProps = defaultProps;