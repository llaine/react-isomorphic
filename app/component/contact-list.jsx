import React, { Component, PropTypes } from 'react';

export default class ContactList extends Component {
  constructor() {
    super(...arguments)
  }

  render() {
    const filteredContacts = this.props.contacts.filter(
        (contact) => contact.name.indexOf(this.props.filterText) !== -1
    );

    return (
        <ul>
          {filteredContacts.map(
              (contact) => <li key={contact.email}>{contact.name} - {contact.email}</li>
          )}
        </ul>
    )
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filterText: PropTypes.string.isRequired
};