// useToken.ts
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export const useToken = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  return token;
};
