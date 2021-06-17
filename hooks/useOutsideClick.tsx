import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

type UseOutsideClickType = (
  el: React.RefObject<HTMLDivElement>,
  initialState: boolean
) => [boolean, Dispatch<SetStateAction<boolean>>];

export const useOutsideClick: UseOutsideClickType = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const pageClickEvent = (e: MouseEvent) => {
      if (el.current !== null && !el.current.contains(e.target as Node)) {
        setIsActive(!isActive);
      }
    };
    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }
    return () => window.removeEventListener('click', pageClickEvent);
  }, [isActive, el]);

  return [isActive, setIsActive];
};
