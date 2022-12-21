import styles from './Filter.module.css';
export const Filter = ({ filter, onChange }) => {
  return (
    <label>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={onChange}
        class={styles.inputField}
      />
    </label>
  );
};
