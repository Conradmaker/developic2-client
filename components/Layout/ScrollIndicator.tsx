import React, { useEffect, useState } from 'react';
import { ScrollBar } from './styles';
import _throttle from 'lodash/throttle';

export default function ScrollIndicator(): JSX.Element {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const indicator = _throttle(() => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      const contentHeight = scrollHeight - clientHeight;
      const percent = (scrollTop / contentHeight) * 100;
      setWidth(percent);
    }, 200);

    window.addEventListener('scroll', indicator);
    return () => {
      window.removeEventListener('scroll', indicator);
    };
  }, []);

  return <ScrollBar width={width}></ScrollBar>;
}
