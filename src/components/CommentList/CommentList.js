import React, { Component } from 'react';
import Comment from '../Comment/Comment';

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.users = [
      { username: 'Jerry', age: 21, gender: 'male' },
      { username: 'Tomy', age: 22, gender: 'male' },
      { username: 'Lily', age: 19, gender: 'female' },
      { username: 'Lucy', age: 20, gender: 'female' }
    ];
  }

  render() {
    return (
      <div>
        {this.users.map((item, idx) => {
          return <Comment key={idx} info={item} />;
        })}
      </div>
    );
  }
}

export default CommentList;
