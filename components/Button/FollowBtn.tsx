import React from 'react';
import { MdDoneAll, MdPersonAdd } from 'react-icons/md';
import { FollowBtnBox } from './styles';

type FollowBtnPropsType = {
  text: string;
  isFollow?: undefined | boolean;
  onClick: () => void;
};
export default function FollowBtn({
  text,
  isFollow,
  onClick,
}: FollowBtnPropsType): JSX.Element {
  return (
    <FollowBtnBox onClick={onClick} isFollow={isFollow}>
      {isFollow ? <MdPersonAdd /> : <MdDoneAll />}
      {text}
    </FollowBtnBox>
  );
}
