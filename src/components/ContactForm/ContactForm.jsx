import styles from './ContactForm.module.css';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
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

  render() {
    return (
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
    );
  }
}
