// 초기 상태 타입
export interface User {
  id: number;
  email: string;
  name: string;
  nickname: string;
  refreshToken: null;
  accessToken: null;
  socialId: null;
  gender: null;
  birth: null;
  introduce: null;
  avatar: string;
  lastLogin: null;
}
export type UserState = {
  login: { loading: boolean; data: null | unknown; error: null | unknown };
  auth: { loading: boolean; data: null | unknown; error: null | unknown };
  userData: User | null;
};

// 액션 Payload 타입
export type LoginPayload = {
  email: string;
  password: string;
};

//성공시 DataType
export type LoginResponse = User;
