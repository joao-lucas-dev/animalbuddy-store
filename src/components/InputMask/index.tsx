import React, { useState, useRef, useEffect, useCallback } from 'react';
import ReactInputMask, { Props as InputProps } from 'react-input-mask';
import { FiAlertCircle } from 'react-icons/fi';

import { useField } from '@unform/core';

import { Container, Error } from './styles';

interface Props extends InputProps {
  name: string;
  getCep?(value: string): void;
}

const InputMask: React.FC<Props> = ({ name, getCep, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [removeError, setRemoveError] = useState(true);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
    setRemoveError(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);

    if (fieldName === 'zipCode') {
      getCep(inputRef.current?.value);
    }
  }, [fieldName, inputRef, getCep]);

  useEffect(() => {
    setRemoveError(false);
  }, [error]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        ref.setInputValue(value);
      },
      clearValue(ref: any) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container
        removeError={removeError}
        isErrored={!!error}
        isFilled={isFilled}
        isFocused={isFocused}
      >
        <ReactInputMask
          ref={inputRef}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          {...rest}
        />
      </Container>

      {!removeError && error && <Error>{error}</Error>}
    </>
  );
};

export default InputMask;
