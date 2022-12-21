import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import styles from './App.module.css';
import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  // addContact = text => {
  //   const newObj = {
  //     id: nanoid(),
  //     name: text,
  //   };

  //   this.setState(prevState => ({
  //     contacts: [newObj, ...prevState.contacts],
  //   }));

  //   // console.log(this.state);
  // };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();

    const newObj = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.setState(prevState => ({
      contacts: [newObj, ...prevState.contacts],
    }));

    this.setState({ name: '', number: '' }); //reset input
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
          <form onSubmit={this.handleSubmit} className={styles.form}>
            {/* <label htmlFor={this.nameInputId}> */}
            <label>
              <input
                className={styles.inputField}
                placeholder="Name"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={this.state.name}
                onChange={this.handleInput}
                id={nanoid()}
              />
              {/* <button type="submit">Add Contact</button> */}
            </label>

            {/* <label htmlFor={this.phoneInputId}> */}
            <label>
              <input
                className={styles.inputField}
                placeholder="Phone number"
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={this.state.number}
                onChange={this.handleInput}
                id={nanoid()}
              />
            </label>

            <button type="submit" className={styles.button}>
              Add Contact
            </button>
          </form>
        </div>
        <Contacts
          contacts={filteredContacts}
          filter={this.state.filter}
          onChange={this.changeFilter}
        />
      </section>
    );
  }
}
