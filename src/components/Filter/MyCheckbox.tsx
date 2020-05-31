import React, { ChangeEventHandler } from 'react';

interface MyCheckboxProps {
  className?: string;
  label: string;
  isSelected: boolean;
  onCheckboxChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
}

const MyCheckbox: React.FC<MyCheckboxProps> = ({ children, ...props }) => {
  const { label, isSelected, onCheckboxChange, value } = { ...props };

  return (
    <div className="form-check">
      <label>
        <input
          type="checkbox"
          name={label}
          checked={isSelected}
          onChange={onCheckboxChange}
          className="form-check-input"
          value={value}
        />
        {label}
      </label>
    </div>
  );
};

export default MyCheckbox;
