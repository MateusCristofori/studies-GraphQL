import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { User } from '../schema/User';
import { randomUUID } from 'crypto';

@Resolver()
export class UserResolver {
  private database: User[] = [];


  @Query(() => [User])
  async getAllUsers() {
    return this.database;
  }


  @Mutation(() => User)
  async createUser(@Arg('name') name: string) {
    const user = {
      id: randomUUID(),
      name
    }
    
    this.database.push(user);

    return user;
  }
}