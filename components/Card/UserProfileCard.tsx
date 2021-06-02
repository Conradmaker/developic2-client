import React from 'react';
import { PostUser } from '../../modules/list';
import { UserProfileCardBox } from './styles';

interface UserProfileCarePropsType {
  userData: PostUser;
}
export default function UserProfileCard({
  userData,
}: UserProfileCarePropsType): JSX.Element {
  return (
    <UserProfileCardBox>
      <img src={userData.avatar} alt="avatar" />
      <p>{userData.nickname}</p>
      <span>{userData.introduce}</span>
    </UserProfileCardBox>
  );
}
