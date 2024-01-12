'use client';

import { authService } from '@/services/auth/auth.service';
import { useRouter } from 'next/navigation';
import { MdLogout } from 'react-icons/md';
import { useQueryClient } from '@tanstack/react-query';

export default function ProfileLogout() {
  const { push } = useRouter();
  const queryClient = useQueryClient();
  const handlerLogout = async () => {
    await authService.logout();
    push('/login');
    // await queryClient.invalidateQueries({
    //   queryKey: ['get-current-user'],
    // });
  };
  return (
    <div>
      <button
        className={
          'w-[100px] h-[40px] flex gap-x-2 justify-center items-center rounded-lg ease-in-out duration-300 border-1 border-red-600 hover:bg-red-600 '
        }
        onClick={() => handlerLogout()}
      >
        <span>
          <MdLogout />
        </span>

        <span>Logout</span>
      </button>
    </div>
  );
}
