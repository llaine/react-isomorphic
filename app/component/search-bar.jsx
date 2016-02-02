import React, { Component, PropTypes } from 'react';

export default class SearchBar extends Component {
  constructor() {
    super(...arguments)
  }

  handlerChange(event) {
    this.props.onUserInput(event.target.value);
  }

  render() {
    return <input type="search" placeholder="search"
                  value={this.props.filterText}
                  onChange={this.handlerChange.bind(this)}/>
  }
}

SearchBar.propTypes = {
  onUserInput: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired
};