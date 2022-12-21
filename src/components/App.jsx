import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
import styles from './App.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const normalizeText = this.state.filter.toLowerCase();

    const filteredContacts = this.state.contacts.filter(item =>
      item.name.toLowerCase().includes(normalizeText)
    );

    return (
      <section className={styles.phonebook}>
        <div className={styles.container}>
          <h1>Phonebook</h1>
          <ContactForm />
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
