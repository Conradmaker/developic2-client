import React from 'react';
import { RecentUserCardCardBox } from './styles';

type RecentUserCardPropsType = {
  data: {
    id: number;
    name: string;
    img: string;
  };
};
export default function RecentUserCard({ data }: RecentUserCardPropsType): JSX.Element {
  return (
    <RecentUserCardCardBox>
      <img src={data.img} alt="avatar" />
      <p>{data.name}</p>
    </RecentUserCardCardBox>
  );
}
