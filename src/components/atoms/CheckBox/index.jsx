export const CheckBox = ({ value, checked, onChange }) => (
    <label>
      <input type="checkbox" value={value} checked={checked} onChange={onChange} />
      {value}
    </label>
  );