import dayjs from 'dayjs';
import Link from 'next/link';
import React, { useCallback, useState } from 'react';
import useInput from '../../hooks/useInput';
import useModal from '../../hooks/useModal';
import { Comment } from '../../modules/post';
import usePost from '../../modules/post/hooks';
import useUser from '../../modules/user/hooks';
import ConfirmRemoveModal from '../Modal/ConfirmRemoveModal';
import { BlogCommentCardBox } from './styles';

type BlogCommentCardPropsType = {
  commentData: Comment;
};

export default function BlogCommentCard({
  commentData,
}: BlogCommentCardPropsType): JSX.Element {
  const { updateCommentDispatch, removeCommentDispatch } = usePost();
  const [editMode, setEditMode] = useState(false);
  const [editedComment, onChangeEditedComment, setEditedComment] = useInput(
    commentData.content
  );
  const { userData } = useUser();
  const [RemoveCommentModal, toggleModal] = useModal(ConfirmRemoveModal, {
    title: '댓글삭제',
    description: '댓글을 삭제하시겠습니까?',
    onConfirm: useCallback(() => {
      removeCommentDispatch(commentData.id);
    }, []),
  });

  const onToggleEditMode = useCallback(() => {
    setEditMode(current => !current);
    setEditedComment(commentData.content);
  }, [commentData.content]);

  const onUpdateComment = useCallback(() => {
    updateCommentDispatch({
      CommentId: commentData.id,
      content: editedComment,
      mentionedUser: null,
    });
    setEditMode(false);
  }, [editedComment]);

  return (
    <BlogCommentCardBox>
      <section>
        <article>
          <Link href={`/${commentData.User.id}/post`}>
            <img src={commentData.User.avatar} alt="user_avatar" />
          </Link>
          <div>
            <strong>{commentData.User.nickname}</strong>
            <p>{dayjs(commentData.updatedAt).format('YYYY년 MM월 DD일')}</p>
          </div>
        </article>
        <div>
          {userData ? (
            userData.id === commentData.UserId ? (
              <>
                <span onClick={onToggleEditMode}>{editMode ? '취소' : '수정'}</span>
                {editMode ? (
                  <span onClick={onUpdateComment}>적용</span>
                ) : (
                  <span onClick={toggleModal}>삭제</span>
                )}
              </>
            ) : (
              <span>신고</span>
            )
          ) : null}
        </div>
      </section>
      {editMode ? (
        <form className="edit__form">
          <textarea value={editedComment} onChange={onChangeEditedComment}></textarea>
        </form>
      ) : (
        <p>{commentData.content}</p>
      )}
      <RemoveCommentModal />
    </BlogCommentCardBox>
  );
}
