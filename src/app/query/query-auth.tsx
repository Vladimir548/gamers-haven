'use server';
import axios from 'axios';


export async function getAuthTokenIGDB() {
  try {
    const { data } = await axios.post<IAuthToken>(
      `https://id.twitch.tv/oauth2/token?client_id=${process.env.NEXT_PUBLIC_CLIENTID}&client_secret=${process.env.NEXT_PUBLIC_SECRETCLIENT}&grant_type=client_credentials`,
    );
    return data;
  } catch (error) {
    console.log('ошибка при обновлении токена', error);
    throw error;
  }
}

