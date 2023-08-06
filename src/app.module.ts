import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { ComicModule } from './comic';
import { CharacterModule } from './character';
import { SharedModule } from './shared';
import { CreatorModule } from './creator';

@Module({
  imports: [
    SharedModule,
    CreatorModule,
    ComicModule,
    CharacterModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true,
      include: [ComicModule, CharacterModule, CreatorModule],
      path: '/',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
