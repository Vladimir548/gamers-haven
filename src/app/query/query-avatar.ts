import { axiosData, instance } from '@/api/axios';
import { getIdUser } from '@/services/auth/auth.helper';
import { API_URL } from '@/constants';

const id = getIdUser();
export const QueryAvatar = {
  async addImage(image: any) {
    const formData = new FormData();
    formData.append('file', image);

    try {
      const { data } = await axiosData.post(`${API_URL}/file`, formData);
      if (data) {
        const requestBody = {
          avatar: data.url,
        };
        await instance.post(`${API_URL}/auth/avatar?id=${id}`, requestBody);
      }
      return data as any;
    } catch (e) {
      console.log('Ошибочка');
    }
  },
};
