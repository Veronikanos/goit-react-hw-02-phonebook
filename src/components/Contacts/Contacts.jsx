import styles from './Contacts.module.css';
import React from 'react';
import { nanoid } from 'nanoid';

export const Contacts = ({ contacts, filter, onChange }) => {
  return (
    <div className={styles.container}>
      <h2>Contacts</h2>

      <label htmlFor="">
        <p>Find contacts by name</p>
        <input type="text" value={filter} onChange={onChange} />
      </label>

      <ol>
        {contacts.map(item => (
          <li key={nanoid()}>
            {item.name} {item.number}
          </li>
        ))}
      </ol>
    </div>
  );
};
