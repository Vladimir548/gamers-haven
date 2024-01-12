import { IUser } from '@/interface/user/interface-user';

export interface IAuthResponse {
  accessToken: string;
  user: IUser;
}

export interface IFormData {
  email: string;
  password: string;
  name: string;
  avatar: string;
}
