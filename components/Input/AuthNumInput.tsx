import React, { useEffect } from 'react';

type AuthNumInputPropsType = {
  authNum: string;
  setAuthNum: (state: string) => void;
  authIndex: number;
};
export default function AuthNumInput({
  authNum,
  setAuthNum,
  authIndex,
}: AuthNumInputPropsType): JSX.Element {
  if (document.activeElement === document.getElementById(`input__${authIndex}`)) {
    if (authIndex !== 1) {
      setAuthNum('');
    }
  }
  const onClickInput = () => {
    setAuthNum('');
  };
  const onTypingNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      authNum.length === 0 &&
      parseInt(e.target.value) >= 0 &&
      parseInt(e.target.value) <= 9
    ) {
      setAuthNum(e.target.value);
      const nextIndex = authIndex < 5 ? authIndex + 1 : 1;
      const nextInput = document.getElementById(`input__${nextIndex}`);
      nextInput?.focus();
    }
  };
  useEffect(() => {
    setAuthNum('');
  }, []);
  return (
    <span>
      <input
        id={`input__${authIndex}`}
        type="text"
        value={authNum}
        onChange={onTypingNum}
        onClick={onClickInput}
      />
    </span>
  );
}
