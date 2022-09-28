import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private repo: Repository<User>) { }

    create(email: string, password: string) {
        const user = this.repo.create({ email, password });

        return this.repo.save(user);
    }

    findOne(id: string) {
        return this.repo.findOne(id)

    }
    find(email: string) {
        return this.repo.find({ email })
    }
    remove() { }

    // update(id: string, attr: Partial<User>) {
    //     const user = this.repo.findOne(id)
    //     if (!user) {
    //         throw new NotFoundException("not found ")
    //     }
    //     Object.assign(user, attr)
    //     return this.repo.save(user)
    // }

}

