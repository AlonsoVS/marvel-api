import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { ComicModule } from './comic';
import { CharacterModule } from './character';
import { SharedModule } from './shared';

@Module({
  imports: [
    SharedModule,
    ComicModule,
    CharacterModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true,
      include: [ComicModule, CharacterModule],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
