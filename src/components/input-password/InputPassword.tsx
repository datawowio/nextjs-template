"use client";

import { useState } from "react";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

import { colors } from "@/config/palette";
import type { InputPasswordProps } from "./types";

export default function InputPassword({
  label,
  disabled,
  ...props
}: InputPasswordProps) {
  const [showPassword, setShowPassword] = useState(false);

  function handleClickShowPassword() {
    setShowPassword((show) => !show);
  }

  function handleMouseDownPassword(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
  }

  return (
    <FormControl variant="outlined" {...props}>
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              disabled={disabled}
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
        label={label}
      />
    </FormControl>
  );
}
