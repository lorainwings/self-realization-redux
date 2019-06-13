import React, { Component } from 'react';
import CommentInput from '../CommentInput/CommentInput';
import CommentList from '../CommentList/CommentList';

class CommentApp extends Component {
  render() {
    return (
      <div>
        <CommentInput />
        <CommentList />
      </div>
    );
  }
}

export default CommentApp;
