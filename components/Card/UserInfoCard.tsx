import React from 'react';
import Link from 'next/link';
import { UserInfoCardBox } from './styles';
import { PostUser } from '../../modules/list';
import { useThemeState } from '../../hooks/ThemeContext';

type UserInfoCardPropsType = {
  userInfoData: PostUser;
};
export default function UserInfoCard({
  userInfoData,
}: UserInfoCardPropsType): JSX.Element {
  const currentTheme = useThemeState();

  return (
    <Link href={`/${userInfoData.id}/post`}>
      <UserInfoCardBox currentTheme={currentTheme}>
        <article>
          <img src={userInfoData.avatar} alt="avatar" />
          <h3>{userInfoData.nickname}</h3>
          <p>{userInfoData.introduce}</p>
          <div className="writer__add-info">
            <div>
              <div>구독자 수</div>
              <span>{userInfoData.subscribers?.length}</span>
            </div>
            <div>
              <div>글 수</div>
              <span>{userInfoData.Posts?.length}</span>
            </div>
          </div>
          <div className="writer__recent-img">
            {userInfoData.Posts &&
              userInfoData.Posts.slice(0, 3).map(imgItem => (
                <li className="img__box" key={imgItem.id}>
                  <img src={imgItem.thumbnail} alt="recent_Img" />
                </li>
              ))}
          </div>
        </article>
      </UserInfoCardBox>
    </Link>
  );
}
