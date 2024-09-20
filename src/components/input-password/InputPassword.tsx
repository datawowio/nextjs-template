"use client";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useState } from "react";

import { colors } from "@/config/palette";

import type { MouseEvent } from "react";
import type { InputPasswordProps } from "./types";

export default function InputPassword({
  dataTestId = "input-password",
  disabled,
  label,
  ...props
}: InputPasswordProps) {
  // Hook
  const [showPassword, setShowPassword] = useState(false);

  // Event handlers
  function handleClickShowPassword() {
    setShowPassword((show) => !show);
  }

  function handleMouseDownPassword(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
  }

  return (
    <FormControl {...props} data-test-id={dataTestId} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput
        disabled={disabled}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              disabled={disabled}
              edge="end"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? (
                <VisibilityOff
                  sx={{
                    color: disabled
                      ? colors.icon.disabled.base
                      : colors.icon.placeholder.default,
                  }}
                />
              ) : (
                <Visibility
                  sx={{
                    color: disabled
                      ? colors.icon.disabled.base
                      : colors.icon.placeholder.default,
                  }}
                />
              )}
            </IconButton>
          </InputAdornment>
        }
        id="outlined-adornment-password"
        label={label}
        type={showPassword ? "text" : "password"}
      />
    </FormControl>
  );
}
