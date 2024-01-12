import { instance } from '@/api/axios';

import { IUser } from '@/interface/user/interface-user';
import { API_URL } from '@/constants';

export const QueryUser = {
  async getUserInfo(id: number | undefined) {
    if (id) {
      const { data } = await instance.get<IUser>(`${API_URL}/auth/${id}/user`);
      return data as IUser;
    }
  },
};
