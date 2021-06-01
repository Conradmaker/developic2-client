/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { Store } from 'redux';
import _forEach from 'lodash/forEach';
import wrapper from '../modules/store';
import { State } from '../modules';
import { authAction } from '../modules/user';
import { ParsedUrlQuery } from 'node:querystring';
import { GetServerSidePropsContext } from 'next-redux-wrapper';

interface ContextType extends GetServerSidePropsContext {
  store: Store<State, any>;
}

type GetServerSidePropsContextType = (
  callBackArr?: Array<any>
) => GetServerSideProps<Promise<void>, ParsedUrlQuery>;

const initialGetServerSideProps: GetServerSidePropsContextType = callBackArr => {
  const getServerSideProps = wrapper.getServerSideProps(async context => {
    console.log('SSR시작');
    //쿠키 전달
    const cookie = context.req ? context.req.headers.cookie : ''; //이 안에 쿠키 들어있음.
    //쿠키 공유 방지
    axios.defaults.headers.Cookie = ''; //아닐때는 쿠키 제거
    if (context.req && cookie) {
      //서버일때 & 쿠키가 있을때만
      axios.defaults.headers.Cookie = cookie; //쿠키를 넣어주고
    }
    await context.store.dispatch(authAction(null));
    _forEach(callBackArr, async callback => await context.store.dispatch(callback));
    console.log('SSR끝');
  });
  return getServerSideProps;
};

export const authServersiceAction = async (context: ContextType): Promise<void> => {
  console.log('SSR시작');
  //쿠키 전달
  const cookie = context.req ? context.req.headers.cookie : ''; //이 안에 쿠키 들어있음.
  //쿠키 공유 방지
  axios.defaults.headers.Cookie = ''; //아닐때는 쿠키 제거
  if (context.req && cookie) {
    //서버일때 & 쿠키가 있을때만
    axios.defaults.headers.Cookie = cookie; //쿠키를 넣어주고
  }
  await context.store.dispatch(authAction(null));
};

export default initialGetServerSideProps;
