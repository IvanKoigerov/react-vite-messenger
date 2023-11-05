import { MessengerApi } from '@messenger/frontend-shared/backend-types/MessengerApi.ts';

import { taxios } from '~/shared/service';

export const fetchLogin = (body: MessengerApi.LoginDto) => taxios.$post('/api/auth/login', body);

export const fetchRegister = (body: MessengerApi.CreateUserDto) => taxios.$post('/api/auth/registration', body);

export const fetchLogout = () => taxios.$post('/api/auth/logout');

export const fetchRefresh = () =>
  taxios.$post('/api/auth/refresh').then((val) => {
    console.log('api', val);
    return val;
  });
