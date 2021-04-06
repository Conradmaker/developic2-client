import { UserItem } from '../../utils/data';
import React from 'react';
import { UserInfoCardBox } from './styles';

type UserInfoCardPropsType = {
  data: UserItem;
};
export default function UserInfoCard({ data }: UserInfoCardPropsType): JSX.Element {
  return (
    <UserInfoCardBox>
      <article>
        <img src={data.avatarImgUrl} alt="avatar" />
        <h3>{data.userName}</h3>
        <p>{data.userIntro}</p>
        <div className="writer__add-info">
          <div>
            <div>구독자 수</div>
            <span>{data.followerCount}</span>
          </div>
          <div>
            <div>글 수</div>
            <span>{data.postCount}</span>
          </div>
        </div>
        <div className="writer__recent-img">
          {data.imgUrl.map(imgItem => (
            <div className="img__box">
              <img src={imgItem} alt="writer-recent-img" />
            </div>
          ))}
        </div>
      </article>
    </UserInfoCardBox>
  );
}
