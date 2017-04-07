import React, {Component} from "react";
import {connect} from "react-redux";
import {loadFeed} from "../actions/feed";
import Feed from "../components/Feed";

class LoadFeed extends Component {
  componentDidMount() {
    this.props.dispatch(loadFeed());
  }

  render() {
    return (
      <Feed posts={this.props.posts}/>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch: dispatch,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadFeed);
