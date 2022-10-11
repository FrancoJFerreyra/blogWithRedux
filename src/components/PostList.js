import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
  render() {
    console.log(this.props.fetchPosts);
    return <div>Post List</div>;
  }
}

export default connect(null, { fetchPosts })(PostList);
