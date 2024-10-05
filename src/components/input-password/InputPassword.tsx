"use client";

import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

import type { MouseEvent } from "react";
import type { InputPasswordProps } from "./types";

export default function InputPassword({
  dataTestId = "input-password",
  errorMessage = "",
  formControlProps = {
    error: false,
  },
  outlinedInputProps = {
    id: "input-password",
    label: "Password",
  },
}: InputPasswordProps) {
  // Initial values
  const { error, ...restFormControlProps } = formControlProps;
  const { id, label, ...restOutlinedProps } = outlinedInputProps;

  // Hook
  const [showPassword, setShowPassword] = useState(false);

  // Event handlers
  function handleClick() {
    setShowPassword((showPassword) => !showPassword);
  }

  function handleMouseDown(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
  }

  return (
    <FormControl
      {...restFormControlProps}
      data-testid={dataTestId}
      error={error}
      fullWidth
      variant="outlined"
    >
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        {...restOutlinedProps}
        aria-describedby={`${id}-helper-text`}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              edge="end"
              onClick={handleClick}
              onMouseDown={handleMouseDown}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        id={id}
        label={label}
        type={showPassword ? "text" : "password"}
      />
      <FormHelperText id={`${id}-helper-text`}>
        {error ? errorMessage : ""}
      </FormHelperText>
    </FormControl>
  );
}
