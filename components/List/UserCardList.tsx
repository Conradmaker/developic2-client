import React from 'react';
import { UserDataType } from '../../utils/userData';
import UserInfoCard from '../Card/UserInfoCard';
import { ListContainer } from './styles';

type UserCardListPropsType = {
  data: UserDataType;
};
export default function UserCardList({ data }: UserCardListPropsType): JSX.Element {
  return (
    <ListContainer>
      {data &&
        data.map(userInfoItem => (
          <UserInfoCard key={userInfoItem.id} data={userInfoItem} />
        ))}
    </ListContainer>
  );
}
