import React from 'react';
import { TitleLabelBox } from './styles';

type TitleLabelPropsType = {
  title: string;
  desc?: string;
};
function TitleLabel({ title = '', desc = '' }: TitleLabelPropsType): JSX.Element {
  return (
    <TitleLabelBox className="title__label">
      <div>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </TitleLabelBox>
  );
}
export default React.memo(TitleLabel);
