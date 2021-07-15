import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) {}
    @Get('')
    getIndex():string{
        this.userService.create();
        return "222"
    }

}
