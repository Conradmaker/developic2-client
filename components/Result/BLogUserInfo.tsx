import React from 'react';
import useUser from '../../modules/user/hooks';
import EmptyBlogUserInfo from './EmptyBlogUserInfo';
import { BlogUserInfoBox } from './styles';

type BlogUserInfoPropsType = {
  blogUserInfoData: {
    id: number;
    introduction?: string;
    website?: string;
    mostlyUseModel?: string;
  } | null;
};
export default function BlogUserInfo({
  blogUserInfoData,
}: BlogUserInfoPropsType): JSX.Element {
  const { userData } = useUser();

  if (
    !blogUserInfoData ||
    (!blogUserInfoData.introduction &&
      !blogUserInfoData.mostlyUseModel &&
      !blogUserInfoData.website)
  )
    return (
      <EmptyBlogUserInfo
        blogUserId={blogUserInfoData && blogUserInfoData.id}
        userId={userData && userData.id}
      />
    );
  return (
    <>
      <BlogUserInfoBox>
        {blogUserInfoData.introduction && (
          <div className="user__info">
            <strong>소개</strong>
            <p>{blogUserInfoData.introduction}</p>
          </div>
        )}
        {blogUserInfoData.mostlyUseModel && (
          <div className="user__info">
            <strong>주 사용기기</strong>
            <p>{blogUserInfoData.mostlyUseModel}</p>
          </div>
        )}
        {blogUserInfoData.website && (
          <div className="user__info">
            <strong>웹 사이트</strong>
            <p>{blogUserInfoData.website}</p>
          </div>
        )}
      </BlogUserInfoBox>
    </>
  );
}
