import styled from '@emotion/styled';

export const PopularPostCardBox = styled.div`
  display: inline-block;
  cursor: pointer;
  margin: 0 20px 50px 0;
  overflow: hidden;
  max-width: 400px;
  padding: 5px 5px;
  display: flex;
  flex-direction: column;
  img {
    border: 1px solid ${({ theme }) => theme.grayScale[3]};
    flex: 1;
    max-height: 150px;
    object-fit: cover;
  }
  article {
    width: 100%;
    font-family: 'Noto Serif KR';
    h5 {
      margin: 5px 0;
      color: ${({ theme }) => theme.textColor.initial};
      font-size: 16px;
    }
    p {
      margin-top: 10px;
      color: ${({ theme }) => theme.textColor.lighten};
      font-size: 14px;
    }
    ul {
      max-width: 300px;
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }
  }
  transition: 0.2s ease-in-out;
  .like__box {
    margin: 5px 0 10px 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    small {
      display: flex;
      align-items: center;
      font-family: 'Montserrat';
      margin-left: 20px;
      svg {
        font-size: 14px;
        fill: ${({ theme }) => theme.grayScale[2]};
      }
      span {
        display: inline-block;
        margin-left: 5px;
        font-size: 12px;
        color: ${({ theme }) => theme.grayScale[2]};
      }
    }
  }
  &:hover {
    background-color: ${({ theme }) => theme.grayScale[4]};
  }
`;

export const UserProfileCardBox = styled.div`
  font-family: 'Noto Serif KR';
  width: 220px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 175px;
  margin: 25px 0;
  img {
    border-radius: 35px;
    width: 65px;
    height: 65px;
    object-fit: cover;
    margin: 15px;
    transition: all 0.3s;
  }
  p {
    color: ${({ theme }) => theme.textColor.initial};
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 12px;
    transition: all 0.3s;
  }
  span {
    text-align: center;
    color: ${({ theme }) => theme.textColor.lighten};
    font-size: 12px;
    line-height: 1.4;
  }
  .move__btn {
    transition: all 0.3s;
    opacity: 0;
    margin-top: 15px;
    position: relative;
    font-size: 16px;
    display: flex;
    align-items: center;
    svg {
      padding-top: 2px;
      fill: ${({ theme }) => theme.textColor.lighten};
    }
  }

  &:hover {
    img {
      box-shadow: 0 0 10px ${({ theme }) => theme.grayScale[2]};
    }
    .move__btn {
      opacity: 1;
    }
  }
`;

export const RecentUserCardCardBox = styled.li`
  div {
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 70px;
      height: 70px;
      object-fit: cover;
      border-radius: 50%;
      cursor: pointer;
      transition: 0.25s;
      &:hover {
        transform: scale(1.04);
        box-shadow: 0 0 10px ${({ theme }) => theme.grayScale[3]};
        & + p {
          color: ${({ theme }) => theme.primary[1]};
        }
      }
    }
    p {
      color: ${({ theme }) => theme.textColor.initial};
      font-size: ${({ theme }) => theme.fontSize.base};
      margin-top: 10px;
    }
  }
  & > p {
    text-align: center;
    margin-top: 10px;
    font-size: 12px;
    color: ${({ theme }) => theme.grayScale[1]};
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    div {
      width: 80px;
      img {
        width: 50px;
        height: 50px;
      }
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
    background-color: ${({ theme }) => theme.grayScale[3]};
  }
`;

export const ExhibitionCardBox = styled.div`
  cursor: pointer;
  font-family: 'Noto Serif KR';
  width: 230px;
  position: relative;
  margin: 25px 0;
  img {
    width: 100%;
    height: 258px;
    object-fit: contain;
  }
  article {
    margin-top: 10px;
    padding: 5px;
    color: ${({ theme }) => theme.textColor.initial};
    h5 {
      font-size: 16px;
      line-height: 1.2;
    }
    p {
      text-align: right;
      display: block;
      margin: 10px 0;
      font-size: 14px;
    }
    ul {
      font-family: 'Montserrat';
      li {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        line-height: 1.2;
      }
    }
  }
  .cost__box {
    font-family: 'Montserrat';
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    padding: 2px 10px;
    border-radius: 32px;
    transition: 0.2s;
    background-color: ${({ theme }) => theme.background.initial};
    border: 1px solid ${({ theme }) => theme.primary[1]};
    color: ${({ theme }) => theme.textColor.initial};
  }
  &:hover {
    h5 {
      text-decoration: underline;
    }
    .cost__box {
      background-color: ${({ theme }) => theme.primary[1]};
      border: 1px solid ${({ theme }) => theme.background.initial};
      color: ${({ theme }) => theme.background.initial};
    }
  }
`;

export const CommonPostCardBox = styled.li`
  font-family: 'Noto Serif KR';
  color: ${({ theme }) => theme.textColor.initial};
  font-size: ${({ theme }) => theme.fontSize.base};
  text-align: start;
  position: relative;
  line-height: 1.5;
  width: 273px;
  margin-bottom: 30px;
  article {
    cursor: pointer;
    width: 100%;
    & > img {
      display: block;
      width: 100%;
      height: 160px;
      object-fit: cover;
    }
    h3 {
      font-weight: 400;
      font-size: ${({ theme }) => theme.fontSize.medium};
      margin: 0.857em 0 0.857em 0;
    }
    p {
      height: 42px;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
      color: ${({ theme }) => theme.grayScale[2]};
      margin-bottom: 1.786em;
    }
    &:hover h3 {
      transition: all 0.25s ease-in-out;
      color: ${({ theme }) => theme.primary[1]};
    }
  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .stats {
      font-family: 'Montserrat';
      width: 32%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: ${({ theme }) => theme.fontSize.small};
      p {
        display: flex;
        align-items: center;
        justify-content: space-between;
        svg {
          padding-bottom: 0.071em;
          margin-right: 0.214em;
          font-size: ${({ theme }) => theme.fontSize.base};
          color: ${({ theme }) => theme.grayScale[1]};
        }
      }
    }
  }
  .write_date {
    margin-top: 8px;
    text-align: right;
    color: ${({ theme }) => theme.grayScale[1]};
    font-size: 12px;
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    width: 100%;
    background-color: ${({ theme }) => theme.background.modal};
    padding: 50px 20px 60px 20px;
    article {
      cursor: pointer;
      width: 100%;
      & > img {
        width: 100%;
        height: auto;
        min-height: 160px;
        max-height: 400px;
        object-fit: cover;
      }
    }
  }
`;

export const UserAvatarWithNameBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  img {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    margin-right: 0.357em;
  }
  strong {
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    margin-right: 0.143em;
  }
  span {
    color: ${({ theme }) => theme.grayScale[1]};
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

export const UserInfoCardBox = styled.li`
  font-family: 'Noto Serif KR';
  color: ${({ theme }) => theme.textColor.initial};
  background-color: ${({ theme }) => theme.background.modal};
  box-shadow: 0 0 10px rgba(224, 224, 224, 0.2);
  border: 0;
  border-radius: 3px;
  position: relative;
  width: 100%;
  cursor: pointer;
  &:hover h3 {
    color: ${({ theme }) => theme.primary[1]};
  }
  article {
    display: flex;
    flex-direction: column;
    justify-content: Center;
    align-items: center;
    width: 100%;
    & > img {
      margin-top: 2.357em;
      border-radius: 60px;
      width: 120px;
      height: 120px;
      margin-bottom: 1.071em;
      border: 1px solid ${({ theme }) => theme.grayScale[4]};
    }
    h3 {
      transition: all 0.2s ease-in-out;
      font-size: ${({ theme }) => theme.fontSize.xl};
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};
      margin: 0.875em 0;
    }
    p {
      font-size: ${({ theme }) => theme.fontSize.medium};
      margin-bottom: 2em;
      padding: 0 2em;
      text-align: center;
      line-height: 1.5;
    }
    .writer__add-info {
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
          font-weight: ${({ theme }) => theme.fontWeight.regular};
        }
        span {
          font-size: ${({ theme }) => theme.fontSize.lg};
          font-weight: ${({ theme }) => theme.fontWeight.semiBold};
        }
      }
    }
    .writer__recent-img {
      display: flex;
      width: 100%;
      .img__box {
        width: 33.3%;
        height: 90px;
        img {
          object-fit: cover;
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
    object-fit: cover;
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
      border: 0.5px solid ${({ theme }) => theme.grayScale[3]};
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
      p:nth-of-type(1) {
        flex: 1;
        height: 56px;
        width: 100%;
        text-overflow: ellipsis;
        white-space: normal;
        overflow: hidden;
      }
      p:nth-of-type(2) {
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

  @media ${({ theme }) => theme.viewPortSize.mobile} {
    width: 100%;
    height: 250px;
    & > img {
      height: 120px;
    }
    .content {
      width: 90%;
      height: 54%;
      article {
        height: 90%;
        h3 {
          display: inline;
          flex: 1;
          text-overflow: ellipsis;
          white-space: normal;
          overflow: hidden;
          font-size: 15px;
        }
        p:nth-of-type(1) {
          display: none;
        }
        .circle {
          width: 25px;
          height: 25px;
        }
        &::before {
          height: 70px;
        }
      }
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
    height: 260px;
    display: flex;
    flex-direction: column;
    & > h2 {
      line-height: 2.22;
      font-size: 18px;
      height: 40px;
      margin-bottom: 10px;
      height: 30px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    & > p {
      height: 200px;
      color: ${({ theme }) => theme.textColor.lighten};
      line-height: 2.5;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      img {
        display: block;
        width: 50px;
        height: 30px;
        object-fit: cover;
      }
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
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    width: 100%;
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
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    & > div:nth-of-type(1) {
      grid-row: 1/ 13;
      grid-column: 1/ 5;
    }
    & > div:nth-of-type(2) {
      grid-row: 1/ 8;
      grid-column: 5/ 8;
    }
    & > div:nth-of-type(3) {
      grid-row: 1/ 6;
      grid-column: 8/ 11;
    }
    & > div:nth-of-type(4) {
      grid-row: 8/ 13;
      grid-column: 5/ 8;
    }
    & > div:nth-of-type(5) {
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
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    width: 100%;
  }
`;

export const ArchiveItemContainer = styled.li<{
  length: number | undefined;
  posterId: number;
}>`
  max-width: 1020px;
  margin: 0 auto;
  margin-top: 60px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    h2 {
      text-decoration: underline;
    }
  }
  .img__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 232px;
      max-height: 350px;
      object-fit: contain;
    }
  }
  article {
    width: 500px;
    margin: 0 100px;
    font-family: 'Noto Serif KR';
    small {
      font-size: ${({ theme }) => theme.fontSize.base};
      color: ${({ theme }) => theme.textColor.lighten};
    }
    h2 {
      font-weight: 500;
      font-size: ${({ theme }) => theme.fontSize.xxxl};
      color: ${({ theme }) => theme.textColor.initial};
      margin-top: 35px;
      line-height: 33px;
    }
    h2 + p {
      margin-top: 35px;
    }
    p {
      font-size: ${({ theme }) => theme.fontSize.lg};
      color: ${({ theme }) => theme.textColor.lighten};
      margin-top: 22px;
      span + span::before {
        content: ', ';
      }
    }
    b {
      font-family: 'Montserrat';
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    flex-direction: column;
    padding: 20px 0;
    article {
      width: 100%;
      margin: 0;
      padding-top: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      small {
        margin-top: 10px;
        font-family: 'Montserrat';
        order: 5;
      }
      h2 {
        margin-top: 20px;
        line-height: 5px;
        font-size: 20px;
      }
      h2 + p {
        margin-top: 20px;
      }
      p {
        margin-top: 10px;
        font-size: 14px;
      }
    }
  }
`;

export const BlogCommentCardBox = styled.li`
  position: relative;
  max-width: 800px;
  padding: 30px 0;
  font-family: 'Noto Serif KR';
  color: ${({ theme }) => theme.textColor.initial};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  & + & {
    border-top: 1px solid ${({ theme }) => theme.grayScale[2]};
  }
  & > section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;
    & > article {
      img {
        cursor: pointer;
        position: absolute;
        margin: 0 auto;
        top: 30px;
        left: -71px;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        object-fit: cover;
      }
      div {
        strong {
          font-size: ${({ theme }) => theme.fontSize.xl};
          font-weight: ${({ theme }) => theme.fontWeight.medium};
        }
        p {
          font-family: 'Montserrat';
          margin-top: 12px;
        }
      }
    }
    & > div {
      span {
        color: ${({ theme }) => theme.textColor.lighten};
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.textColor.initial};
        }
      }
      span + span {
        margin-left: 20px;
      }
    }
  }
  & > p {
    margin-top: 15px;
    line-height: 25px;
  }
  & > .edit__form {
    textarea {
      font-family: 'san-serif';
      margin-top: 15px;
      width: 100%;
      height: 40px;
      resize: none;
      outline: none;
      border: 1px solid ${({ theme }) => theme.grayScale[1]};
    }
    & > span {
      display: block;
      text-align: right;
      font-size: 12px;
      color: ${({ theme }) => theme.grayScale[1]};
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    padding: 20px 5px;
    & > section {
      article {
        display: flex;
        img {
          position: relative;
          top: auto;
          left: auto;
          width: 40px;
          height: 40px;
          margin-right: 10px;
        }
        div {
          margin-top: 2px;
          strong {
            font-size: 14px;
          }
          p {
            margin-top: 8px;
            font-size: 12px;
          }
        }
      }
      & > div > span {
        font-size: 12px;
      }
    }
    & > p {
      margin-top: 5px;
      line-height: 25px;
    }
  }
`;

export const BlogPicstoryCardBox = styled.li`
  cursor: pointer;
  color: ${({ theme }) => theme.grayScale[1]};
  font-family: 'Noto Serif KR';
  padding: 25px;
  height: 250px;
  background-color: ${({ theme }) => theme.background.modal};
  box-shadow: 0 0 10px rgba(224, 224, 224, 0.2);
  border: 0;
  border-radius: 3px;
  margin-bottom: 50px;
  transition: 0.3s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 10px rgba(224, 224, 224, 0.5);
  }
  article {
    .picstory__description {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      h3 {
        font-size: ${({ theme }) => theme.fontSize.medium};
        font-weight: bold;
      }
      .picstory__stats {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 125px;
        & > div {
          margin-left: -0.125em;
          margin-right: 0.571em;
          display: flex;
          align-items: center;
          svg {
            padding-top: 0.071em;
            margin-right: 0.143em;
          }
          span {
            font-size: 12px;
          }
        }
        & > div:nth-of-type(3) {
          span {
            margin-right: -0.571em;
          }
        }
      }
    }
    p {
      font-size: 13px;
      margin-bottom: 32px;
    }
    .picstory__btn {
      margin-bottom: 20px;
      button {
        font-size: 12px;
        padding: 3px 16px;
      }
      button:nth-of-type(1) {
        margin-right: 8px;
      }
    }
    .picstory__recent-img {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      .img__box {
        width: 16.6%;
        height: 125px;
        margin-right: 12px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      li:nth-of-type(6) {
        margin-right: 0;
      }
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    min-height: 220px;
    height: auto;
    article {
      .picstory__recent-img {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        .img__box {
          width: 100%;
          height: 00px;
          padding-top: 100%;
          position: relative;
          img {
            position: absolute;
            top: 0;
            left: 0;
          }
        }
        .img__box:nth-of-type(3n) {
          margin-right: 0;
        }
      }
    }
  }
`;

export const BlogPostCardBox = styled.li`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.base};
  text-align: justify;
  line-height: 1.8;
  font-family: 'Noto Serif KR';
  color: ${({ theme }) => theme.textColor.initial};
  article {
    width: 100%;
    .img__wrapper {
      background: #fff;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.714em;
      & > img {
        border-radius: 3px;
        min-width: 100%;
        min-height: 100%;
      }
    }

    .post__description {
      margin-bottom: 1em;
      span {
        font-size: 13px;
        display: inline-block;
        color: ${({ theme }) => theme.grayScale[1]};
        border-bottom: 1px solid ${({ theme }) => theme.grayScale[2]};
        margin-bottom: 0.214em;
        cursor: pointer;
      }
      h3 {
        transition: all 0.25s ease-in-out;
        font-weight: 600;
        font-size: ${({ theme }) => theme.fontSize.lg};
        margin-bottom: 0.533em;
      }
      p {
        height: 47px;
        overflow: hidden;
        text-overflow: ellipsis;
        transition: all 0.25s ease-in-out;
        color: ${({ theme }) => theme.grayScale[1]};
        margin-bottom: 1.286em;
      }
    }
    .post__info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.786em;
      font-size: ${({ theme }) => theme.fontSize.small};
      .post__stats {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 18%;
        div:nth-of-type(1) {
          span {
            margin: 0 1em 0 -0.125em;
          }
        }
        div {
          display: flex;
          align-items: center;
          svg {
            color: ${({ theme }) => theme.grayScale[1]};
            padding-top: 0.071em;
            margin-right: 0.25em;
            font-size: ${({ theme }) => theme.fontSize.medium};
          }
        }
      }
    }
  }
  &:hover {
    .post__description {
      p,
      h3 {
        color: ${({ theme }) => theme.primary[1]};
      }
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    article {
      & > .img__wrapper {
        & > img {
          min-width: auto;
          width: 100%;
          min-height: auto;
          max-height: 450px;
          height: auto;
          object-fit: cover;
        }
      }
      .img__wrapper {
        background: #fff;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 0.714em;
      }
    }
  }
`;
