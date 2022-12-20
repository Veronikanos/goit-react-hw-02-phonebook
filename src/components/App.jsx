import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import styles from './App.module.css';
import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    phone: '',
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
      phone: this.state.phone,
    };

    this.setState(prevState => ({
      contacts: [newObj, ...prevState.contacts],
    }));

    this.setState({ name: '', phone: '' }); //reset input
  };

  render() {
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
                // id={nanoid()} ?????
              />
              {/* <button type="submit">Add Contact</button> */}
            </label>

            {/* <label htmlFor={this.phoneInputId}> */}
            <label>
              <input
                className={styles.inputField}
                placeholder="Phone"
                type="phone"
                name="phone"
                // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={this.state.phone}
                onChange={this.handleInput}
                // id={nanoid()} ??????
              />
            </label>
            <button type="submit" className={styles.button}>
              Add Contact
            </button>
          </form>
        </div>
        <Contacts contacts={this.state.contacts} />
      </section>
    );
  }
}
