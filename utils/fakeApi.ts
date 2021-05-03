import axios from 'axios';

export const addHashAPI = async (name: string): Promise<{ id: number; name: string }> => {
  const res = await axios.post<{ id: number; name: string }>(
    'http://localhost:8000/post/hashtag',
    { name }
  );
  return res.data;
};
export const getHashAPI = async (
  keyword: string
): Promise<{ id: number; name: string }[]> => {
  const res = await axios.get<{ id: number; name: string }[]>(
    `${process.env.NEXT_PUBLIC_SERVER_HOST}/post/hashtag?keyword=${keyword}`
  );
  return res.data;
};

// export const postPreSave = async data => {
//   const res = await axios.post('http://localhost:8000/post/presave', data);
//   return res.data;
// };

// export const postSubmit = async data => {
//   const res = await axios.post('http://localhost:8000/post/submit', data);
//   return res.data;
// };

export const addPicstoryAPI = async data => {
  const res = await axios.post('http://localhost:8000/picstory/post', data);
  return res.data;
};
export const removePicstoryAPI = async data => {
  const res = await axios.patch('http://localhost:8000/picstory/post', data);
  return res.data;
};
export const destroyPicstoryAPI = async PicstoryId => {
  const res = await axios.delete(`http://localhost:8000/picstory/${PicstoryId}`);
  return res.data;
};
export const createPicstory = async data => {
  const res = await axios.post('http://localhost:8000/picstory', data);
  return res.data;
};
export const getPicstoryList = async UserId => {
  const res = await axios.get(`http://localhost:8000/picstory/${UserId}`);
  return res.data;
};

// export const getTempPostContent = async PostId => {
//   const res = await axios.get(`http://localhost:8000/post/temp/${PostId}`);
//   return res.data;
// };
