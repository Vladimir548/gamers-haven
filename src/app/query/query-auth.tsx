'use server';
import axios from 'axios';

let accessToken = '';
let expressIn = 0;
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
export async function getAccessTokenIGDB() {
  if (!accessToken) {
    await getAuthTokenIGDB(); // Получаем первый токен
  }
  return accessToken;
}
export async function ensureAccessToken() {
  const currentTime = Date.now() / 1000;
  const expirationTime = expressIn;

  if (currentTime >= expirationTime) {
    await getAccessTokenIGDB();
  }
  return accessToken;
}
