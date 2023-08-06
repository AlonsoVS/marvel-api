import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { ComicModule } from './comic';

@Module({
  imports: [
    ComicModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true,
      include: ComicModule,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
