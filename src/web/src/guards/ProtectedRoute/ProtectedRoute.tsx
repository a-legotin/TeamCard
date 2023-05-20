import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'src/redux/hooks';
import { PATH_NAME } from '../../configs';

export const ProtectedRoute = ({ children }) => {
  const { isAuth } = useAppSelector((state) => state.user);
  console.log('authenticated: ' + isAuth);
  return isAuth ? children : <Navigate to={PATH_NAME.LOGIN} />;
};
