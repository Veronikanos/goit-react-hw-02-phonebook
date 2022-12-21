import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
import styles from './App.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  handleAddContact = newContact => {
    this.state.contacts.find(item => item.name === newContact.name)
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [newContact, ...prevState.contacts],
        }));
  };

  render() {
    const normalizeText = this.state.filter.toLowerCase().trim();

    const filteredContacts = this.state.contacts.filter(item =>
      item.name.toLowerCase().trim().includes(normalizeText)
    );

    return (
      <section className={styles.phonebook}>
        <div className={styles.container}>
          <h1>Phonebook</h1>
          <ContactForm handleAddContact={this.handleAddContact} />
        </div>
        <div className={styles.container}>
          <h2>Contacts</h2>
          <Filter filter={this.state.filter} onChange={this.changeFilter} />
          <ContactList contacts={filteredContacts} />
        </div>
      </section>
    );
  }
}
