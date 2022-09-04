import { Injectable } from '@nestjs/common';
import { UserService } from './user/user.service';
import { CreateUserDTO } from './user/dto/create-user.dto';
import { LoginUserDTO } from './user/dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async register(createUserDTO: CreateUserDTO): Promise<any> {
    return await this.userService.register(createUserDTO);
  }

  async login(loginUserDTO: LoginUserDTO): Promise<any> {
    return await this.userService.login(loginUserDTO);
  }
}
