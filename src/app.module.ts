import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './modules/post/post.module';
// const __typeOrm = {
//   type: 'mysql',
//   host: 'localhost',
//   port: 3306,
//   username: 'nest',
//   password: 'password',
//   database: 'nest',
//   synchronize: true,
//   logging: true,
//   entities: [__dirname + '/**/*.entity{.ts,.js}'],
// }
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    PostModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
