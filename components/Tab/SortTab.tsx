import React, { useState } from 'react';
import { SortTabBox } from './styles';

const ListOptions = {
  Popular: 'popular',
  Recent: 'recent',
};
export default function SortTab(): JSX.Element {
  const [active, setActiveState] = useState(ListOptions.Popular);

  return (
    <SortTabBox>
      <ul>
        <li
          className={`list__Option ${active === ListOptions.Popular ? 'active' : ''}`}
          onClick={() => setActiveState(ListOptions.Popular)}
        >
          인기순
        </li>
        <li
          className={`list__Option ${active === ListOptions.Recent ? 'active' : ''}`}
          onClick={() => setActiveState(ListOptions.Recent)}
        >
          최신순
        </li>
      </ul>
    </SortTabBox>
  );
}
