import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/user.entity';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
      ) {}


      create(): Promise<User> {
        const user = new User();
        user.firstName ="test";
        user.lastName = "test";
        
        return this.usersRepository.save(user);

 
      }
}
