import React from 'react';
import { UserDataType } from '../../utils/data';
import UserInfoCard from '../Card/UserInfoCard';
import { UserCardListContainer } from './styles';

type UserCardListPropsType = {
  data: UserDataType;
};
export default function UserCardList({ data }: UserCardListPropsType): JSX.Element {
  return (
    <UserCardListContainer>
      {data &&
        data.map(userInfoItem => (
          <UserInfoCard key={userInfoItem.id} data={userInfoItem} />
        ))}
    </UserCardListContainer>
  );
}
