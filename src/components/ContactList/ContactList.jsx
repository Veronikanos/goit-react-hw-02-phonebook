import { nanoid } from 'nanoid';

export const ContactList = ({ contacts, filter, onChange }) => {
  return (
    <>
      <ol>
        {contacts.map(item => (
          <li key={nanoid()}>
            {item.name} {item.number}
          </li>
        ))}
      </ol>
    </>
  );
};
