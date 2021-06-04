import React, { useState } from 'react';
import { BlogUserData } from '../../modules/blog';
import useBlog from '../../modules/blog/hooks';
import useUser from '../../modules/user/hooks';
import EmptyBlogUserInfo from './EmptyBlogUserInfo';
import { BlogUserInfoBox } from './styles';

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

  return (
    <>
      <BlogUserInfoBox>
        {Object.entries(infoState).map(
          ([key, value]) =>
            value && (
              <div className="user__info">
                <strong>{key}</strong>
                <p>{value}</p>
              </div>
            )
        )}
      </BlogUserInfoBox>
    </>
  );
}
