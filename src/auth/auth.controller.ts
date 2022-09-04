import {
  Body,
  Controller,
  InternalServerErrorException,
  Post,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDTO } from './user/dto/create-user.dto';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { LoginUserDTO } from './user/dto/login-user.dto';
@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createUserDTO: CreateUserDTO, @Res() res: Response) {
    try {
      const result = await this.authService.register(createUserDTO);
      if (result) {
        return res.send({ message: 'ok' });
      }
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException();
    }
  }

  @Post('login')
  async login(@Body() loginUserDTO: LoginUserDTO, @Res() res: Response) {
    const result = await this.authService.login(loginUserDTO);
    if (result === null) {
      throw new UnauthorizedException('인증되지 않은 사용자입니다.');
    } else {
      res.status(200).send({ message: 'ok' });
    }
  }
}
