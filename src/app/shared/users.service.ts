import { Injectable } from '@angular/core';
import { IUser } from '../types/interfaces';

@Injectable({providedIn: 'root'})
export class UsersService {
    users: IUser [] = [];
    constructor() { }

    addUser(user: IUser) {
        this.users = [...this.users, user];
    }

    removeUser(userId: string): void {
        const updateUsers = this.users.filter((user) => userId != user.id);
        this.users = updateUsers;
    }
    
}