import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerField = ({ name, value, onChange }) => {
  return (
    <DatePicker
      dateFormat="yyyy/MM/dd"
      selected={ (value && new Date(value)) || null }
      onChange={ (val) => {
        onChange(name, val);
      } }
    />
  );
};

export default DatePickerField;
