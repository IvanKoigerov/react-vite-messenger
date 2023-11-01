export namespace MessengerApi {
  export interface CreateUserDto {
    /**
     * Email пользователя
     */
    email: string;
    /**
     * Имя пользователя
     */
    name: string;
    /**
     * Пароль пользователя
     */
    password: string;
  }
  export interface User {
    /**
     * Email пользователя
     */
    email: string;
    /**
     * Уникальный идентификатор
     */
    id: number;
    /**
     * Имя пользователя
     */
    name: string;
    /**
     * Пароль пользователя
     */
    password: string;
  }
  export interface UpdateUserDto {}
  export interface CreateRoleDto {
    /**
     * Название роли
     */
    name: string;
  }
  export interface Role {
    /**
     * Уникальный идентификатор
     */
    id: number;
    /**
     * Название роли
     */
    name: string;
  }
  export interface UpdateRoleDto {
    /**
     * Название роли
     */
    name?: string;
  }
  export interface LoginDto {
    /**
     * Email пользователя
     */
    email: string;
    /**
     * Пароль пользователя
     */
    password: string;
  }
  export interface LoginReturnDto {
    /**
     * Access Token
     */
    accessToken: string;
    /**
     * Refresh Token
     */
    refreshToken: string;
  }
}

export interface MessengerApi {
  version: '1';
  routes: {
    '/api/users': {
      GET: {
        response: MessengerApi.User[];
      };
      POST: {
        body: MessengerApi.CreateUserDto;
        response: MessengerApi.User;
      };
    };
    '/api/users/{id}': {
      GET: {
        params: {
          id: string;
        };
        response: MessengerApi.User;
      };
      DELETE: {
        params: {
          id: string;
        };
      };
      PATCH: {
        body: MessengerApi.UpdateUserDto;
        params: {
          id: string;
        };
        response: MessengerApi.User;
      };
    };
    '/api/roles': {
      GET: {
        response: MessengerApi.Role[];
      };
      POST: {
        body: MessengerApi.CreateRoleDto;
        response: MessengerApi.Role;
      };
    };
    '/api/roles/{id}': {
      GET: {
        params: {
          id: string;
        };
        response: MessengerApi.Role;
      };
      DELETE: {
        params: {
          id: string;
        };
      };
      PATCH: {
        body: MessengerApi.UpdateRoleDto;
        params: {
          id: string;
        };
        response: MessengerApi.Role;
      };
    };
    '/api/auth/login': {
      POST: {
        body: MessengerApi.LoginDto;
        response: MessengerApi.LoginReturnDto;
      };
    };
    '/api/auth/registration': {
      POST: {
        body: MessengerApi.CreateUserDto;
        response: MessengerApi.LoginReturnDto;
      };
    };
    '/api/auth/logout': {
      POST: {};
    };
    '/api/auth/refresh': {
      GET: {};
    };
  };
}
