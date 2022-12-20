import styles from './Contacts.module.css';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export const Contacts = ({ contacts }) => {
  return (
    <div className={styles.container}>
      <h2>Contacts</h2>
      <ol>
        {contacts.map(item => (
          <li key={nanoid()}>
            {item.name} {item.phone}
          </li>
        ))}
      </ol>
    </div>
  );
};
