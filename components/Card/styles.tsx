import styled from '@emotion/styled';

export const PopularPostCardBox = styled.div`
  display: inline-block;
  cursor: pointer;
  img {
    height: 210px;
  }
  article {
    width: 100%;
    font-family: 'Noto Serif KR';
    padding: 5px 5px;
    margin-top: 1px;
    h5 {
      color: ${({ theme }) => theme.textColor.initial};
      font-size: 20px;
    }
    p {
      margin: 10px 0;
      color: ${({ theme }) => theme.textColor.lighten};
      font-size: 16px;
    }
    ul {
      max-width: 300px;
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }
  }
  &:hover {
    /* border: 0.5px solid ${({ theme }) => theme.grayScale[4]}; */
    box-shadow: 0 0 10px #eee;
  }
`;

export const UserProfileCardBox = styled.div`
  font-family: 'Noto Serif KR';
  max-width: 245px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 130px;
  img {
    border-radius: 35px;
    width: 70px;
    height: 70px;
    margin-bottom: 15px;
  }
  p {
    color: ${({ theme }) => theme.textColor.initial};
    font-weight: 500;
    font-size: 18px;
  }
  span {
    color: ${({ theme }) => theme.textColor.lighten};
    font-size: 14px;
  }
  &:hover {
    img {
      box-shadow: 0 0 3px ${({ theme }) => theme.grayScale[1]};
    }
    p {
      text-decoration: underline;
    }
  }
`;

export const HashTagBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 13px;
  font-family: 'Noto Serif KR';
  font-size: 14px;
  border: solid 1px ${({ theme }) => theme.grayScale[2]};
  color: ${({ theme }) => theme.grayScale[1]};
  &:hover {
    background-color: ${({ theme }) => theme.grayScale[4]};
  }
`;

export const ExhibitionCardBox = styled.div`
  cursor: pointer;
  font-family: 'Noto Serif KR';
  width: 233px;
  img {
    width: 100%;
    height: 330px;
  }
  article {
    margin-top: 10px;
    padding: 5px;
    color: ${({ theme }) => theme.textColor.initial};
    h5 {
      font-size: 20px;
    }
    p {
      display: block;
      margin: 10px 0;
      font-size: 16px;
    }
    ul {
      font-family: 'Montserrat';
      li {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        line-height: 1.2;
        small {
        }
        strong {
        }
      }
    }
  }
`;

export const CommonPostCardBox = styled.li`
  font-family: 'Noto Serif KR';
  font-size: ${({ theme }) => theme.fontSize.base};
  text-align: justify;
  position: relative;
  width: 100%;
  line-height: 1.5;
  article {
    cursor: pointer;
    width: 100%;
    & > img {
      width: 100%;
    }
    h3 {
      font-weight: 600;
      font-size: ${({ theme }) => theme.fontSize.medium};
      margin: 0.857em 0 0.857em 0;
    }
    p {
      color: ${({ theme }) => theme.grayScale[1]};
      margin-bottom: 1.786em;
    }
  }
  article:hover h3 {
    transition: all 0.25s ease-in-out;
    color: ${({ theme }) => theme.primary[1]};
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20px;
    padding: 0.714em 0;
  }
`;

export const UserAvatarWithNameBox = styled.div`
  cursor: pointer;
  img {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    margin-right: 0.357em;
  }
  strong {
    font-weight: 400;
    margin-right: 0.143em;
  }
  span {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

export const StatsBox = styled.div`
  width: 32%;
  font-size: ${({ theme }) => theme.fontSize.small};
  .post__likes {
    svg {
    }
  }
  .post__views {
    svg {
    }
  }
  svg {
    color: ${({ theme }) => theme.grayScale[1]};
    padding-top: 0.071em;
    margin-right: 0.214em;
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;

export const UserInfoCardBox = styled.li`
  background-color: #fff;
  border: solid 1px #efefef;
  position: relative;
  width: 100%;
  article {
    display: flex;
    flex-direction: column;
    justify-content: Center;
    align-items: center;
    width: 100%;
    &:hover h3 {
      color: ${({ theme }) => theme.primary[1]};
    }
    > img {
      margin-top: 2.357em;
      border-radius: 75px;
      width: 150px;
      height: 150px;
      margin-bottom: 1.071em;
      cursor: pointer;
    }
    h3 {
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      font-size: ${({ theme }) => theme.fontSize.xl};
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};
      margin: 0.875em 0;
    }
    p {
      cursor: pointer;
      font-size: ${({ theme }) => theme.fontSize.medium};
      color: ${({ theme }) => theme.textColor.initial};
      margin-bottom: 2em;
    }

    .writer__add-info {
      color: ${({ theme }) => theme.textColor.lighten};
      font-size: ${({ theme }) => theme.fontSize.base};
      display: flex;
      justify-content: space-between;
      width: 40%;
      margin-bottom: 2.357em;
      div {
        display: block;
        text-align: center;
        div {
          margin-bottom: 0.357em;
          font-weight: 600;
        }
        span {
          font-weight: ${({ theme }) => theme.fontWeight.regular};
        }
      }
    }
    .writer__recent-img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      .img__box {
        width: 33.3%;
        height: 90px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
export const DrawerPostCardContainer = styled.li`
  cursor: pointer;
  font-family: 'Noto Serif KR';
  width: 270px;
  height: 300px;
  background-color: ${({ theme }) => theme.background.modal};
  border: solid 1px ${({ theme }) => theme.grayScale[3]};
  position: relative;
  transition: all 0.3s;
  & > img {
    width: 100%;
    height: 147px;
  }
  .content {
    background-color: ${({ theme }) => theme.background.modal};
    padding: 20px 15px;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 235px;
    height: 183px;
    & > img {
      position: absolute;
      top: -20px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    .writer {
      margin: 5px 0 10px 0;
      strong {
        color: ${({ theme }) => theme.textColor.initial};
        font-size: 14px;
      }
      small {
        color: ${({ theme }) => theme.textColor.lighten};
        font-size: 12px;
      }
    }
    article {
      height: 129.815px;
      display: flex;
      flex-direction: column;
      h3 {
        font-weight: 600;
        color: ${({ theme }) => theme.textColor.initial};
        font-size: 18px;
      }
      p:nth-child(2) {
        flex: 1;
        overflow: hidden;
      }
      p:nth-child(3) {
        height: 16px;
      }
      p {
        margin: 10px 0;
        line-height: 1.3;
        color: ${({ theme }) => theme.textColor.lighten};
        font-size: 12px;
      }
      .circle {
        position: absolute;
        bottom: 15px;
        right: 15px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.primary[1]};
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme.primary[1]};
        font-size: 35px;
        transition: 0.3s;
      }
      &::before {
        position: absolute;
        left: 0;
        background: ${({ theme }) => theme.grayScale[3]};
        content: '';
        width: 1px;
        height: 90px;
      }
    }
  }
  &:hover {
    transform: translateY(-3px);
    article > .circle {
      color: ${({ theme }) => theme.textColor.reverse};
      background: ${({ theme }) => theme.primary[1]};
    }
    .delete__btn {
      display: block;
    }
  }
  .delete__btn {
    display: none;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.background.modal};
    padding: 3px 20px;
    outline: none;
    font-size: 12px;
    border: 1px solid ${({ theme }) => theme.grayScale[2]};
    color: ${({ theme }) => theme.grayScale[2]};
    &:hover {
      background-color: ${({ theme }) => theme.grayScale[4]};
    }
  }
`;

export const UnfinishedPostCardContainer = styled.div`
  font-family: 'Noto Serif KR';
  width: 350px;
  background-color: ${({ theme }) => theme.background.modal};
  margin-bottom: 30px;
  padding: 15px;
  transition: 0.3s;
  article {
    color: ${({ theme }) => theme.textColor.initial};
    height: 280px;
    display: flex;
    flex-direction: column;
    h2 {
      line-height: 2.22;
      font-size: 18px;
      height: 40px;
      margin-bottom: 10px;
    }
    p {
      color: ${({ theme }) => theme.textColor.lighten};
      line-height: 2.5;
      font-size: 14px;
      flex: 1;
      overflow: hidden;
    }
    span {
      align-self: flex-end;
      color: ${({ theme }) => theme.textColor.lighten};
      height: 20px;
      font-size: 14px;
      line-height: 1.43;
    }
  }
  .btn__group {
    margin-top: 20px;
    width: 100%;
    justify-content: flex-end;
    display: flex;
    button + button {
      margin-left: 25px;
    }
  }
  &:hover {
    transform: translateY(-3px);
  }
`;

export const PhotoBinderCardBox = styled.div`
  width: 350px;
  cursor: pointer;
  transition: 0.3s;
  .img__box {
    height: 210px;
    width: 100%;
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(12, 1fr);

    & > div {
      overflow: hidden;
      & > img {
        transition: 0.3s;
        min-width: 100%;
        min-height: 100%;
      }
    }
    & > div:nth-child(1) {
      grid-row: 1/ 13;
      grid-column: 1/ 5;
    }
    & > div:nth-child(2) {
      grid-row: 1/ 8;
      grid-column: 5/ 8;
    }
    & > div:nth-child(3) {
      grid-row: 1/ 6;
      grid-column: 8/ 11;
    }
    & > div:nth-child(4) {
      grid-row: 8/ 13;
      grid-column: 5/ 8;
    }
    & > div:nth-child(5) {
      grid-row: 6/ 13;
      grid-column: 8/ 11;
    }
  }
  article {
    color: ${({ theme }) => theme.textColor.lighten};
    height: 84px;
    padding: 10px 0;
    display: flex;
    align-items: center;
    .left {
      flex: 1;
      height: 100%;
      display: flex;
      flex-direction: column;
      h3 {
        color: ${({ theme }) => theme.textColor.initial};
        margin-bottom: 5px;
      }
      p {
        flex: 1;
        font-size: 14px;
      }
    }
    & > p {
      margin-left: 5px;
      font-size: 14px;
    }
  }
  &:hover {
    transform: translatey(-3px);
    .img__box > div > img {
      transform: scale(1.1);
    }
    article > .left > h3 {
      text-decoration: underline;
    }
  }
`;
