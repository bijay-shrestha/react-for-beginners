import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

const propTypes = {};

const defaultProps = {};

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    // componentDidMount() is invoked immediately after a component is mounted
    // (inserted into the tree). You may call setState() immediately in
    // componentDidMount(). It will trigger an extra rendering, but it will happen
    // before the browser updates the screen. This guarantees that even though the
    // render() will be called twice in this case, the user won’t see the
    // intermediate state.
    componentDidMount() {
        Axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                return this.setState({posts: res.data})
            });
    }

    render() {
        const postItems = this.state.posts.length > 0 && this
            .state
            .posts
            .map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ));

        return (
            <React.Fragment>
                <h2>Posts</h2>
                {postItems}
            </React.Fragment>
        );
    }
}

export default Posts;

Posts.propTypes = propTypes;
Posts.defaultProps = defaultProps;