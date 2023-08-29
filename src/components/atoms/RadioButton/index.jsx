export const RadioButton = ({ value, checked, onChange, name }) => (
    <label>
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} />
      {value}
    </label>
  );