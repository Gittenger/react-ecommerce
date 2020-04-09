import React from "react";

import {
  InputGroup,
  FormInputInput,
  FormInputLabel,
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <InputGroup>
    <FormInputInput onChange={handleChange} {...otherProps} />
    {label ? (
      <FormInputLabel
        className={`${otherProps.value.length > 0 ? "shrink" : ""}`}
      >
        {label}
      </FormInputLabel>
    ) : null}
  </InputGroup>
);

export default FormInput;
