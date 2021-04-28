// 초기 상태 타입
export type UserState = {
  login: { loading: boolean; data: null | unknown; error: null | unknown };
  userData: any;
};

// 액션 Payload 타입
export type LoginPayload = {
  email: string;
  password: string;
};

//성공시 DataType
export type LoginResponse = {
  id: number;
  name: string;
};
