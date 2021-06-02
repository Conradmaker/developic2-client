import dayjs from 'dayjs';
import _forEach from 'lodash/forEach';
import { RecentViewType } from '../modules/drawer';

export type ComputedListType = { [key: string]: RecentViewType[] };

export const sortByDate = (list: RecentViewType[]): ComputedListType => {
  const sections: ComputedListType = {};
  _forEach(list, v => {
    const date = dayjs(v.updatedAt).format('YYYY.MM.DD');
    if (Array.isArray(sections[date])) {
      sections[date].push(v);
    } else {
      sections[date] = [v];
    }
  });
  console.dir(sections);
  return sections;
};
