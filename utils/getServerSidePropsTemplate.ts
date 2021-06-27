/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { Store } from 'redux';
import wrapper from '../modules/store';
import { State } from '../modules';
import { authAction } from '../modules/user';
import { ParsedUrlQuery } from 'node:querystring';
import { GetServerSidePropsContext } from 'next-redux-wrapper';

interface ContextType extends GetServerSidePropsContext {
  store: Store<State, any>;
}

type GetServerSidePropsContextType = (
  callBackArr: Array<any>
) => GetServerSideProps<Promise<void>, ParsedUrlQuery>;

export const getMultipleServerSideProps: GetServerSidePropsContextType = callBackArr => {
  const getServerSideProps = wrapper.getServerSideProps(async context => {
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    await Promise.all([
      context.store.dispatch(authAction(null)),
      callBackArr.map(callback => context.store.dispatch(callback)),
    ]);
  });
  return getServerSideProps;
};

export const authServersiceAction = async (context: ContextType): Promise<void> => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  await context.store.dispatch(authAction(null));
};
