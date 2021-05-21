import React from 'react';
import { MdDoneAll, MdPersonAdd } from 'react-icons/md';
import { Subscriber } from '../../modules/user';
import { RoundCornerBtnBox } from './styles';

type FollowBtnPropsType = {
  text: string;
  isFollow?: Subscriber | undefined;
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
