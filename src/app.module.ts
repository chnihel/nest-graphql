import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { AppResolver } from './app.resolver';
import { UserService } from './user/user.service';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver:ApolloDriver, 
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),

  }),MongooseModule.forRoot('mongodb://localhost:27017',{dbName: 'nestwithgraphql'}), UserModule,
  
  ],
  controllers: [AppController],
  providers: [AppService,AppResolver],
})
export class AppModule {}
