import { Module } from '@nestjs/common';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { PlayerModule } from './player/player.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    PlayerModule,
    MongooseModule.forRoot('mongodb://localhost:27017'),
    CategoryModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
