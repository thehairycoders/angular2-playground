import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

    constructor() { }

    getAge(dateOfBirth: string): number {

        let today: Date = new Date();
        
        let birthDate: Date = new Date(dateOfBirth);
        
        let age: number = today.getFullYear() - birthDate.getFullYear();
        
        let monthsDifference = today.getMonth() - birthDate.getMonth();
        
        if (monthsDifference < 0 || (monthsDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    }
}

