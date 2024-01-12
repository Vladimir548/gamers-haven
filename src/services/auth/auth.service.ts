import { axiosClassic, instance } from '@/api/axios';

import { removeFromStorage, saveTokenStorage } from './auth.helper';
import { IAuthResponse, IFormData } from './auth.types';
import { IUser } from '@/interface/user/interface-user';
import axios from 'axios';

export enum EnumTokens {
  'ACCESS_TOKEN' = 'accessToken',
  'REFRESH_TOKEN' = 'refreshToken',
}

export const authService = {
  async main(type: 'login' | 'register', data: IFormData) {
    const response = await axiosClassic.post<IAuthResponse>(`/auth/${type}`, data);

    if (response.data.accessToken) saveTokenStorage(response.data.accessToken);

    return response;
  },

  async getNewTokens() {
    const response = await axiosClassic.post<IAuthResponse>('/auth/login/access-token');

    if (response.data.accessToken) saveTokenStorage(response.data.accessToken);

    return response;
  },

  async logout() {
    const response = await axiosClassic.post<boolean>('/auth/logout');

    if (response.data) removeFromStorage();

    return response;
  },

  async user() {
    return axiosClassic.post<IUser>(`/auth/users`, {});
  },
};
