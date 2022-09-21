import './search-box.styles.css';

import React, { Component } from 'react';

export default class SearchBox extends Component {
  render() {
    const { onChangeHandler, placeholder, className } = this.props;
    return (
      <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
      ></input>
    );
  }
}
