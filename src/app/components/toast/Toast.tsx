import toast from 'react-hot-toast';

interface IToast {
  message: string;
}
export default function Toast({ message }: IToast) {
  return () =>
    toast(message, {
      position: 'bottom-right',
      duration: 3000,
      iconTheme: {
        primary: '#000',
        secondary: '#fff',
      },
    });
}
