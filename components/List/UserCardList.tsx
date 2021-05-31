import React from 'react';
import { SearchPageData } from '../../modules/list';
import UserInfoCard from '../Card/UserInfoCard';
import { UserCardListContainer } from './styles';

type UserCardListPropsType = {
  searchUserListData?: SearchPageData['writer'];
};
export default function UserCardList({
  searchUserListData,
}: UserCardListPropsType): JSX.Element {
  return (
    <UserCardListContainer>
      {searchUserListData &&
        searchUserListData.map(userInfoItem => (
          <UserInfoCard key={userInfoItem.id} userInfoData={userInfoItem} />
        ))}
    </UserCardListContainer>
  );
}
