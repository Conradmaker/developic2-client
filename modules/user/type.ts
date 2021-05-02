// 초기 상태 타입
export interface User {
  id: number;
  email: string;
  name: string;
  nickname: string;
  refreshToken: string;
  accessToken: string;
  socialId: string;
  gender: string;
  birth: string;
  introduce: string;
  avatar: string;
  lastLogin: string;
}
export interface UserIntro {
  id: number;
  introduction: string;
  website: string;
  mostlyUseModel: string;
  summary?: string;
}
export type UserState = {
  login: { loading: boolean; data: null | unknown; error: null | unknown };
  logout: { loading: boolean; data: null | unknown; error: null | unknown };
  signup: { loading: boolean; data: null | unknown; error: null | unknown };
  socialRequest: { loading: boolean; data: null | unknown; error: null | unknown };
  auth: { loading: boolean; data: null | unknown; error: null | unknown };
  verification: { loading: boolean; data: null | unknown; error: null | unknown };
  userIntro: { loading: boolean; data: null | UserIntro; error: null | unknown };
  updateUser: { loading: boolean; data: null | unknown; error: null | unknown };
  userData: User | null;
};

// 액션 Payload 타입
export type LoginPayload = {
  email: string;
  password: string;
};
export type SignupPayload = {
  email: string;
  password: string;
  name: string;
  nickname: string;
};
export type VerificationPayload = {
  email: string;
  code: string;
};
export type SocialLoginPayload = {
  loginType: string;
  email: string;
};
export type UpdateUserIntroPayload = {
  UserId: number;
  introduction: string;
  mostlyUseModel: string;
  website: string;
  summary: string;
};
//성공시 DataType
export type LoginResponse = User;
