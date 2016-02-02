import React, { Component, PropTypes } from 'react';

import ContactList from './contact-list.jsx';
import SearchBar from './search-bar.jsx';

class ContactApp extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      contacts:this.props.initialData || [],
      filterText:''
    };
  }

  handleUserInput(searchTerm) {
    this.setState({filterText:searchTerm});
  }

  render() {
    return (
        <div>
          <SearchBar filterText={this.state.filterText}
                     onUserInput={this.handleUserInput.bind(this)} />
          <ContactList contacts={this.state.contacts}
                       filterText={this.state.filterText} />
        </div>
    )
  }
}

ContactApp.propTypes = {
  initialData: PropTypes.any
};

export default ContactApp;