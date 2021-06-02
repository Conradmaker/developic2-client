import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type UseOutsideClickType = (
  el: React.RefObject<HTMLDivElement>,
  initialState: boolean
) => [boolean, Dispatch<SetStateAction<boolean>>];

export const useOutsideClick: UseOutsideClickType = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const pageClickEvent = e => {
      if (el.current !== null && !el.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isActive, el]);

  return [isActive, setIsActive];
};
