import axios, { CreateAxiosDefaults } from 'axios';

import { getAccessToken, removeFromStorage } from '@/services/auth/auth.helper';

import { authService } from '@/services/auth/auth.service';
import { errorCatch, getContentType, getContentTypeData } from './api.helper';
import { API_URL } from '@/constants';
import { getAuthTokenIGDB } from '@/app/query/query-auth';
import Cookies from 'js-cookie';

const axiosOptions: CreateAxiosDefaults = {
  baseURL: API_URL,
  headers: getContentType(),
  withCredentials: true,
};
const axiosOptionsData: CreateAxiosDefaults = {
  baseURL: API_URL,
  headers: getContentTypeData(),
  withCredentials: true,
};
const axiosOptionsIGDB: CreateAxiosDefaults = {
  headers: {
    'Client-ID': process.env.NEXT_PUBLIC_CLIENTID,
    'Content-Type': 'text/plain',
  },
};

export const axiosClassic = axios.create(axiosOptions);

export const axiosData = axios.create(axiosOptionsData);

export const axiosIGDB = axios.create(axiosOptions);
export const instance = axios.create(axiosOptions);
export const instanceIGDB = axios.create(axiosOptionsIGDB);

instance.interceptors.request.use((config) => {
  const accessToken = getAccessToken();
  if (config?.headers && accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

instanceIGDB.interceptors.request.use(async (config) => {
  const token = Cookies.get('igdbToken');

  if (config.headers && token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});
instanceIGDB.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;
    if (error?.response?.status === 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const token = await getAuthTokenIGDB();
        Cookies.set('igdbToken', token.access_token, {
          expires: token.expires_in,
          domain: process.env.NEXT_PUBLIC_DOMAIN,
        });
        return instanceIGDB.request(originalRequest);
      } catch (error) {
        console.log('Error token igdb');
      }
    }
  },
);
instance.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (
      (error?.response?.status === 401 ||
        errorCatch(error) === 'jwt expired' ||
        errorCatch(error) === 'jwt must be provided') &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        await authService.getNewTokens();
        return instance.request(originalRequest);
      } catch (error) {
        if (errorCatch(error) === 'jwt expired') removeFromStorage();
      }
    }

    throw error;
  },
);
