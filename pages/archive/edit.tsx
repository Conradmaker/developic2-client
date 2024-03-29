import dynamic from 'next/dynamic';
import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from 'components/Layout';
import CustomInput from 'components/Input/CustomInput';
import TitleLabel from 'components/Label/TitleLabel';
import CustomCheckBox from 'components/Input/CustomCheckBox';
import CustomDateInput from 'components/Input/CustomDateInput';
import ImageDropZone from 'components/Input/ImageDropZone';
import useArchive from 'modules/archive/hooks';
import { useAuth, useInput, useUI } from 'hooks';
import { ArchiveEditContainer } from 'styles/pages/archive';

const ArchiveEditorWithNoSSR = dynamic(
  () => import('../../components/Editor/ArchiveEditor'),
  {
    ssr: false,
  }
);

export default function edit(): JSX.Element {
  const { userData } = useAuth({ replace: false });
  const { addArchive, addArchiveDispatch } = useArchive();
  const router = useRouter();
  const [title, onChangeTitle] = useInput('');
  const [author, onChangeAuthor] = useInput('');
  const [address, onChangeAddress] = useInput('');
  const [webPage, onChangeWebPage] = useInput('');
  const [contact, onChangeContact] = useInput('');
  const [email, onChangeEmail] = useInput('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [cost, setCost] = useState(0);
  const [poster, setPoster] = useState('');
  const [checkFree, setCheckFree] = useState<boolean>(false);
  const [imageList, setImageList] = useState<{ imageId: number; src: string }[]>([]);
  const [description] = useState(
    '세부 전시 내용(작가 정보, 텍스트, 평론, 운영 시간 등)을 작성해 주세요.'
  );

  const { toastOpenDispatch } = useUI();

  const onChangeCost = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setCost(+e.target.value);
    if (+e.target.value !== 0) {
      setCheckFree(false);
    }
  }, []);

  const onChangeStartDate = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  }, []);

  const onChangeEndDate = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  }, []);

  const onChangeCheckFree = useCallback(() => {
    if (checkFree === false) {
      setCost(0);
    }
    setCheckFree(prev => !prev);
  }, [checkFree]);

  const onSubmit = (content: string) => {
    if (!userData) return;
    if (!cost) return toastOpenDispatch('가격을 입력해주세요');
    if (!webPage) return toastOpenDispatch('웹페이지를 입력해주세요');
    if (!contact) return toastOpenDispatch('연락처를 입력해주세요');
    if (!email) return toastOpenDispatch('연락 이메일을 입력해주세요');
    if (!title) return toastOpenDispatch('전시회명을 입력해주세요');
    if (!author) return toastOpenDispatch('작가를 입력해주세요');
    if (!address) return toastOpenDispatch('주소를 입력해주세요');
    if (!content) return toastOpenDispatch('내용을 입력해주세요');
    if (!startDate || !endDate) return toastOpenDispatch('기간을 입력해주세요');
    if (!poster) return toastOpenDispatch('포스터를 입력해주세요');
    addArchiveDispatch({
      cost: +cost,
      webPage,
      contact,
      email,
      title,
      author,
      address,
      description: content,
      startDate,
      endDate,
      poster,
      UserId: userData.id,
      imageList: imageList.map(image => image.imageId),
    });
  };

  useEffect(() => {
    if (addArchive.data) {
      toastOpenDispatch('전시회가 등록되었습니다.');
      router.replace('/archive');
      return;
    }
  }, [addArchive.data]);

  return (
    <Layout>
      <Head>
        <title>아카이브 | 전시회 등록</title>
      </Head>
      <ArchiveEditContainer>
        <TitleLabel title="전시등록" desc="Exhibition Archive" />
        <section>
          <div className="archive__poster">
            <p>포스터 업로드</p>
            <article>
              <ImageDropZone image={poster} setImage={setPoster} axiosPath="poster" />
            </article>
          </div>
          <div className="archive__summary">
            <p>전시 정보 입력</p>
            <article>
              <CustomInput title="전시 제목" value={title} onChange={onChangeTitle} />
              <CustomInput
                title="작가 이름"
                value={author}
                onChange={onChangeAuthor}
                placeholder="여러명일 경우 ',' 로 구분하여 입력해주세요"
              />
              <CustomInput title="전시 장소" value={address} onChange={onChangeAddress} />
              <CustomInput
                title="전시 사이트"
                value={webPage}
                onChange={onChangeWebPage}
              />
              <div className="archive__fee">
                <div>
                  <CustomInput
                    title="입장료"
                    width={380}
                    type="number"
                    value={cost}
                    onChange={onChangeCost}
                  />
                  <small>원</small>
                </div>
                <span>
                  <CustomCheckBox
                    title="무료관람"
                    value={checkFree}
                    onChange={onChangeCheckFree}
                  />
                </span>
              </div>
              <div className="archive__date">
                <span>전시 기간</span>
                <CustomDateInput
                  value={startDate}
                  onChange={onChangeStartDate}
                  max={endDate}
                />
                <small>~</small>
                <CustomDateInput
                  value={endDate}
                  onChange={onChangeEndDate}
                  min={startDate}
                />
              </div>
              <div className="archive__writer">
                <CustomInput
                  type="email"
                  title="이메일"
                  width={380}
                  value={email}
                  onChange={onChangeEmail}
                />
                <CustomInput
                  title="연락처"
                  width={380}
                  value={contact}
                  onChange={onChangeContact}
                  placeholder="010-0000-0000"
                />
              </div>
            </article>
          </div>
          <div className="archive__detail">
            <p>세부 정보 입력</p>
            <article>
              <ArchiveEditorWithNoSSR
                content={description}
                setImageList={setImageList}
                onSubmit={onSubmit}
              />
            </article>
          </div>
        </section>
      </ArchiveEditContainer>
    </Layout>
  );
}
