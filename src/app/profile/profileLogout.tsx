'use client';

import { authService } from '@/services/auth/auth.service';
import { useRouter } from 'next/navigation';
import { MdLogout } from 'react-icons/md';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export default function ProfileLogout() {
  const { push } = useRouter();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ['logout'],
    mutationFn: () => authService.logout(),
    onSuccess: async () => {
      toast.success('Your leave from account');
      push('/login');
      await queryClient.invalidateQueries({ queryKey: ['get-current-user'] });
    },
  });

  return (
    <div>
      <button
        className={
          'w-[100px] h-[40px] flex gap-x-2 justify-center items-center rounded-lg ease-in-out duration-300 border border-red-600 hover:bg-red-600 '
        }
        onClick={() => mutate()}
      >
        <span>
          <MdLogout />
        </span>

        <span>Logout</span>
      </button>
    </div>
  );
}
