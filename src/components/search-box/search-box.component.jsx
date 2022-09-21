import React, { Component } from 'react';

export default class SearchBox extends Component {
  render() {
    const { onChangeHandler, placeholder, className } = this.props;
    return (
      <input
        className={className}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
      ></input>
    );
  }
}
