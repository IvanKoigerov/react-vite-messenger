import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const req = context.switchToHttp().getRequest();
      const authHeader = req.headers.authorization;

      if (!authHeader) throw new UnauthorizedException('Пользователь не авторизирован');

      const token = authHeader.split(' ')[1];

      if (!token) throw new UnauthorizedException('Пользователь не авторизирован');

      const user = this.jwtService.verify(token);
      req.user = user;
      return !!user;
    } catch (err) {
      console.error(err);
      throw new UnauthorizedException('Пользователь не авторизирован');
    }
  }
}
