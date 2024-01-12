import { useQuery } from '@tanstack/react-query';
import { QueryUser } from '@/app/query/query-user';
import { getIdUser } from '@/services/auth/auth.helper';

export default function UseCurrentUser() {
  const id = getIdUser();
  const { data } = useQuery({
    queryKey: ['get-current-user', id],
    queryFn: () => QueryUser.getUserInfo(id),
  });
  return data;
}
