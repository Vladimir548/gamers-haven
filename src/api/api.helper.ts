export const getContentType = () => ({
  'Content-Type': 'application/json',
});
export const getContentTypeData = () => ({
  'Content-Type': 'multipart/form-data',
});

export const errorCatch = (error: any): string => {
  const message = error?.response?.data?.message;

  return message
    ? typeof error.response.data.message === 'object'
      ? message[0]
      : message
    : error?.message;
};

export const errorCode = (error: any) => {
  const code = error?.response?.status;
  return code ? (typeof error.response.status === 'object' ? code[0] : code) : error?.code;
};
