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
