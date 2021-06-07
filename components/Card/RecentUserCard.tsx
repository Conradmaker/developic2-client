import dayjs from 'dayjs';
import Link from 'next/link';
import React from 'react';
import { PostUser } from '../../modules/list';
import { RecentUserCardCardBox } from './styles';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.locale('ko');
dayjs.extend(relativeTime);

type RecentUserCardPropsType = {
  userData: PostUser;
};

export default function RecentUserCard({
  userData,
}: RecentUserCardPropsType): JSX.Element {
  return (
    <Link href={`/${userData.id}/post`}>
      <RecentUserCardCardBox>
        <div>
          <img src={userData.avatar} alt="avatar" />
          <p>{userData.nickname}</p>
        </div>
        <p>{dayjs(userData.last_post).fromNow()}</p>
      </RecentUserCardCardBox>
    </Link>
  );
}
