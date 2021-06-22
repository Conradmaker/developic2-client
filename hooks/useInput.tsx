import React, { useState } from 'react';

type ElementType = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

export function useInput(
  initialState = ''
): [
  string,
  (e: React.ChangeEvent<ElementType>) => void,
  React.Dispatch<React.SetStateAction<string>>
] {
  const [value, setValue] = useState(initialState);
  const onChange = (e: React.ChangeEvent<ElementType>) => {
    setValue(e.target.value);
  };
  return [value, onChange, setValue];
}

export default useInput;
