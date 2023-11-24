import { useCallback } from 'react';

import { storageKeys } from '@constants/storage';

const useAuth = () => {
  const setAccessToken = useCallback((token: string) => {
    localStorage.setItem(storageKeys.ACCESS_TOKEN, token);
  }, []);
  const setExpiredTime = useCallback((time: string) => {
    localStorage.setItem(storageKeys.EXPIRED_TIME, time);
  }, []);
  const accessToken = localStorage.getItem(storageKeys.ACCESS_TOKEN);
  const expiredTime = localStorage.getItem(storageKeys.EXPIRED_TIME);

  const destroyToken = useCallback(() => {
    localStorage.removeItem(storageKeys.ACCESS_TOKEN);
    localStorage.removeItem(storageKeys.EXPIRED_TIME);
  }, []);

  return { setAccessToken, setExpiredTime, destroyToken, accessToken, expiredTime };
};

export default useAuth;
