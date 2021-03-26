import React from 'react';
import { ExhibitionCardBox } from './styles';

export default function Exhibition(): JSX.Element {
  return (
    <ExhibitionCardBox>
      <img src="https://www.m-i.kr/news/photo/202009/748842_528632_4051.jpg" alt="" />
      <article>
        <h5>1번 전시회</h5>
        <p>무슨작가</p>
        <ul>
          <li>
            <small>From.</small>
            <strong>2020.03.30</strong>
          </li>
          <li>
            <small>To.</small>
            <strong>2020.03.30</strong>
          </li>
        </ul>
      </article>
    </ExhibitionCardBox>
  );
}
