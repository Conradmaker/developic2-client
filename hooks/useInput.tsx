import { useState } from 'react';

export default function useInput(
  initialState = ''
): [string, (e: any) => void, React.Dispatch<React.SetStateAction<string>>] {
  const [value, setValue] = useState(initialState);
  const onChange = e => {
    setValue(e.target.value);
  };
  return [value, onChange, setValue];
}
