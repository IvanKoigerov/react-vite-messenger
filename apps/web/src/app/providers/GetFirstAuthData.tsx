import { useEffect } from 'react';

import { extraAuthAction } from '~/entities/auth';
import { useAppDispatch } from '~/shared/hooks/redux.ts';

const GetFirstAuthData = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(extraAuthAction.refresh());
  }, [dispatch]);

  return null;
};

export default GetFirstAuthData;
