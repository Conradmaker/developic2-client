import Link from 'next/link';
import React from 'react';
import { BsBoxArrowInDownRight } from 'react-icons/bs';
import { PostUser } from '../../modules/list';
import { UserProfileCardBox } from './styles';

interface UserProfileCarePropsType {
  userData: PostUser;
}
export default function UserProfileCard({
  userData,
}: UserProfileCarePropsType): JSX.Element {
  return (
    <Link href={`/${userData.id}/post`}>
      <UserProfileCardBox>
        <img src={userData.avatar} alt="avatar" />
        <p>{userData.nickname}</p>
        <span>{userData.introduce}</span>
        <div className="move__btn">
          <span>방문</span>
          <BsBoxArrowInDownRight />
        </div>
      </UserProfileCardBox>
    </Link>
  );
}
