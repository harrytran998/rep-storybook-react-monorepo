import { uuidV4 } from '@broker/utils';
import { FormControl, InputAdornment, Input } from '@material-ui/core';
import React from 'react';
import { EnInputProps } from './types';

export const EnInput: React.FC<OutlinedInputProps> = ({
  id = uuidV4(),
  label,
  size = 'large',
  helperText,
  error,
  prefixElement,
  suffixElement,
  ...props
}) => (
  <FormControl fullWidth>
    <Input
      size={size}
      id={id}
      error={error}
      endAdornment={
        suffixElement && (
          <InputAdornment style={{ marginLeft: 0 }} position="end">
            {suffixElement}
          </InputAdornment>
        )
      } />
  </FormControl>
);
