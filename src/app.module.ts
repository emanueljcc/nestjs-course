import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { HelloController } from './hello/hello.controller';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { PaymentsModule } from './payments/payments.module';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [TasksModule, ProjectsModule, AuthModule, PaymentsModule, UsersModule],
  controllers: [HelloController, UsersController],
  providers: [UsersService, PrismaService],
})
export class AppModule {}
