import styled from '@emotion/styled';

export const PopularPostCardBox = styled.div`
  /* background: ${({ theme }) => theme.background.modal}; */
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
