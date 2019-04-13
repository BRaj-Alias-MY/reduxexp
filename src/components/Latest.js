import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {latestPosts} from '../actions/postActions';

class Latest extends Component {
  componentWillMount () {
    this.props.latestPosts ();
  }

  render () {
    const postItems = this.props.news.map (post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));

    return (
      <div>
        <h1>Posts Latest</h1>
        {postItems}
      </div>
    );
  }
}

Latest.propTypes = {
  latestPosts: PropTypes.func.isRequired,
  news: PropTypes.array.isRequired,
};
const mapStateToProps = state => ({
  news: state.news.items2,
});

export default connect (mapStateToProps, {latestPosts}) (Latest);
