import { MessengerApi } from '@messenger/frontend-shared/backend-types/MessengerApi.ts';

import { taxios } from '~/shared/service';

export const fetchAllUser = () => taxios.$get('/api/users');

export const fetchUserById = (id: string) => taxios.$get('/api/users/{id}', { params: { id } });

export const createUser = (user: MessengerApi.CreateUserDto) => taxios.$post('/api/users', user);

export const deleteUser = (id: string) => taxios.$delete('/api/users/{id}', { params: { id } });

export const patchUser = (user: MessengerApi.User) =>
  taxios.$patch('/api/users/{id}', user, {
    params: {
      id: user.id.toString(),
    },
  });
