import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserRepository } from './user.repository';
import { LoginUserDTO } from './dto/login-user.dto';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async register(createUserDTO: CreateUserDTO): Promise<any> {
    return await this.userRepository.save(createUserDTO);
  }

  async login(loginUserDTO: LoginUserDTO): Promise<any> {
    const { email, password } = loginUserDTO;
    return await this.userRepository.findOne({
      where: {
        email,
        password,
      },
    });
  }
}
