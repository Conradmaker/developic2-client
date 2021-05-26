import React from 'react';
import { PostUser } from '../../modules/list';
import { UserProfileCardBox } from './styles';

interface UserProfileCarePropsType {
  data: PostUser;
}
export default function UserProfileCard({ data }: UserProfileCarePropsType): JSX.Element {
  return (
    <UserProfileCardBox>
      <img src={data.avatar} alt="avatar" />
      <p>{data.nickname}</p>
      <span>{data.introduce}</span>
    </UserProfileCardBox>
  );
}
