import React from 'react';
import { UserProfileCardBox } from './styles';

export default function UserProfileCard(): JSX.Element {
  return (
    <UserProfileCardBox>
      <img
        src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
        alt="avatar"
      />
      <p>첫번째 유저</p>
      <span>CEO at ABC Corporation</span>
    </UserProfileCardBox>
  );
}
