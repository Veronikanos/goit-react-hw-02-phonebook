export const Filter = ({ filter, onChange }) => {
  return (
    <label htmlFor="">
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={onChange} />
    </label>
  );
};
