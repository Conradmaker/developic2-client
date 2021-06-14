import React from 'react';
import { PageLabelBox } from './styles';

type PageLabelPropsType = {
  text: string;
  desc?: string;
  width?: number;
};
function PageLabel({
  text = '',
  desc = '',
  width = 400,
}: PageLabelPropsType): JSX.Element {
  return (
    <PageLabelBox className="page__label" width={width}>
      <h1>{text}</h1>
      <p>{desc}</p>
    </PageLabelBox>
  );
}
export default React.memo(PageLabel);
