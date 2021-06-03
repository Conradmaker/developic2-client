import React from 'react';
import { MdDoneAll, MdPersonAdd } from 'react-icons/md';
import { RoundCornerBtnBox } from './styles';

type FollowBtnPropsType = {
  text: string;
  isFollow: boolean;
  onClick?: () => void;
};
export default function FollowBtn({
  text,
  isFollow,
  onClick,
}: FollowBtnPropsType): JSX.Element {
  return (
    <RoundCornerBtnBox onClick={onClick} isFollow={isFollow}>
      {isFollow ? <MdDoneAll /> : <MdPersonAdd />}
      {text}
    </RoundCornerBtnBox>
  );
}
