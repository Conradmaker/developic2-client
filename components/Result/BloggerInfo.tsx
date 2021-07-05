import React, { useState } from 'react';

import { BlogUserData } from 'modules/blog';
import EmptyBlogUserInfo from './EmptyBlogUserInfo';
import { BlogUserInfoBox } from './styles';
import { useUser, useBlog } from 'hooks';

export default function BlogUserInfo(): JSX.Element {
  const { loadBlogUser } = useBlog();
  const { userData } = useUser();
  const [infoState] = useState({
    소개: (loadBlogUser.data as BlogUserData).introduction,
    '주 사용기기': (loadBlogUser.data as BlogUserData).mostlyUseModel,
    '웹 사이트': (loadBlogUser.data as BlogUserData).website,
  });
  if (
    !loadBlogUser.data ||
    (!loadBlogUser.data.introduction &&
      !loadBlogUser.data.mostlyUseModel &&
      !loadBlogUser.data.website &&
      userData)
  )
    return (
      <EmptyBlogUserInfo
        blogUserId={(loadBlogUser.data as BlogUserData).id}
        userId={userData && userData.id}
      />
    );
  const goWebsite = (key: string, value: string) => {
    key === '웹 사이트' ? window.open(`https://${value}`) : null;
  };
  return (
    <>
      <BlogUserInfoBox>
        {Object.entries(infoState).map(
          ([key, value]) =>
            value && (
              <div className="user__info" key={key + value}>
                <strong>{key}</strong>
                <p onClick={() => goWebsite(key, value)}>{value}</p>
              </div>
            )
        )}
      </BlogUserInfoBox>
    </>
  );
}
