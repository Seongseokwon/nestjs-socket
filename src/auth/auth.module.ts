import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from './user/user.service';
import { TypeOrmExModule } from '../config/typeorm-config/typeorm-ex.module';
import { UserRepository } from './user/user.repository';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([UserRepository])],
  controllers: [AuthController],
  providers: [AuthService, UserService],
})
export class AuthModule {}
