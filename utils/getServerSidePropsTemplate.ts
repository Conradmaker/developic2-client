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
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch(authAction(null));
    _forEach(callBackArr, callback => context.store.dispatch(callback));
  });
  return getServerSideProps;
};

export const authServersiceAction = (context: ContextType): void => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  context.store.dispatch(authAction(null));
};

export default initialGetServerSideProps;
