import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = text => {
    const newObj = {
      id: nanoid(),
      name: text,
    };

    this.setState(prevState => ({
      contacts: [newObj, ...prevState.contacts],
    }));

    console.log(this.state);
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.addContact(this.state.name);

    this.setState({ name: '' }); //reset input
  };

  render() {
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor={this.nameInputId}>
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={this.state.name}
                onChange={this.handleInput}
                id={nanoid()}
              />
              <button type="submit">Add Contact</button>
            </label>
          </form>
        </div>
        <div>
          <h2>Contacts</h2>
          <ul>
            {this.state.contacts.map(item => (
              <li key={nanoid()}>{item.name}</li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
