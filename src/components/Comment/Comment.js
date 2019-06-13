import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Editor extends Component {
  static propTypes = {
    info: PropTypes.object.isRequired
  };

  constructor() {
    super();
    this.state = {
      content: '<h1>React.js 小书</h1>'
    };
  }

  render() {
    return (
      <div>
        <div>{this.props.info.username}</div>
        <div>{this.props.info.age}</div>
        <div>{this.props.info.gender}</div>
        <div
          className="editor-wrapper"
          dangerouslySetInnerHTML={{ __html: this.state.content }}
        />
        <hr />
      </div>
    );
  }
}

export default Editor;
