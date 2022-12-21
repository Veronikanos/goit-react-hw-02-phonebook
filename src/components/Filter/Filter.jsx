import PropTypes from 'prop-types';

import styles from './Filter.module.css';
export const Filter = ({ filter, onChange }) => {
  return (
    <label>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={onChange}
        className={styles.inputField}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
