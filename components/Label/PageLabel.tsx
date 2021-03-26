import React from 'react';
import { PageLabelBox } from './styles';

type PageLabelPropsType = {
  text: string;
  desc?: string;
  width?: number;
};
export default function PageLabel({
  text = '',
  desc = '',
  width = 400,
}: PageLabelPropsType): JSX.Element {
  return (
    <PageLabelBox width={width}>
      <h1>{text}</h1>
      <p>{desc}</p>
    </PageLabelBox>
  );
}
