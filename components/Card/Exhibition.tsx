import React from 'react';
import { ArchiveDataType } from '../../modules/list';
import { ExhibitionCardBox } from './styles';

interface ExhibitionPropsType {
  data: ArchiveDataType;
}
export default function Exhibition({ data }: ExhibitionPropsType): JSX.Element {
  return (
    <ExhibitionCardBox>
      <img src={data.poster} alt="poster" />
      <article>
        <h5>{data.title}</h5>
        {/* <p>{data.author}</p> */}
        <p>작가작가</p>
        <ul>
          <li>
            <small>From.</small>
            <strong>{data.startDate}</strong>
          </li>
          <li>
            <small>To.</small>
            <strong>{data.endDate}</strong>
          </li>
        </ul>
      </article>
    </ExhibitionCardBox>
  );
}
