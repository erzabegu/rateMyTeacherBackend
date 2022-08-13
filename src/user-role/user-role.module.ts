import { Module } from '@nestjs/common';
import { UserRoleService } from './user-role.service';
import { UserRoleController } from './user-role.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRole, UserRoleScheme } from 'src/Schemas/userRole.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: UserRole.name, schema: UserRoleScheme }])],
  controllers: [UserRoleController],
  providers: [UserRoleService]
})
export class UserRoleModule { }
